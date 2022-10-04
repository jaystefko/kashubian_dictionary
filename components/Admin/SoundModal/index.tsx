import { Remove } from '@mui/icons-material';
import { Box, Button, Grid, Input, Modal } from '@mui/material';
import { useState, useEffect } from 'react';
import { useIntl } from 'react-intl';
import { smallBoxSX, inputSX } from '../../../styles/sx';
import { deleteFile, getFile, uploadFile } from '../../../utils/api';
import errorHandler from '../../../utils/errorHandler';
import { BasicAuth } from '../../../utils/types';
import styles from '../WordModal/styles.module.css';

type SoundModalProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  id: number;
};

const SoundModal = ({ isOpen, setIsOpen, id }: SoundModalProps) => {
  const intl = useIntl();
  const [file, setFile] = useState<any>(null);
  const [auth, setAuth] = useState<BasicAuth>();
  const [key, setKey] = useState(0);
  const [isFilePresent, setIsFilePresent] = useState(false);

  useEffect(() => {
    let data = localStorage.getItem('auth');
    if (!data) {
      const username = prompt('Fill in your login', '') || '';
      const password = prompt('Fill in your password', '') || '';
      setAuth({ username, password });
    } else {
      setAuth(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    (async () => {
      if (!(isOpen && id && auth)) return;

      try {
        const response = await getFile(id, auth);
        setFile(response.data);
        setKey(key + 1);
        setIsFilePresent(true);
      } catch (error) {
        setIsFilePresent(false);
      }
    })();

    return () => {
      setFile(null);
    };
  }, [isOpen, id, auth]); // eslint-disable-line

  async function save(f: any) {
    if (file) {
      try {
        const data = new FormData();
        data.append('file', f);
        await uploadFile(data, id, auth!);
      } catch (error) {
        errorHandler(error);
      }
    } else if (!isFilePresent) {
      try {
        await deleteFile(id, auth!);
      } catch (error) {
        errorHandler(error);
      }
    } else {
      setIsOpen(false);
    }
  }

  async function deleteF() {
    setFile(null);
    setKey(key + 1);
  }

  return (
    <Modal open={isOpen}>
      <Box sx={smallBoxSX}>
        <header className={styles.header}>
          <h2>{intl.formatMessage({ id: 'file' })}</h2>
        </header>
        <main className={styles.main}>
          <Grid container xs={12} spacing={2}>
            <Grid item xs={10}>
              <Input
                type='file'
                inputProps={{ accept: '.mp3' }}
                value={file}
                onChange={(e) => setFile(e.target.value)}
                key={key}
                sx={inputSX}
              />
            </Grid>
            <Grid item xs={2}>
              <Button
                disabled={!file}
                onClick={deleteF}
                title={intl.formatMessage({ id: 'deleteFile' })}
              >
                <Remove />
              </Button>
            </Grid>
          </Grid>
        </main>
        <footer className={styles.footer}>
          <Button onClick={setIsOpen.bind(this, false)}>
            {intl.formatMessage({ id: 'close' })}
          </Button>
          <Button onClick={save.bind(this, file)}>{intl.formatMessage({ id: 'save' })}</Button>
        </footer>
      </Box>
    </Modal>
  );
};

export default SoundModal;
