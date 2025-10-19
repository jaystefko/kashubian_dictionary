import type { NextPage } from 'next'
import { useIntl } from 'react-intl'
import DefaultPage from '../components/DefaultPage'

const AboutScreen: NextPage = () => {
	const intl = useIntl()

	return (
		<DefaultPage
			header={intl.formatMessage({ id: 'topMenu.about' })}
			main={
				<div>
					<p>{intl.formatMessage({ id: 'about.paragraph.first' })}</p>
					<p>
						{intl.formatMessage({ id: 'about.paragraph.first.additional' })}
					</p>
					<p>
						<span>
							{`${intl.formatMessage({
								id: 'about.paragraph.second.before_link',
							})} `}
						</span>
						<a
							href='https://zrzutka.pl/mretr4'
							rel='external nofollow noreferrer'
							target='_blank'>
							https://zrzutka.pl/mretr4
						</a>
						<span>
							{` ${intl.formatMessage({
								id: 'about.paragraph.second.after_link',
							})}`}
						</span>
					</p>
					<p>{intl.formatMessage({ id: 'about.paragraph.third' })}</p>
				</div>
			}
			footer={intl.formatMessage({ id: 'topMenu.foundation' })}
		/>
	)
}

export default AboutScreen
