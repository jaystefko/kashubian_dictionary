import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import {
  createWord,
  deleteWord,
  getWord,
  getWordList,
  getWordListByString,
  updateWord,
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
  const [data, setData] = useState<Array<Partial<GatheredWord>>>([]);
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
        setData(response.data?.data?.findAllKashubianEntries?.select || []);
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
        setData(response.data?.data?.findAllKashubianEntries?.select || []);
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
      let newWord: Partial<GatheredWord> = response.data?.data?.findKashubianEntry;
      if (!newWord) return;
      setWordId(id);
      setWord(newWord);
      setIsModalOpen(true);
    } catch (error) {
      errorHandler(error);
    }
  }

  async function openModalSoundHandler(id: number) {
    if (id === -1) return;
    try {
      alert('Funckcja w trakcie implementacji');
    } catch (error) {
      errorHandler(error);
    }
  }

  async function searchForWords(searchBy: string) {
    try {
      const response = await getWordListByString(searchBy);
      const newData = response.data?.data?.findAllKashubianEntries?.select || [];
      setData(newData);
      if (!newData.length) toast.info('Nie znaleziono odpowiednich słów');
    } catch (error) {
      errorHandler(error);
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
      setData(response.data?.data?.findAllKashubianEntries?.select || []);
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

  function setSearchProxy(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
    searchForWords(e.target.value);
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
            <SearchBar search={search} setIsModalOpen={setIsModalOpen} setSearch={setSearchProxy} />
            <AdminTable
              data={data}
              deleteHandler={deleteHandler}
              openModalEditHandler={openModalEditHandler}
              openModalSoundHandler={openModalSoundHandler}
            />
          </article>
        )}
      </div>
    </>
  );
};

export default AdminScreen;
