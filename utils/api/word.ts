import axios from 'axios';
import { getAxiosRequestConfig, url } from '.';
import { BasicAuth, Word } from '../types';

export async function getWordList(pageLimit = 100) {
  return axios.post(`${url}graphql`, {
    query: `
      {
        findAllKashubianEntries(page: { start: 0, limit: ${pageLimit} }) {
          select {
            id,
            word,
            normalizedWord(orderBy: ASC),
          }
        }
      }
    `,
  });
}

export async function getWordListByString(partial: string, pageLimit = 100) {
  return axios.post(`${url}graphql`, {
    query: `
    {
      findAllKashubianEntries(
        page: {start: 0, limit: ${pageLimit}}
        where: {normalizedWord: {BY_NORMALIZED: "${partial}"}}
      ) {
        select {
          id
          word
          normalizedWord(orderBy: ASC)
        }
      }
    }
    `,
  });
}

export async function getTranslatedWordListByString(partial: string, pageLimit = 10) {
  return axios.post(`${url}graphql`, {
    query: `
    {
      findAllKashubianEntries(
        page: {start: 0, limit: ${pageLimit}}
        where: {meanings: {translation: {normalizedPolish: {BY_NORMALIZED: "${partial}"}}}}
      ) {
        select {
          id
          word
          normalizedWord(orderBy: ASC)
        }
      }
    }
    `,
  });
}

export async function getLastAddedWordList() {
  return axios.post(`${url}graphql`, {
    query: `
      {
        findAllKashubianEntries(page: { start: 0, limit: 5 }) {
          total,
          pages,
          select {
            id(orderBy: DESC),
            word
          }
        }
      }
    `,
  });
}

export async function getWordSimplified(id: number) {
  return axios.post(`${url}graphql`, {
    query: `
    {
      findKashubianEntry(id: ${id}) {
        word
        meaningsCount
        priority
        partOfSpeech
        partOfSpeechSubType
        variation
        note
        base {
          id
          word
        }
        others {
          other {
            id
            word
          }
        }
      }
    }
    `,
  });
}
export async function getWord(id: number) {
  return axios.post(`${url}graphql`, {
    query: `
    {
      findKashubianEntry(id: ${id}) {
        word
        priority
        partOfSpeech
        partOfSpeechSubType
        variation
        note
        base {
          id
          word
        }
        others {
          id
          note
          other {
            id
            word
          }
        }
        meanings {
          id(orderBy: ASC)
          definition
          origin
          hyperonym {
            id
            definition
            kashubianEntry {
              id
              word
            }
          }
          antonyms {
            id
            antonym {
              id
              definition
              kashubianEntry {
                id
                word
              }
            }
          }
          synonyms {
            id
            synonym {
              id
              definition
              kashubianEntry {
                id
                word
              }
            }
          }
          quotes {
            note
            quote
          }
          examples {
            note
            example
          }
          proverbs {
            note
            proverb
          }
          idioms {
            note
            idiom
          }
          translation {
            german
            english
            polish
            ukrainian
          }
        }
      }
    }
    `,
  });
}

export async function getWordOfADay() {
  return axios.get(`${url}custom-query/word-of-the-day`);
}

export async function createWord(word: Partial<Word>, auth: BasicAuth) {
  return axios.post(`${url}kashubian-entry`, word, getAxiosRequestConfig(auth));
}

export async function updateWord(word: Partial<Word>, id: number, auth: BasicAuth) {
  return axios.put(`${url}kashubian-entry/${id}`, word, getAxiosRequestConfig(auth));
}

export async function deleteWord(id: number, auth: BasicAuth) {
  return axios.delete(`${url}kashubian-entry/${id}`, getAxiosRequestConfig(auth));
}
