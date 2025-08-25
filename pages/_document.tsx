import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html data-scroll-behavior="smooth">
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="keywords" content="medizinische assistenz, terminvereinbarung, übersetzung, arzttermin, deutschland" />
        <meta name="author" content="Yelyzaveta" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}