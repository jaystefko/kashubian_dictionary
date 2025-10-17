import type { NextPage } from 'next'
import { useIntl } from 'react-intl'
import DefaultPage from '../components/DefaultPage'

const LessonsScreen: NextPage = () => {
	const intl = useIntl()

	return (
		<DefaultPage
			header={intl.formatMessage({ id: 'topMenu.lessons' })}
			main={
				<div>
					<p>{intl.formatMessage({ id: 'lessons.paragraph.first' })}</p>
					<p>
						<span>
							{`${intl.formatMessage({
								id: 'lessons.paragraph.second.before_link',
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
								id: 'lessons.paragraph.second.after_link',
							})}`}
						</span>
					</p>
				</div>
			}
		/>
	)
}

export default LessonsScreen
