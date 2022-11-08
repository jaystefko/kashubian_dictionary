import { Variation } from '../../../utils/types'

function getVariation(variation: Variation, defaultVariation: Variation) {
	const response = { ...defaultVariation }

	Object.keys(variation).forEach(key => {
		if (typeof variation[key] === 'string') {
			response[key] = variation[key]
		} else {
			Object.keys(variation[key]).forEach(key2 => {
				;(response[key] as Record<string, string>)[key2] = (
					variation[key] as Record<string, string>
				)[key2]
			})
		}
	})

	return response
}

export default getVariation
