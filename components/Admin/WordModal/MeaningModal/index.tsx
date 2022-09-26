import { Box, Button, Grid, Modal, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { boxSX, inputSX } from '../../../../styles/sx';
import { Meaning } from '../../../../utils/types';
import { setter } from '../../../../utils/utilities';
import styles from '../styles.module.css';

type MeaningModalProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  meaning?: Meaning;
  meaningListIndex: number;
  save: (meaning: Meaning, index: number) => void;
};

const MeaningModal = ({
  isOpen,
  setIsOpen,
  meaning,
  meaningListIndex,
  save,
}: MeaningModalProps) => {
  const intl = useIntl();
  const [antonymList, setAntonymList] = useState<Array<{ meaningId: number; note: string }>>([]);
  const [exampleList, setExampleList] = useState<Array<{ example: string; note: string }>>([]);
  const [hyperonym, setHyperonym] = useState<number>();
  const [origin, setOrigin] = useState('');
  const [phrasalVerbList, setPhrasalVerbList] = useState<
    Array<{ note: string; phrasalVerb: string }>
  >([]);
  const [proVerbList, setProVerbList] = useState<Array<{ note: string; proverb: string }>>([]);
  const [quoteList, setQuoteList] = useState<Array<{ note: string; quote: string }>>([]);
  const [synonymList, setSynonymList] = useState<Array<{ meaningId: number; note: string }>>([]);

  useEffect(() => {
    if (isOpen && meaning) {
      setAntonymList(meaning.antonyms || []);
      setExampleList(meaning.examples || []);
      setHyperonym(meaning.hyperonym);
      setOrigin(meaning.origin || '');
      setPhrasalVerbList(meaning.phrasalVerbs || []);
      setProVerbList(meaning.proverbs || []);
      setQuoteList(meaning.quotes || []);
      setSynonymList(meaning.synonyms || []);
    }
  }, [isOpen]); // eslint-disable-line

  function saveProxy() {
    const newMeaning: Meaning = {
      translation: meaning?.translation!,
      definition: meaning?.definition!,
      antonyms: antonymList,
      examples: exampleList,
      hyperonym: hyperonym,
      origin: origin,
      proverbs: proVerbList,
      phrasalVerbs: phrasalVerbList,
      quotes: quoteList,
      synonyms: synonymList,
    };

    save(newMeaning, meaningListIndex);
  }

  return (
    <Modal open={isOpen}>
      <Box sx={boxSX}>
        <header className={styles.header}>
          <h2>{intl.formatMessage({ id: 'origin' })}</h2>
        </header>
        <main className={styles.main}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                sx={inputSX}
                value={origin}
                placeholder={`${intl.formatMessage({ id: 'origin' })}...`}
                label={intl.formatMessage({ id: 'origin' })}
                onChange={setter.bind(this, setOrigin)}
              />
            </Grid>
          </Grid>
        </main>
        <footer className={styles.footer}>
          <Button onClick={setIsOpen.bind(this, false)}>
            {intl.formatMessage({ id: 'close' })}
          </Button>
          <Button onClick={saveProxy}>{intl.formatMessage({ id: 'save' })}</Button>
        </footer>
      </Box>
    </Modal>
  );
};

export default MeaningModal;
