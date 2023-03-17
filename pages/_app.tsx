import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import '../styles/global.css'
import Head from 'next/head'
import { IntlProvider } from 'react-intl'

import pl from '../lang/pl.json'
import csb from '../lang/csb.json'
import en from '../lang/pl.json'
import de from '../lang/pl.json'
import uk from '../lang/pl.json'

import { LOCALES } from '../utils/types'

const messages = {
	pl,
	csb,
	en,
	de,
	uk,
}

function App({ Component, pageProps }: AppProps) {
	let { locale } = useRouter()
	if (!locale) locale = LOCALES.pl

	return (
		<IntlProvider
			locale={locale}
			messages={messages[locale as LOCALES] as Record<string, string>}>
			<Head>
				<title>Sloworz - Słownik języka kaszubskiego</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<link rel='icon' href='/favicon.ico' />
				<link rel='apple-touch-icon' href='/favicon.ico' />
				<link rel='manifest' href='/manifest.json' />
				<meta name='author' content='JStefko Jakub Stefko' />
				<meta
					name='description'
					content='Sloworz - internetowy słownik języka kaszubskiego'
				/>

				<meta name='robots' content='max-snippet:0' />
				<meta name='theme-color' content='#fdcd01' />

				<meta name='og:title' content='Sloworz - Słownik języka kaszubskiego' />
				<meta
					property='og:image'
					content='https://sloworz.org/images/twitterCard.jpg'
				/>
				<meta property='og:site_name' content='Sloworz' />
				<meta
					property='og:image:alt'
					content='Sloworz - Słownik języka kaszubskiego'
				/>
				<meta property='og:image:width' content='2200' />
				<meta property='og:image:height' content='1342' />

				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:site' content='@sloworz_org' />
				<meta name='twitter:creator' content='@sloworz_org' />
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</IntlProvider>
	)
}

export default App
