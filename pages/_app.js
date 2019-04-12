import App, { Container } from 'next/app';
import Page from 'components/common/page';

export default class CustomApp extends App {

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
