import Image from 'next/image'
import { useIntl } from 'react-intl'
import styles from './styles.module.css'

function Footer() {
	const intl = useIntl()

	return (
		<footer className={styles.footer}>
			<a
				href='https://fundacjakaszuby.org/'
				rel='external nofollow noreferrer'
				className={`${styles.footerLink} ${styles.copyrightLink}`}
				target='_blank'
				title={intl.formatMessage({ id: 'sponsor.kashebianFoundation' })}>
				<Image
					priority={false}
					src='/images/logo-kaszuby-foundation.png'
					height={40}
					width={133}
					alt={intl.formatMessage({ id: 'sponsor.kashebianFoundation' })}
					role='link'
					title={intl.formatMessage({ id: 'sponsor.kashebianFoundation' })}
				/>
				<span className={styles.footerLinkText}>
					© 2022 {intl.formatMessage({ id: 'sponsor.kashebianFoundation' })}
				</span>
			</a>
			<section className={styles.sponsorContainer}>
				<div className={styles.sponsorInfo}>
					{intl.formatMessage({ id: 'sponsors' })}:
				</div>
				<ul className={styles.footerList}>
					<li>
						<a
							href='https://pomorskie.eu'
							rel='external nofollow noreferrer'
							className={styles.footerLink}
							target='_blank'
							title={intl.formatMessage({
								id: 'sponsor.pomorskieVoivodeship',
							})}>
							<Image
								priority={false}
								src='/images/pomorskie.svg'
								height={40}
								width={31}
								alt={intl.formatMessage({ id: 'sponsor.pomorskieVoivodeship' })}
								role='link'
								title={intl.formatMessage({
									id: 'sponsor.pomorskieVoivodeship',
								})}
							/>
							<span className={styles.footerLinkText}>
								{intl.formatMessage({ id: 'sponsor.pomorskieVoivodeship' })}
							</span>
						</a>
					</li>
					<li>
						<a
							href='https://www.powiat.chojnice.pl/asp/Informacje%2CStrona_glowna%2C92'
							rel='external nofollow noreferrer'
							className={styles.footerLink}
							target='_blank'
							title={intl.formatMessage({ id: 'sponsor.countyChojnice' })}>
							<Image
								priority={false}
								src='/images/herb_powiat_chojnicki.svg'
								height={40}
								width={31}
								alt={intl.formatMessage({ id: 'sponsor.countyChojnice' })}
								role='link'
								title={intl.formatMessage({ id: 'sponsor.countyChojnice' })}
							/>
							<span className={styles.footerLinkText}>
								{intl.formatMessage({ id: 'sponsor.countyChojnice' })}
							</span>
						</a>
					</li>
					<li>
						<a
							href='https://www.muzeum.wejherowo.pl/'
							rel='external nofollow noreferrer'
							className={styles.footerLink}
							target='_blank'
							title={intl.formatMessage({ id: 'sponsor.museumWejherowo' })}>
							<Image
								priority={false}
								src='/images/logo_MPiMK-P.svg'
								height={40}
								width={50}
								alt={intl.formatMessage({ id: 'sponsor.museumWejherowo' })}
								role='link'
								title={intl.formatMessage({ id: 'sponsor.museumWejherowo' })}
							/>
							<span className={styles.footerLinkText}>
								{intl.formatMessage({ id: 'sponsor.museumWejherowo' })}
							</span>
						</a>
					</li>
				</ul>
			</section>
		</footer>
	)
}

export default Footer
