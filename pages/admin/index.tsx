import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import {
  createWord,
  deleteWord,
  getWord,
  getWordList,
  getWordListByString,
  updateWord,
  getBasesAndDerivatives,
} from '../../utils/api';
import errorHandler from '../../utils/errorHandler';
import { BasicAuth, GatheredWord, Word } from '../../utils/types';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import WordModal from '../../components/Admin/WordModal';
import SearchBar from '../../components/Admin/SearchBar';
import AdminTable from '../../components/Admin/Table';

const AdminScreen: NextPage = () => {
  const [auth, setAuth] = useState<BasicAuth>();
  const [search, setSearch] = useState('');
  const [data, setData] = useState<Array<Partial<Word>>>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [wordId, setWordId] = useState(-1);
  const [word, setWord] = useState<Partial<GatheredWord>>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let data = localStorage.getItem('auth');
    if (!data) {
      const username = prompt('Fill in your login', '') || '';
      const password = prompt('Fill in your password', '') || '';
      setAuth({ username, password });
    } else {
      setAuth(JSON.parse(data));
    }
  }, []); // eslint-disable-line

  useEffect(() => {
    (async () => {
      if (!auth) return;
      try {
        localStorage.setItem('auth', JSON.stringify(auth));
        setIsLoading(true);
        const response = await getWordList();
        setData(response.data?.data?.SearchKashubianEntries?.select || []);
      } catch (error) {
        errorHandler(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [auth]);

  async function deleteHandler(id: number, word: string) {
    if (id === -1) return;
    if (confirm(`Czy jesteś pewien że chcesz usunąć "${word}"`)) {
      try {
        await deleteWord(id, auth!);
        toast.success(`Słowo "${word}" zostało usunięte`);
        setIsLoading(true);
        const response = await getWordList();
        setData(response.data?.data?.SearchKashubianEntries?.select || []);
        setIsLoading(false);
      } catch (error) {
        errorHandler(error);
      }
    }
  }

  async function openModalEditHandler(id: number) {
    if (id === -1) return;
    try {
      const response = await getWord(id);
      const base = await getBasesAndDerivatives(id);
      let newWord: Partial<GatheredWord> = response.data?.data?.SearchKashubianEntry;
      if (!newWord) return;
      if (base.data.bases.length) {
        newWord.base = {
          id: base.data.bases[0].entryId,
          word: base.data.bases[0].word,
          normalizedWord: base.data.bases[0].normalizedWord,
        };
      }
      setWordId(id);
      setWord(newWord);
      setIsModalOpen(true);
    } catch (error) {
      errorHandler(error);
    }
  }

  async function searchForWords(searchBy: string) {
    try {
      setIsLoading(true);
      const response = await getWordListByString(searchBy);
      const newData = response.data?.data?.SearchKashubianEntries?.select || [];
      setData(newData);
      if (!newData.length) toast.info('Nie znaleziono odpowiednich słów');
    } catch (error) {
      errorHandler(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function saveHandler(word: Partial<Word>, id = wordId, authorisation = auth) {
    try {
      if (id === -1) {
        await createWord(word, authorisation!);
        toast.success('Słowo stworzone');
      } else {
        await updateWord(word, id, authorisation!);
        toast.success('Słowo zmienione');
      }
      setIsModalOpen(false);
      const response = await getWordList();
      setData(response.data?.data?.SearchKashubianEntries?.select || []);
    } catch (error) {
      errorHandler(error);
    }
  }

  function closeHandler() {
    if (wordId !== -1) {
      setWord(undefined);
      setWordId(-1);
    }
    setIsModalOpen(false);
  }

  return (
    <>
      <ToastContainer theme='colored' />
      <WordModal
        isModalOpen={isModalOpen}
        closeHandler={closeHandler}
        wordId={wordId}
        word={word}
        saveHandler={saveHandler}
      />
      <div className='whole-page'>
        {isLoading ? (
          <CircularProgress color='warning' />
        ) : (
          <article style={{ scrollbarWidth: 'none', width: '60vw' }}>
            <SearchBar
              search={search}
              searchForWords={searchForWords}
              setIsModalOpen={setIsModalOpen}
              setSearch={setSearch}
            />
            <AdminTable
              data={data}
              deleteHandler={deleteHandler}
              openModalEditHandler={openModalEditHandler}
            />
          </article>
        )}
      </div>
    </>
  );
};

export default AdminScreen;
