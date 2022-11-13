import { useIntl } from 'react-intl'
import { SUB_PARTS_OF_SPEECH, Variation } from '../../utils/types'
import { getVariationPerSubPart } from '../../utils/utilities'
import DisplayTable from './displayTable'

const getValue = (obj: Record<string, string>) =>
	Object.keys(obj).filter(inside => Boolean(obj[inside]))

const getFullValues = (obj: Variation) =>
	Object.keys(obj).filter(inside =>
		typeof obj[inside] === 'string'
			? Boolean(obj[inside])
			: getValue(obj[inside] as Record<string, string>).length
	)

function DisplayVariation(spos: SUB_PARTS_OF_SPEECH, variation?: Variation) {
	const intl = useIntl()

	if (!variation) return ''

	const values = getFullValues(variation)

	if (!values.length) return ''

	const defaultVariation = getVariationPerSubPart(spos)

	if (!defaultVariation) return ''

	const response: Array<JSX.Element> = []

	Object.keys(defaultVariation).forEach(property => {
		if (values.indexOf(property) !== -1) {
			if (typeof variation[property] === 'string') {
				let value = variation[property] as string
				if (value === 'IMPERFECTIVE' || value === 'PERFECT')
					value = intl.formatMessage({ id: value })
				response.push(
					<span>{`${intl.formatMessage({ id: property })}: ${value}`}</span>
				)
			} else {
				response.push(<h4>{intl.formatMessage({ id: property })}</h4>)
				response.push(
					DisplayTable(
						variation[property] as Record<string, string>,
						property,
						spos
					)
				)
			}
		}
	})

	return <>{response}</>
}

export default DisplayVariation
