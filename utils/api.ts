import axios, { AxiosRequestConfig } from 'axios';
import { BasicAuth, Word } from './types';

export const url = process.env.API_URL;

function getAxiosRequestConfig(auth: BasicAuth): AxiosRequestConfig {
  return {
    auth: auth,
  };
}

async function getWordList(pageLimit = 100) {
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

async function getWordListByString(partial: string, pageLimit = 100) {
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

async function getTranslatedWordListByString(partial: string, pageLimit = 10) {
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

async function getLastAddedWordList() {
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

async function getWordMeaningListSimplified(id: number) {
  return axios.post(`${url}graphql`, {
    query: `
      {
        findKashubianEntry(id: ${id}) {
          word,
          meanings {
            id,
            definition,
            translation {
              polish,
              english,
              ukrainian,
              german
            }
          }
        }
      }
    `,
  });
}

async function getWordSimplified(id: number) {
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

async function getMeaning(id: number) {
  return axios.post(`${url}graphql`, {
    query: `
    {
      findMeaning(id: ${id}) {
        definition
        origin
        hyperonym {
          kashubianEntry {
            id
            word
          }
        }
        antonyms {
          antonym {
            kashubianEntry {
              id
              word
            }
          }
        }
        synonyms {
          synonym {
            kashubianEntry {
              id
              word
            }
          }
        }
        quotes {
          quote
        }
        examples {
          example
        }
        proverbs {
          proverb
        }
        idioms {
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
    `,
  });
}

async function getWord(id: number) {
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

async function getMeaningList(partial = '', pageLimit = 10) {
  return axios.post(`${url}graphql`, {
    query: `
    {
      findAllMeanings(
        page: {start: 0, limit: ${pageLimit}}
        where: {definition: {LIKE: "${partial}"}}
      ) {
        select {
          id
          definition(orderBy: ASC)
        }
      }
    }
    `,
  });
}

async function getWordOfADay() {
  return axios.get(`${url}custom-query/word-of-the-day`);
}

async function createWord(word: Partial<Word>, auth: BasicAuth) {
  return axios.post(`${url}kashubian-entry`, word, getAxiosRequestConfig(auth));
}

async function updateWord(word: Partial<Word>, id: number, auth: BasicAuth) {
  return axios.put(`${url}kashubian-entry/${id}`, word, getAxiosRequestConfig(auth));
}

async function deleteWord(id: number, auth: BasicAuth) {
  return axios.delete(`${url}kashubian-entry/${id}`, getAxiosRequestConfig(auth));
}

async function getFile(id: number) {
  return axios.get(`${url}kashubian-entry/${id}/file`);
}

async function uploadFile(file: any, id: number, auth: BasicAuth) {
  return axios.post(`${url}kashubian-entry/${id}/file`, file, getAxiosRequestConfig(auth));
}

async function deleteFile(id: number, auth: BasicAuth) {
  return axios.delete(`${url}kashubian-entry/${id}/file`, getAxiosRequestConfig(auth));
}

export {
  getWordList,
  getWordListByString,
  getLastAddedWordList,
  getWord,
  getWordSimplified,
  getWordMeaningListSimplified,
  getMeaning,
  getWordOfADay,
  createWord,
  updateWord,
  deleteWord,
  getTranslatedWordListByString,
  getMeaningList,
  getFile,
  uploadFile,
  deleteFile,
};
