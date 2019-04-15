import NextApp, { Container } from 'next/app';
import Page from 'components/page';

export default class App extends NextApp {

    render() {
        const { Component, pageProps } = this.props;
        const title = Component.title;
        return (
            <Container>
                {title !== null && title !== undefined ? <Page title={title}>
                    <Component {...pageProps} />
                </Page> : <Component {...pageProps} />}
            </Container>
        );
    }

}
