import { Input } from '@mui/material'
import Link from 'next/link'
import { ChangeEvent, useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useIntl } from 'react-intl'
import { getWordListByString } from '../../utils/api'
import errorHandler from '../../utils/errorHandler'
import styles from './styles.module.css'

const DictionaryPanel = () => {
	const intl = useIntl()
	const [wordList, setWordList] = useState<Array<{ id: string; word: string }>>(
		[]
	)
	const [hasMore, setHasMore] = useState(true)
	const [start, setStart] = useState(0)
	const [searchBy, setSearchBy] = useState('')

	async function loadMoreData(
		phrase = searchBy,
		_start = start,
		shouldWordListBeWiped = false
	) {
		try {
			const response = await getWordListByString(phrase, 50, _start)
			const _data = response.data?.data?.findAllKashubianEntries?.select || []
			setHasMore(_data.length > 49)
			if (shouldWordListBeWiped) setWordList([..._data])
			else setWordList([...wordList, ..._data])
			setStart(_start + 1)
		} catch (error) {
			errorHandler(error, intl)
		}
	}

	useEffect(() => {
		loadMoreData()
	}, []) // eslint-disable-line

	async function onInputChange(e: ChangeEvent<HTMLInputElement>) {
		setSearchBy(e.target.value)
		loadMoreData(e.target.value, 0, true)
	}

	return (
		<article className={styles.dictionaryPanel}>
			<Input
				value={searchBy}
				onChange={onInputChange}
				placeholder={intl.formatMessage({ id: 'search' })}
				sx={{
					padding: '0.5rem',
					fontSize: 20,
				}}
			/>
			<InfiniteScroll
				dataLength={wordList.length}
				next={loadMoreData}
				height={'calc(100vh - 220px)'}
				hasMore={hasMore}
				loader={<h3>{intl.formatMessage({ id: 'loadingText' })}</h3>}
				endMessage={<h4>{intl.formatMessage({ id: 'noMoreWords' })}</h4>}>
				{wordList.map((word, index) => (
					<div key={index} className={styles.li}>
						<Link href={`word/${word.id}`}>
							<a>{word.word}</a>
						</Link>
					</div>
				))}
			</InfiniteScroll>
		</article>
	)
}

export default DictionaryPanel
