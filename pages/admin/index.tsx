import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import {
  Table,
  TextField,
  Button,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Modal,
  CircularProgress,
} from '@mui/material';
import { Add, Delete, Edit, Search } from '@mui/icons-material';
import { deleteWord, getWordList, getWordListByString } from '../../utils/api';
import errorHandler from '../../utils/errorHandler';
import { BasicAuth, Word } from '../../utils/types';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setter } from '../../utils/utilities';

import styles from '../../styles/admin.module.css';

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

  return (
    <>
      <ToastContainer theme='colored' />
      <Modal open={isModalOpen}>
        <div>
          <p>{wordId}</p>
          <Button onClick={setIsModalOpen.bind(this, false)}>Close modal</Button>
        </div>
      </Modal>
      <div className='whole-page'>
        {isLoading ? (
          <CircularProgress color='warning' />
        ) : (
          <article className={styles.article}>
            <section className={styles.bar}>
              <TextField
                sx={{
                  '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#fdcd01 !important',
                  },
                }}
                className={styles.input}
                value={search}
                placeholder='Wyszukaj...'
                onChange={setter.bind(this, setSearch)}
              />
              <Button onClick={searchForWords.bind(this, search)} className={styles.button}>
                <Search className={styles.icon} />
              </Button>
              <Button onClick={setIsModalOpen.bind(this, true)} className={styles.button}>
                <Add className={styles.icon} />
              </Button>
            </section>
            <section>
              {data.length ? (
                <TableContainer component={Paper} className={styles.table}>
                  <Table stickyHeader aria-label='Tablica słów'>
                    <TableHead>
                      <TableRow>
                        <TableCell className={styles.headerCell}>Słowo</TableCell>
                        <TableCell className={styles.headerCell} align='right'>
                          Edycja
                        </TableCell>
                        <TableCell className={styles.headerCell} align='right'>
                          Usunięcie
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data.map((row) => (
                        <TableRow
                          key={row.id}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell className={styles.cell} component='th' scope='row'>
                            {row.word}
                          </TableCell>
                          <TableCell className={styles.cell} align='right'>
                            <Button
                              onClick={openModalEditHandler.bind(this, row.id || -1)}
                              className={styles.button}
                            >
                              <Edit className={styles.icon} />
                            </Button>
                          </TableCell>
                          <TableCell className={styles.cell} align='right'>
                            <Button
                              onClick={deleteHandler.bind(this, row.id || -1, row.word || '')}
                              className={styles.button}
                            >
                              <Delete className={styles.icon} />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              ) : null}
            </section>
          </article>
        )}
      </div>
    </>
  );
};

export default AdminScreen;
