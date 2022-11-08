import { CircularProgress } from '@mui/material'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useIntl } from 'react-intl'
import { getWordMeaningListSimplified } from '../../utils/api'
import errorHandler from '../../utils/errorHandler'
import { COLORS, MeaningSimplified } from '../../utils/types'
import WorkInProgress from '../WorkInProgress'
import MeaningList from './MeaningList'

function MeaningListWrapper() {
	const router = useRouter()
	const wordId = router.query.wordId as string
	const intl = useIntl()

	const [isLoading, setIsLoading] = useState(true)
	const [meaningList, setMeaningList] = useState<Array<MeaningSimplified>>([])
	const [word, setWord] = useState('')

	useEffect(() => {
		;(async () => {
			if (wordId) {
				try {
					const response = await getWordMeaningListSimplified(Number(wordId))
					const _meaningList =
						response.data.data.findKashubianEntry?.meanings || []
					if (!_meaningList.length) {
						setIsLoading(false)
						return
					}
					if (_meaningList.length === 1) {
						router.push(`/word/${wordId}/meaning/${_meaningList[0].id}`)
						return
					} else {
						setWord(response.data.data.findKashubianEntry.word)
						setMeaningList(_meaningList)
						setIsLoading(false)
					}
				} catch (error) {
					errorHandler(error, intl)
					setIsLoading(false)
				}
			}
		})()
	}, [wordId]) // eslint-disable-line

	return (
		<div className='whole-page'>
			{isLoading ? (
				<CircularProgress sx={{ color: COLORS.YELLOW }} />
			) : meaningList.length ? (
				<MeaningList data={meaningList} word={word} wordId={wordId} />
			) : (
				<WorkInProgress is404 />
			)}
		</div>
	)
}

export default MeaningListWrapper
