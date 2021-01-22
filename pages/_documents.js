import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head/>
        <body>
          <Main />
          <NextScript />
          <script src="assets/scripts/sharer.min.js"/>
        </body>
      </Html>
    )
  }
}