import styles from './styles.module.css'

type Props = {
	property: string
	content?: string | JSX.Element
	isVariation?: Boolean
	isBiggerContent?: boolean
}

function ListItem({
	property,
	content,
	isVariation = false,
	isBiggerContent = false,
}: Props) {
	const variationStyles = isVariation ? ` ${styles.variation}` : ''
	const biggerContentStyles = isBiggerContent ? ` ${styles.biggerContent}` : ''

	return content ? (
		<li
			className={`${styles.listItem}${variationStyles}${biggerContentStyles}`}>
			<span
				className={`${styles.property}${variationStyles}${biggerContentStyles}`}>
				{property}
			</span>
			<span
				className={`${styles.content}${variationStyles}${biggerContentStyles}`}>
				{content}
			</span>
		</li>
	) : (
		<></>
	)
}

export default ListItem
