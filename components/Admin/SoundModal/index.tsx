import { Remove } from '@mui/icons-material';
import { Box, Button, Grid, Input, Modal } from '@mui/material';
import { useState, useEffect, useRef } from 'react';
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
  auth: BasicAuth;
};

const SoundModal = ({ isOpen, setIsOpen, id, auth }: SoundModalProps) => {
  const intl = useIntl();
  const [file, setFile] = useState<any>(null);
  const [key, setKey] = useState(0);
  const [isFilePresent, setIsFilePresent] = useState(false);
  const F = useRef<HTMLInputElement>();

  useEffect(() => {
    (async () => {
      if (!(isOpen && id)) return;

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

  async function save() {
    if (F.current?.files?.length) {
      try {
        const data = new FormData();
        data.append('soundFile', F.current?.files[0]);
        await uploadFile(data, id, auth!);
      } catch (error) {
        errorHandler(error, intl);
      }
    } else if (!isFilePresent) {
      try {
        await deleteFile(id, auth!);
      } catch (error) {
        errorHandler(error, intl);
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
                inputRef={F}
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
          <Button onClick={save}>{intl.formatMessage({ id: 'save' })}</Button>
        </footer>
      </Box>
    </Modal>
  );
};

export default SoundModal;
