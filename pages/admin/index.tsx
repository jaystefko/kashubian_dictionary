import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import { deleteWord, getWordList, getWordListByString } from '../../utils/api';
import errorHandler from '../../utils/errorHandler';
import { BasicAuth, Word } from '../../utils/types';

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
        setData(response.data?.data?.SearchKashubianEntries?.select);
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
        setData(response.data?.data?.SearchKashubianEntries?.select);
        setIsLoading(false);
      } catch (error) {
        errorHandler(error);
      }
    }
  }

  function openModalEditHandler(id: number) {
    if (id === -1) return;
    setWordId(id);
    setIsModalOpen(true);
  }

  async function searchForWords(searchBy: string) {
    try {
      setIsLoading(true);
      const response = await getWordListByString(searchBy);
      setData(response.data?.data?.SearchKashubianEntries?.select);
      if (!response.data?.data?.SearchKashubianEntries?.select?.length)
        toast.info('Nie znaleziono odpowiednich słów');
    } catch (error) {
      errorHandler(error);
    } finally {
      setIsLoading(false);
    }
  }

  // async function getWord(wordId: number) {
  //   if (wordId === -1) return
  //   try {
  //     const response = await fetch("");
  //     console.log(response)
  //   } catch(error) {
  //     errorHandler(error)
  //   }
  // }

  return (
    <>
      <ToastContainer theme='colored' />
      <WordModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} wordId={wordId} />
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
