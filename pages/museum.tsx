import type { NextPage } from 'next'
import { useIntl } from 'react-intl'
import DefaultPage from '../components/DefaultPage'

const AboutScreen: NextPage = () => {
	const intl = useIntl()

	return (
		<DefaultPage
			header={intl.formatMessage({ id: 'topMenu.museum' })}
			main={
				<div>
					<p>{intl.formatMessage({ id: 'museum.paragraph.first' })}</p>
					<p>{intl.formatMessage({ id: 'museum.paragraph.second' })}</p>
					<p>{intl.formatMessage({ id: 'museum.paragraph.third' })}</p>
					<p>{intl.formatMessage({ id: 'museum.paragraph.fourth' })}</p>
					<p>
						<span>
							{`${intl.formatMessage({
								id: 'museum.paragraph.fifth',
							})}: `}
						</span>
						<a
							href='https://muzeum.wejherowo.pl/'
							rel='external nofollow noreferrer'
							target='_blank'>
							https://muzeum.wejherowo.pl/
						</a>
					</p>
				</div>
			}
		/>
	)
}

export default AboutScreen
