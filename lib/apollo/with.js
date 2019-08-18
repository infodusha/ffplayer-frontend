import { useRef } from 'react';
import PropTypes from 'prop-types';
import init from './index';
import Head from 'next/head';
import { getDataFromTree } from '@apollo/react-ssr';

export default function withApollo (App) {

    function Apollo(props) {
        let apolloClient = useRef(init(props.apolloState));

        return <App apolloClient={apolloClient} {...props} />;
    }

    Apollo.propTypes = {
        apolloState: PropTypes.object,
    };

    Apollo.displayName = 'withApollo(App)';

    Apollo.getInitialProps = async function(ctx) {
        const { AppTree } = ctx;

        let appProps = {};
        if(App.getInitialProps)
            appProps = await App.getInitialProps(ctx);

        const apollo = init();
        if(typeof window === 'undefined') {
            try {
                await getDataFromTree(<AppTree {...appProps} apolloClient={apollo} />);
            } catch (error) {
                console.error('Error while running `getDataFromTree`', error);
            }
            Head.rewind();
        }

        const apolloState = apollo.cache.extract();

        return {
            ...appProps,
            apolloState,
        };
    };

    return Apollo;

}
