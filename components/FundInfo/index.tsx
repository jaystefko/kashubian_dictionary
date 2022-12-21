import { useIntl } from 'react-intl'
import styles from './styles.module.css'

function FundInfo() {
	const intl = useIntl()

	return (
		<section style={{ textAlign: 'center' }}>
			<p className={styles.fundInfo}>
				<span>{intl.formatMessage({ id: 'main_page_text.first' })}</span>
				<br />
				<span>{intl.formatMessage({ id: 'main_page_text.second' })}</span>
				<a
					href='https://zrzutka.pl/nvtf5r'
					rel='external nofollow noreferrer'
					target='_blank'>
					https://zrzutka.pl/nvtf5r
				</a>
				<br />
				<span>{intl.formatMessage({ id: 'main_page_text.third' })}</span>
			</p>
		</section>
	)
}

export default FundInfo
