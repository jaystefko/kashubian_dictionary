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
import SoundModal from '../../components/Admin/SoundModal';
import { useIntl } from 'react-intl';

const AdminScreen: NextPage = () => {
  const intl = useIntl();
  const [auth, setAuth] = useState<BasicAuth>();
  const [search, setSearch] = useState('');
  const [data, setData] = useState<Array<Partial<GatheredWord>>>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [wordId, setWordId] = useState(-1);
  const [word, setWord] = useState<Partial<GatheredWord>>();
  const [isLoading, setIsLoading] = useState(false);
  const [isSoundModalOpen, setIsSoundModalOpen] = useState(false);

  useEffect(() => {
    let data = localStorage.getItem('auth');
    if (!data) {
      const username = prompt(intl.formatMessage({ id: 'fillLogin' }), '') || '';
      const password = prompt(intl.formatMessage({ id: 'fillPassword' }), '') || '';
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
        errorHandler(error, intl);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [auth]); // eslint-disable-line

  async function deleteHandler(id: number, word: string) {
    if (id === -1) return;
    if (confirm(`${intl.formatMessage({ id: 'deleteAssurement' })} "${word}"`)) {
      try {
        await deleteWord(id, auth!);
        toast.success(
          `${intl.formatMessage({ id: 'word' })} "${word}" ${intl.formatMessage({
            id: 'deleteConfirm',
          })}`
        );
        setIsLoading(true);
        const response = await getWordList();
        setData(response.data?.data?.findAllKashubianEntries?.select || []);
        setIsLoading(false);
      } catch (error) {
        errorHandler(error, intl);
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
      errorHandler(error, intl);
    }
  }

  async function openModalSoundHandler(id: number) {
    setWordId(id);
    setIsSoundModalOpen(true);
  }

  async function searchForWords(searchBy: string) {
    try {
      const response = await getWordListByString(searchBy);
      const newData = response.data?.data?.findAllKashubianEntries?.select || [];
      setData(newData);
      if (!newData.length) toast.info(intl.formatMessage({ id: 'noWords' }));
    } catch (error) {
      errorHandler(error, intl);
    }
  }

  async function saveHandler(word: Partial<Word>, id = wordId, authorisation = auth) {
    try {
      if (id === -1) {
        await createWord(word, authorisation!);
        toast.success(intl.formatMessage({ id: 'wordCreated' }));
      } else {
        await updateWord(word, id, authorisation!);
        toast.success(intl.formatMessage({ id: 'wordEdited' }));
      }
      setIsModalOpen(false);
      const response = await getWordList();
      setData(response.data?.data?.findAllKashubianEntries?.select || []);
    } catch (error) {
      errorHandler(error, intl);
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
      <SoundModal
        isOpen={isSoundModalOpen}
        setIsOpen={setIsSoundModalOpen}
        id={wordId}
        auth={auth!}
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
