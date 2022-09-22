import { Box, Button, Grid, MenuItem, Modal, Select, TextField } from '@mui/material';
import { useState, useEffect } from 'react';
import { useIntl } from 'react-intl';
import { boxSX, inputSX } from '../../../../styles/sx';
import styles from '../styles.module.css';

type VariationModalProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  variation: Object | null;
  save: (variation: Object | null) => void;
};

const VariationModal = ({ isOpen, setIsOpen, variation, save }: VariationModalProps) => {
  const intl = useIntl();
  // @ts-ignore
  const [v, setV] = useState({});

  useEffect(() => {
    if (variation) setV({ ...variation });
  }, [variation]);

  return (
    <Modal open={isOpen}>
      <Box sx={boxSX}>
        <header className={styles.header}>
          <h2>{intl.formatMessage({ id: 'variation' })}</h2>
        </header>
        <main className={styles.main}>
          <Grid container spacing={2}>
            {Object.keys(v).map((key, index) => {
              // @ts-ignore
              if (typeof v[key] === 'string') {
                if (key === 'gerundiumGrammaticalType') {
                  return (
                    <Grid item xs={12} key={index}>
                      <Select
                        fullWidth
                        sx={inputSX}
                        // @ts-ignore
                        value={v[key]}
                        label={intl.formatMessage({ id: key })}
                        required
                        // @ts-ignore
                        onChange={(e) => setV({ ...v, [key]: e.target.value })}
                      >
                        <MenuItem value={'PERFECT'}>
                          {intl.formatMessage({ id: 'PERFECT' })}
                        </MenuItem>
                        <MenuItem value={'IMPERFECTIVE'}>
                          {intl.formatMessage({ id: 'IMPERFECTIVE' })}
                        </MenuItem>
                      </Select>
                    </Grid>
                  );
                }
                return (
                  <Grid item xs={12} key={index}>
                    <TextField
                      fullWidth
                      sx={inputSX}
                      // @ts-ignore
                      value={v[key]}
                      placeholder={`${intl.formatMessage({ id: key })}...`}
                      label={intl.formatMessage({ id: key })}
                      // @ts-ignore
                      onChange={(e) => setV({ ...v, [key]: e.target.value })}
                    />
                  </Grid>
                );
              } else {
                const childList = [];

                childList.push(
                  <Grid item xs={12} key={index}>
                    <p>{intl.formatMessage({ id: key })}</p>
                  </Grid>
                );

                // @ts-ignore
                Object.keys(v[key]).forEach((k, i) => {
                  childList.push(
                    <Grid item xs={6} key={`${index}.${i}`}>
                      <TextField
                        sx={inputSX}
                        // @ts-ignore
                        value={v[key][k]}
                        placeholder={`${intl.formatMessage({ id: k })}...`}
                        label={intl.formatMessage({ id: k })}
                        // @ts-ignore
                        onChange={(e) => setV({ ...v, [key]: { ...v[key], [k]: e.target.value } })}
                      />
                    </Grid>
                  );
                });

                return childList;
              }
            })}
          </Grid>
        </main>
        <footer className={styles.footer}>
          <Button onClick={setIsOpen.bind(this, false)}>Zamknij</Button>
          <Button onClick={save.bind(this, v)}>Zapisz</Button>
        </footer>
      </Box>
    </Modal>
  );
};

export default VariationModal;
