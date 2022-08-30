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
        SearchKashubianEntries(page: { start: 1, limit: ${pageLimit} }) {
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
        SearchKashubianEntries(page: { start: 1, limit: ${pageLimit} }, where: { normalizedWord: { LIKE: "${partial}" } }) {
          select {
            id
            word(orderBy: ASC)
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
        SearchKashubianEntries(page: { start: 1, limit: 5 }) {
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
        SearchKashubianEntry(id: ${id}) {
          word,
          priority,
          partOfSpeech,
          partOfSpeechSubType,
          variation { variation },
          note,
          others { other { id, word, normalizedWord } },
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
};
