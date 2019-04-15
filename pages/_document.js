import NextDocument, { Head, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {

    render() {
        return (
            <html lang="ru">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }

}
