import axios, { AxiosRequestConfig } from 'axios';
import { BasicAuth, Word } from './types';

const url = 'https://kashubian-dic.herokuapp.com/';

function getAxiosRequestConfig(auth: BasicAuth): AxiosRequestConfig {
  return {
    auth: auth,
  };
}

async function getWordList(pageLimit = 100) {
  return axios.post(`${url}graphql`, {
    query: `
      {
        findAllKashubianEntries(page: { start: 1, limit: ${pageLimit} }) {
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
        page: {start: 1, limit: ${pageLimit}}
        where: {normalizedWord: {BY_NORMALIZED: "${partial}"}}
      ) {
        select {
          id
          word
          normalizedWord
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
        page: {start: 1, limit: ${pageLimit}}
        where: {meanings: {translation: {normalizedPolish: {BY_NORMALIZED: "${partial}"}}}}
      ) {
        select {
          id
          word
          normalizedWord
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
        findAllKashubianEntries(page: { start: 1, limit: 5 }) {
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

async function getWord(id: number) {
  return axios.post(`${url}graphql`, {
    query: `
      {
        findKashubianEntry(id: ${id}) {
          word,
          priority,
          partOfSpeech,
          partOfSpeechSubType,
          variation,
          note,
          others { other { id, word } },
          meanings {
            id,
            definition,
            origin,
            translation {
              german,
              english,
              polish,
              ukrainian
            }
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

async function getBasesAndDerivatives(id: number) {
  return axios.get(`${url}custom-query/bases-and-derivatives/${id}`);
}

export {
  getWordList,
  getWordListByString,
  getLastAddedWordList,
  getWord,
  getWordOfADay,
  createWord,
  updateWord,
  deleteWord,
  getBasesAndDerivatives,
  getTranslatedWordListByString,
};
