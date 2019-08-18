import App from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import withApollo from 'lib/apollo/with';

class MyApp extends App {
    render () {
        const { Component, pageProps, apolloClient } = this.props;
        return (
            <ApolloProvider client={apolloClient}>
                <Component {...pageProps} />
            </ApolloProvider>
        );
    }
}

export default withApollo(MyApp);
