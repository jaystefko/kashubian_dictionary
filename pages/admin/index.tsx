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
        const response = await getWordList();
        setData(response.data?.data?.SearchKashubianEntries?.select);
      } catch (error) {
        errorHandler(error);
      }
    })();
  }, [auth]);

  async function deleteHandler(id: number, word: string) {
    if (id === -1) return;
    if (confirm(`Czy jesteś pewien że chcesz usunąć "${word}"`)) {
      try {
        await deleteWord(id, auth!);
        const response = await getWordList();
        setData(response.data?.data?.SearchKashubianEntries?.select);
        toast.success(`Słowo "${word}" zostało usunięte`);
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
      const response = await getWordListByString(searchBy);
      setData(response.data?.data?.SearchKashubianEntries?.select);
    } catch (error) {
      errorHandler(error);
    }
  }

  return (
    <>
      <ToastContainer theme='colored' />
      <Modal open={isModalOpen}>
        <div>
          <p>{wordId}</p>
          <Button onClick={setIsModalOpen.bind(this, !isModalOpen)}>Close modal</Button>
        </div>
      </Modal>
      <div className='whole-page'>
        <article>
          <section>
            <TextField
              value={search}
              placeholder='Wyszukaj...'
              onChange={setter.bind(this, setSearch)}
            />
            <Button onClick={searchForWords.bind(this, search)}>
              <Search />
            </Button>
            <Button>
              <Add onClick={setIsModalOpen.bind(this, !isModalOpen)} />
            </Button>
          </section>
          <section>
            <TableContainer component={Paper} className={styles.table}>
              <Table stickyHeader aria-label='Tablica słów'>
                <TableHead>
                  <TableRow>
                    <TableCell>Słowo</TableCell>
                    <TableCell align='right'>Edycja</TableCell>
                    <TableCell align='right'>Usunięcie</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component='th' scope='row'>
                        {row.word}
                      </TableCell>
                      <TableCell align='right'>
                        <Button onClick={openModalEditHandler.bind(this, row.id || -1)}>
                          <Edit />
                        </Button>
                      </TableCell>
                      <TableCell align='right'>
                        <Button onClick={deleteHandler.bind(this, row.id || -1, row.word || '')}>
                          <Delete />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </section>
        </article>
      </div>
    </>
  );
};

export default AdminScreen;
