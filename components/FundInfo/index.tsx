import styles from './styles.module.css'

function FundInfo() {
	return (
		<section style={{ textAlign: 'center' }}>
			<p className={styles.fundInfo}>
				Tu powstaje słownik języka kaszubskiego. Możesz pomóc w jego powstaniu.
				Wystarczy wejść na stronę:
				<br />
				<a
					href='https://zrzutka.pl/nvtf5r'
					rel='external nofollow noreferrer'
					target='_blank'>
					https://zrzutka.pl/nvtf5r
				</a>
			</p>
		</section>
	)
}

export default FundInfo
