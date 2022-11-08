import {
	getAdjectivePronounVariation,
	getAdjectiveVariation,
	getAdverbVariation,
	getConjugationVartation,
	getNounVariation,
	getNounPronounVariation,
	getNumeralVariation,
} from '../constants'
import { PARTS_OF_SPEECH, SUB_PARTS_OF_SPEECH } from '../types'

export const getSubPartList = (pos: PARTS_OF_SPEECH) => {
	switch (pos) {
		case PARTS_OF_SPEECH.NOUN: {
			return [
				SUB_PARTS_OF_SPEECH.NEUTER,
				SUB_PARTS_OF_SPEECH.MASCULINE,
				SUB_PARTS_OF_SPEECH.FEMININE,
				SUB_PARTS_OF_SPEECH.PLURAL_MASCULINE,
				SUB_PARTS_OF_SPEECH.NON_MASCULINE,
			]
		}
		case PARTS_OF_SPEECH.VERB: {
			return [
				SUB_PARTS_OF_SPEECH.CONJUGATION_I,
				SUB_PARTS_OF_SPEECH.CONJUGATION_II,
				SUB_PARTS_OF_SPEECH.CONJUGATION_III,
				SUB_PARTS_OF_SPEECH.CONJUGATION_IV,
			]
		}
		case PARTS_OF_SPEECH.ADJECTIVE: {
			return [
				SUB_PARTS_OF_SPEECH.INFLECTIV_ADJECTIVE,
				SUB_PARTS_OF_SPEECH.UNINFLECTIV_ADJECTIVE,
			]
		}
		case PARTS_OF_SPEECH.NUMERAL: {
			return [
				SUB_PARTS_OF_SPEECH.INFLECTIV_NUMERAL,
				SUB_PARTS_OF_SPEECH.UNINFLECTIV_NUMERAL,
			]
		}
		case PARTS_OF_SPEECH.PRONOUN: {
			return [
				SUB_PARTS_OF_SPEECH.NOUN_PRONOUN,
				SUB_PARTS_OF_SPEECH.ADJECTIVE_PRONOUN,
				SUB_PARTS_OF_SPEECH.NUMERAL_PRONOUN,
				SUB_PARTS_OF_SPEECH.ADVERB_PRONOUN,
			]
		}
		case PARTS_OF_SPEECH.ADVERB: {
			return [SUB_PARTS_OF_SPEECH.ADVERB]
		}
		case PARTS_OF_SPEECH.PREPOSITION: {
			return [SUB_PARTS_OF_SPEECH.PREPOSITION]
		}
		case PARTS_OF_SPEECH.CONJUNCTION: {
			return [SUB_PARTS_OF_SPEECH.CONJUNCTION]
		}
		case PARTS_OF_SPEECH.INTERJECTION: {
			return [SUB_PARTS_OF_SPEECH.INTERJECTION]
		}
		case PARTS_OF_SPEECH.PARTICLE: {
			return [SUB_PARTS_OF_SPEECH.PARTICLE]
		}
	}
}

export const getVariationPerSubPart = (spos: SUB_PARTS_OF_SPEECH) => {
	switch (spos) {
		case SUB_PARTS_OF_SPEECH.ADJECTIVE_PRONOUN: {
			return getAdjectivePronounVariation()
		}
		case SUB_PARTS_OF_SPEECH.ADVERB: {
			return getAdverbVariation()
		}
		case SUB_PARTS_OF_SPEECH.CONJUGATION_I:
		case SUB_PARTS_OF_SPEECH.CONJUGATION_II:
		case SUB_PARTS_OF_SPEECH.CONJUGATION_III:
		case SUB_PARTS_OF_SPEECH.CONJUGATION_IV: {
			return getConjugationVartation()
		}
		case SUB_PARTS_OF_SPEECH.FEMININE:
		case SUB_PARTS_OF_SPEECH.MASCULINE:
		case SUB_PARTS_OF_SPEECH.NEUTER:
		case SUB_PARTS_OF_SPEECH.NON_MASCULINE:
		case SUB_PARTS_OF_SPEECH.PLURAL_MASCULINE: {
			return getNounVariation()
		}
		case SUB_PARTS_OF_SPEECH.NOUN_PRONOUN: {
			return getNounPronounVariation()
		}
		case SUB_PARTS_OF_SPEECH.INFLECTIV_ADJECTIVE:
		case SUB_PARTS_OF_SPEECH.UNINFLECTIV_ADJECTIVE: {
			return getAdjectiveVariation()
		}
		case SUB_PARTS_OF_SPEECH.INFLECTIV_NUMERAL:
		case SUB_PARTS_OF_SPEECH.UNINFLECTIV_NUMERAL: {
			return getNumeralVariation()
		}
		default: {
			return null
		}
	}
}
