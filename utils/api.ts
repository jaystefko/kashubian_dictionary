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
            word(orderBy: ASC)
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

async function getWordOfADay() {
  return axios.get(`${url}custom-query/word-of-the-day`);
}

async function createWord(word: Word, auth: BasicAuth) {
  axios.post(`${url}kashubian-entry`, word, getAxiosRequestConfig(auth));
}

async function updateWord(word: Word, id: number, auth: BasicAuth) {
  axios.put(`${url}kashubian-entry/${id}`, word, getAxiosRequestConfig(auth));
}

async function deleteWord(id: number, auth: BasicAuth) {
  axios.delete(`${url}kashubian-entry/${id}`, getAxiosRequestConfig(auth));
}

export { getWordList, getLastAddedWordList, getWordOfADay, createWord, updateWord, deleteWord };
