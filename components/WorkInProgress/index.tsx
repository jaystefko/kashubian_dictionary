import { useIntl } from 'react-intl'
import styles from './styles.module.css'
import { useRouter } from 'next/router'

const WorkInProgress = ({ is404 = false }) => {
	const intl = useIntl()
	const router = useRouter()

	let header: string
	let message: JSX.Element

	switch (router.pathname) {
		case '/translate-en': {
			header = 'Page in preparation'
			message = (
				<p style={{ textAlign: 'center' }}>
					<span>
						English version of the dictionary in preparation. You can help in
						making it. Just go to the website:
					</span>
					<br />
					<a
						href='https://zrzutka.pl/5xw6zz'
						rel='external nofollow noreferrer'
						target='_blank'>
						https://zrzutka.pl/5xw6zz
					</a>
				</p>
			)
			break
		}
		case '/translate-de': {
			header = 'Seite in Vorbereitung'
			message = (
				<p style={{ textAlign: 'center' }}>
					<span>
						Deutsche Fassung des Wörterbuches in Vorbereitung. Sie können
						helfen, es zu verwirklichen. Gehen Sie einfach auf die Website:{' '}
					</span>
					<br />
					<a
						href='https://zrzutka.pl/5xw6zz'
						rel='external nofollow noreferrer'
						target='_blank'>
						https://zrzutka.pl/5xw6zz
					</a>
				</p>
			)
			break
		}
		case '/translate-uk': {
			header = 'Сторінка готується'
			message = (
				<p style={{ textAlign: 'center' }}>
					<span>
						Українська версія словника зараз в роботі. Можеш помогти її
						друкувати. Досить лише війти на сторінку:
					</span>
					<br />
					<a
						href='https://zrzutka.pl/5xw6zz'
						rel='external nofollow noreferrer'
						target='_blank'>
						https://zrzutka.pl/5xw6zz
					</a>
				</p>
			)
			break
		}
		default: {
			header = intl.formatMessage({
				id: `wip.${is404 ? '404' : 'not404'}.header`,
			})
			message = (
				<p>
					{intl.formatMessage({
						id: `wip.${is404 ? '404' : 'not404'}.message`,
					})}
				</p>
			)
		}
	}

	return (
		<div className='whole-page'>
			<article className={styles.box}>
				<header>
					<h1 className={styles.header}>{header}</h1>
				</header>
				<main>{message}</main>
			</article>
		</div>
	)
}

export default WorkInProgress
