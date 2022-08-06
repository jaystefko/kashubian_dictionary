import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import '../styles/global.css'
import Head from 'next/head'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Sloworz - Słownik języka kaszubskiego</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='author' content='JStefko Jakub Stefko' />
        <meta name='description' content='Sloworz - internetowy słownik języka kaszubskiego' />
        <meta property='og:image' content='/favicon.ico' />
        <meta name='og:title' content='Sloworz - Słownik języka kaszubskiego' />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default App
