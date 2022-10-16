import { Remove } from '@mui/icons-material';
import { Box, Button, Grid, Input, Modal } from '@mui/material';
import { useState, useEffect, useRef } from 'react';
import { useIntl } from 'react-intl';
import { toast } from 'react-toastify';
import { smallBoxSX, inputSX } from '../../../styles/sx';
import { deleteFile, getFile, uploadFile } from '../../../utils/api'; // getFile
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
        const data = new Blob([response.data], { type: 'audio/mp3' });
        const file = new File([data], 'audio.mp3', {
          type: 'audio/mp3',
          lastModified: new Date().getTime(),
        });
        const container = new DataTransfer();
        container.items.add(file);
        if (F.current?.files) {
          F.current.files = container.files;
          setFile(F.current.value);
        }
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
        toast.success(intl.formatMessage({ id: 'fileUploaded' }));
        setIsOpen(false);
      } catch (error) {
        errorHandler(error, intl);
      }
    } else if (isFilePresent && !file) {
      try {
        await deleteFile(id, auth!);
        toast.success(intl.formatMessage({ id: 'fileDeleted' }));
        setIsOpen(false);
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
                onChange={(e) => {
                  const target = e.target as HTMLInputElement;
                  if (target.files?.length) {
                    if (target.files[0].size > 512000) {
                      toast.error(intl.formatMessage({ id: 'fileTooBig' }));
                      deleteF();
                    } else {
                      setFile(target.value);
                    }
                  }
                }}
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
