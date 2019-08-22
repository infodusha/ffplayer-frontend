import { useRef } from 'react';
import PropTypes from 'prop-types';
import init from './index';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/react-hooks';
import { getDataFromTree } from '@apollo/react-ssr';

export default function withApollo(Component) {

    function WithApolloComponent(props) {
        let apolloClient = useRef(init(props.apolloState));
        return (
            <ApolloProvider client={apolloClient.current}>
                <Component {...props} />
            </ApolloProvider>
        );
    }

    WithApolloComponent.propTypes = {
        apolloState: PropTypes.object,
    };

    WithApolloComponent.displayName = `withApollo(${Component.displayName || Component.name || Component.constructor.name || 'Component'})`;

    WithApolloComponent.getInitialProps = async function(ctx) {
        const { AppTree } = ctx;

        let props = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

        const apollo = init();
        if(typeof window === 'undefined') {
            try {
                await getDataFromTree(<AppTree {...props} apolloClient={apollo} />);
            } catch (error) {
                console.error('Error while running `getDataFromTree`', error);
            }
            Head.rewind();
        }

        const apolloState = apollo.cache.extract();

        return {
            ...props,
            apolloState,
        };
    };

    return WithApolloComponent;

}
