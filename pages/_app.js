import NextApp from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import withApollo from 'lib/apollo/with';

class App extends NextApp {
    render () {
        const { Component, pageProps, apolloClient } = this.props;
        return (
            <ApolloProvider client={apolloClient}>
                <Component {...pageProps} />
            </ApolloProvider>
        );
    }
}

export default withApollo(App);
