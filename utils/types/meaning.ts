interface MeaningOG {
	translation: {
		english: string
		german: string
		polish: string
		ukrainian: string
	}
	definition: string
	origin?: string
	examples?: Array<{
		example: string
		note?: string
	}>
	idioms?: Array<{
		note?: string
		idiom: string
	}>
	proverbs?: Array<{
		note?: string
		proverb: string
	}>
	quotes?: Array<{
		note?: string
		quote: string
	}>
}

interface Meaning extends MeaningOG {
	antonyms?: Array<{
		meaningId: number
		note?: string
	}>
	hyperonym?: number
	synonyms?: Array<{
		meaningId: number
		note?: string
	}>
}

interface GatheredMeaning extends MeaningOG {
	antonyms?: Array<{
		id: number
		antonym: {
			id: number
			definition: string
			kashubianEntry?: {
				id: number
				word: string
			}
		}
	}>
	hyperonym?: {
		id: number
		definition: string
		kashubianEntry?: {
			id: number
			word: string
		}
	}
	synonyms?: Array<{
		id: number
		synonym: {
			id: number
			definition: string
			kashubianEntry?: {
				id: number
				word: string
			}
		}
	}>
}

interface MeaningSimplified {
	id: number
	definition: string
	translation: {
		english?: string
		german?: string
		polish: string
		ukrainian?: string
	}
}

export type { Meaning, GatheredMeaning, MeaningSimplified }
