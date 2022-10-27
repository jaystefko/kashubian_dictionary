import type { AppProps } from 'next/app';
// import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import '../styles/global.css';
import Head from 'next/head';
import { IntlProvider } from 'react-intl';

import pl from '../lang/pl.json';
// import csb from '../lang/pl.json';
// import en from '../lang/en.json';
// import de from '../lang/pl.json';
// import uk from '../lang/pl.json';

// import { LOCALES } from '../utils/types';

// const messages = {
//   pl,
//   csb,
//   en,
//   de,
//   uk,
// };

function App({ Component, pageProps }: AppProps) {
  // let { locale } = useRouter();
  // if (!locale) locale = LOCALES.pl;

  // locale={locale} messages[locale as LOCALES] as Record<any, any>
  return (
    <IntlProvider locale={'pl'} messages={pl}>
      <Head>
        <title>Sloworz - Słownik języka kaszubskiego</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' href='/favicon.ico' />
        <link rel='manifest' href='/manifest.json' />
        <meta name='author' content='JStefko Jakub Stefko' />
        <meta name='description' content='Sloworz - internetowy słownik języka kaszubskiego' />
        <meta property='og:image' content='/favicon.ico' />
        <meta name='og:title' content='Sloworz - Słownik języka kaszubskiego' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='theme-color' content='#fdcd01' />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </IntlProvider>
  );
}

export default App;
