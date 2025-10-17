import Image from 'next/image'
import { useIntl } from 'react-intl'
import styles from './styles.module.css'

function Footer() {
	const intl = useIntl()

	return (
		<footer className={styles.footer}>
			<section>
				<ul className={styles.footerList}>
					<li>
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
								title={intl.formatMessage({
									id: 'sponsor.kashebianFoundation',
								})}
							/>
							<span className={styles.footerLinkText}>
								© 2022{' '}
								{intl.formatMessage({ id: 'sponsor.kashebianFoundation' })}
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
							href='https://szemud.pl'
							rel='external nofollow noreferrer'
							className={styles.footerLink}
							target='_blank'
							title={intl.formatMessage({ id: 'sponsor.szemud' })}>
							<Image
								priority={false}
								src='/images/Szemud-cropped.svg'
								height={40}
								width={70}
								alt={intl.formatMessage({ id: 'sponsor.szemud' })}
								role='link'
								title={intl.formatMessage({ id: 'sponsor.szemud' })}
							/>
							<span className={styles.footerLinkText}>
								{intl.formatMessage({ id: 'sponsor.szemud' })}
							</span>
						</a>
					</li>
					<li>
						<a
							href='https://www.kartuzy.pl'
							rel='external nofollow noreferrer'
							className={styles.footerLink}
							target='_blank'
							title={intl.formatMessage({ id: 'sponsor.kartuzy' })}>
							<Image
								priority={false}
								src='/images/Kartuzy-cropped.svg'
								height={40}
								width={70}
								alt={intl.formatMessage({ id: 'sponsor.kartuzy' })}
								role='link'
								title={intl.formatMessage({ id: 'sponsor.kartuzy' })}
							/>
							<span className={styles.footerLinkText}>
								{intl.formatMessage({ id: 'sponsor.kartuzy' })}
							</span>
						</a>
					</li>
					<li>
						<a
							href='https://www.dziemiany.pl'
							rel='external nofollow noreferrer'
							className={styles.footerLink}
							target='_blank'
							title={intl.formatMessage({ id: 'sponsor.dziemiany' })}>
							<Image
								priority={false}
								src='/images/Dziemiany-cropped.svg'
								height={40}
								width={70}
								alt={intl.formatMessage({ id: 'sponsor.dziemiany' })}
								role='link'
								title={intl.formatMessage({ id: 'sponsor.dziemiany' })}
							/>
							<span className={styles.footerLinkText}>
								{intl.formatMessage({ id: 'sponsor.dziemiany' })}
							</span>
						</a>
					</li>
					<li>
						<a
							href='https://www.wladyslawowo.pl'
							rel='external nofollow noreferrer'
							className={styles.footerLink}
							target='_blank'
							title={intl.formatMessage({ id: 'sponsor.wladyslawowo' })}>
							<Image
								priority={false}
								src='/images/Wladyslawowo-cropped.svg'
								height={40}
								width={70}
								alt={intl.formatMessage({ id: 'sponsor.wladyslawowo' })}
								role='link'
								title={intl.formatMessage({ id: 'sponsor.wladyslawowo' })}
							/>
							<span className={styles.footerLinkText}>
								{intl.formatMessage({ id: 'sponsor.wladyslawowo' })}
							</span>
						</a>
					</li>
				</ul>
			</section>
		</footer>
	)
}

export default Footer
