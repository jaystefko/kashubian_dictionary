import React, { Dispatch, SetStateAction } from 'react'
import { LOCALES } from '../types'

export const setter = (
	set: Dispatch<SetStateAction<string>>,
	event: React.ChangeEvent<HTMLInputElement>
) => set(event.target.value)

export const getSearchBy = (locale: LOCALES) => {
	switch (locale) {
		case LOCALES.de:
			return 'normalisedGerman'
		case LOCALES.en:
			return 'normalisedEnglish'
		case LOCALES.csb:
			return 'normalizedWord'
		case LOCALES.uk:
			return 'normalizedUkrainian'
		default:
			return 'normalizedPolish'
	}
}

export const getTranslationByLocale = (locale: LOCALES) => {
	switch (locale) {
		case LOCALES.de:
			return 'german'
		case LOCALES.en:
			return 'english'
		case LOCALES.uk:
			return 'ukrainian'
		default:
			return 'polish'
	}
}

export function isEmpty(object: Object) {
	return Object.keys(object).length === 0
}
