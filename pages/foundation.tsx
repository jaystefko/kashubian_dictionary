import type { NextPage } from 'next'
import { useIntl } from 'react-intl'
import DefaultPage from '../components/DefaultPage'

const FoundationScreen: NextPage = () => {
	const intl = useIntl()
	return (
		<DefaultPage
			header={intl.formatMessage({ id: 'topMenu.foundation' })}
			main={
				<div>
					<p>
						<span>
							{intl.formatMessage({ id: 'foundation.paragraph.first.first' })}
						</span>
						<br />
						<span>
							{intl.formatMessage({ id: 'foundation.paragraph.first.second' })}
						</span>
					</p>
					<p>
						<span>
							{`${intl.formatMessage({
								id: 'foundation.paragraph.second',
							})} `}
						</span>
						<a
							href='https://fundacjakaszuby.org/'
							rel='external nofollow noreferrer'
							target='_blank'>
							https://fundacjakaszuby.org/
						</a>
					</p>
				</div>
			}
		/>
	)
}

export default FoundationScreen
