import React, { Dispatch, SetStateAction } from 'react';
import { LOCALES } from './types';

export const setter = (
  set: Dispatch<SetStateAction<string>>,
  event: React.ChangeEvent<HTMLInputElement>
) => set(event.target.value);

export const getSearchBy = (locale: LOCALES) => {
  switch (locale) {
    case LOCALES.de:
      return 'normalisedGerman';
    case LOCALES.en:
      return 'normalisedEnglish';
    case LOCALES.ka:
      return 'normalizedWord';
    case LOCALES.uk:
      return 'normalizedUkrainian';
    default:
      return 'normalizedPolish';
  }
};

export function isEmpty(object: Object) {
  return Object.keys(object).length === 0;
}
