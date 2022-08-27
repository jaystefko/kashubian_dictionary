import axios, { AxiosRequestConfig } from 'axios';
import { BasicAuth, Word } from './types';

const url = 'https://kashubian-dic.herokuapp.com/';

function getAxiosRequestConfig(auth: BasicAuth): AxiosRequestConfig {
  return {
    auth: auth,
  };
}

async function getWordList() {
  return axios.post(`${url}graphql`, {
    query: `
      {
        SearchKashubianEntries(page: { start: 1, limit: 100 }) {
          total,
          pages,
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

async function getWordListByString(partial: string) {
  return axios.post(`${url}graphql`, {
    query: `
      {
        SearchKashubianEntries(page: { start: 1, limit: 100 }, where: { normalizedWord: { LIKE: "${partial}" } }) {
          total
          pages
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
  // #TODO
  return axios.post(`${url}graphql`, {
    query: `
      {
        SearchKashubianEntries(page: { start: 1, limit: 1 }, where: { id: { LIKE: "${id}" } }) {
          select {
            id(orderBy: DESC),
            word
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

export {
  getWordList,
  getWordListByString,
  getLastAddedWordList,
  getWord,
  getWordOfADay,
  createWord,
  updateWord,
  deleteWord,
};
