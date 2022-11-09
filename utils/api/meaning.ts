import axios from 'axios'
import { url } from '.'

export async function getMeaning(id: number) {
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
	})
}

export async function getMeaningList(partial = '', pageLimit = 10) {
	return axios.post(`${url}graphql`, {
		query: `
    {
      findAllMeanings(
        page: {start: 0, limit: ${pageLimit}}
        where: {kashubianEntry: { normalizedWord: {BY_NORMALIZED: "${partial}"} }}
      ) {
        select {
          id
          kashubianEntry {
            word
          }
        }
      }
    }
    `,
	})
}

export async function getWordMeaningListSimplified(id: number) {
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
	})
}
