import Link from 'next/link'
import { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useIntl } from 'react-intl'
import { getWordList } from '../../utils/api'
import errorHandler from '../../utils/errorHandler'
import styles from './styles.module.css'

const DictionaryPanel = () => {
	const intl = useIntl()
	const [wordList, setWordList] = useState<Array<{ id: string; word: string }>>(
		[]
	)
	const [hasMore, setHasMore] = useState(true)
	const [start, setStart] = useState(0)

	async function loadMoreData() {
		try {
			const response = await getWordList(50, start)
			const _data = response.data?.data?.findAllKashubianEntries?.select || []
			if (_data.length < 50) setHasMore(false)
			setWordList([...wordList, ..._data])
			setStart(start + 1)
		} catch (error) {
			errorHandler(error, intl)
		}
	}

	useEffect(() => {
		loadMoreData()
	}, []) // eslint-disable-line

	return (
		<article className={styles.dictionaryPanel}>
			<InfiniteScroll
				dataLength={wordList.length}
				next={loadMoreData}
				height={'calc(100vh - 160px)'}
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
