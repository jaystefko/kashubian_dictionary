import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { boxSX, buttonSX, inputSX } from '../../../styles/sx';
import {
  PartOfSpeech,
  PartOfSpeechSubType,
  Word,
  subPartPerPart,
  variationPerSubPart,
} from '../../../utils/types';
import { setter } from '../../../utils/utilities';
import AC from '../../Autocomplete';

import styles from './styles.module.css';

type WordModalProps = {
  isModalOpen: boolean;
  wordId: number;
  closeHandler: () => void;
  word?: Partial<Word>;
  saveHandler: (word: Partial<Word>, id: number) => void;
};

const WordModal = ({ isModalOpen, wordId, closeHandler, word, saveHandler }: WordModalProps) => {
  const [header, setHeader] = useState('Dodaj słowo');
  const [wordString, setWordString] = useState('');
  const [priority, setPriority] = useState(true);
  const [partOfSpeech, setPartOfSpeech] = useState<PartOfSpeech>();
  const [subPartOfSpeech, setSubPartOfSpeech] = useState<PartOfSpeechSubType>();
  const [subPartOfSpeechOptionList, setSubPartOfSpeechOptionList] = useState<
    Array<PartOfSpeechSubType>
  >([]);
  const [variations, setVariations] = useState('');
  const [note, setNote] = useState('');
  const [base, setBase] = useState<Partial<Word>>();
  const [others, setOthers] = useState<Array<Partial<Word>>>();

  useEffect(() => {
    if (wordId !== -1) setHeader('Edytuj słowo');
  }, [wordId]);

  useEffect(() => {
    if (!partOfSpeech) return;
    const optionList = subPartPerPart[partOfSpeech];
    if (optionList.length === 1) setSubPartOfSpeech(optionList[0]);
    else {
      setSubPartOfSpeech(undefined);
      setVariations('');
    }
    setSubPartOfSpeechOptionList(optionList);
  }, [partOfSpeech]); // eslint-disable-line

  useEffect(() => {
    if (!subPartOfSpeech) return;
    setVariations(JSON.stringify(variationPerSubPart[subPartOfSpeech as PartOfSpeechSubType]));
  }, [subPartOfSpeech]); // eslint-disable-line

  function onSave() {
    try {
      if (!wordString) {
        toast.error('Proszę podać słowo kaszubskie');
        return;
      }

      const wordObject: Partial<Word> = {
        word: wordString,
        priority: priority,
        partOfSpeech: partOfSpeech,
        partOfSpeechSubType: subPartOfSpeech,
        variation: variations.length ? JSON.parse(variations) : undefined,
        note: note.length ? note : undefined,
        others: others?.map((x) => ({ entryId: x.id || -1, note: x.word || '' })).filter((x) => x),
        base: base?.id,
      };

      console.log(wordObject);

      saveHandler(wordObject, wordId);
    } catch (error) {
      toast.error('Formatowanie podanych wariacji są niepoprawne');
      return;
    }
  }

  return (
    <Modal open={isModalOpen}>
      <Box sx={boxSX}>
        <header className={styles.header}>
          <h2>{header}</h2>
        </header>
        <main className={styles.main}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                sx={inputSX}
                value={wordString}
                placeholder='Podaj słowo...'
                label='Kaszubskie słowo'
                onChange={setter.bind(this, setWordString)}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox checked={priority} onChange={setPriority.bind(this, !priority)} />
                  }
                  label='Może być słowem dnia'
                />
              </FormGroup>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id='partOfSpeech'>Część mowy</InputLabel>
                <Select
                  labelId='partOfSpeech'
                  sx={inputSX}
                  value={partOfSpeech}
                  label='Część mowy'
                  onChange={(e) => {
                    setPartOfSpeech(e.target.value as PartOfSpeech);
                  }}
                >
                  {(Object.keys(PartOfSpeech) as Array<keyof typeof PartOfSpeech>).map((p) => (
                    <MenuItem key={p} value={p}>
                      {p}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id='subPartOfSpeech'>Pod część mowy</InputLabel>
                <Select
                  labelId='subPartOfSpeech'
                  sx={inputSX}
                  value={subPartOfSpeech}
                  disabled={!subPartOfSpeechOptionList.length}
                  label='Pod część mowy'
                  onChange={(e) => {
                    setSubPartOfSpeech(e.target.value as PartOfSpeechSubType);
                  }}
                >
                  {subPartOfSpeechOptionList.map((p) => (
                    <MenuItem key={p} value={p}>
                      {p}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                sx={inputSX}
                value={variations}
                disabled={variations.length < 3}
                placeholder='Odmiana...'
                label='Odmiana'
                onChange={setter.bind(this, setVariations)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                sx={inputSX}
                value={note}
                placeholder='Notatka...'
                label='Notatka'
                onChange={setter.bind(this, setNote)}
              />
            </Grid>
            <Grid item xs={12}>
              <AC
                isFullWidth
                label='Słowo podstawowe'
                placeholder='Wyszukaj słowo podstawowe...'
                onChangeSingle={setBase}
              />
            </Grid>
            <Grid item xs={12}>
              <AC
                isFullWidth
                label='Słowa powiązane'
                placeholder='Wyszukaj słowa powiązane...'
                isMultiple
                onChangeMultiple={setOthers}
              />
            </Grid>
          </Grid>
        </main>
        <footer className={styles.footer}>
          <Button sx={buttonSX} onClick={closeHandler}>
            Zamknij
          </Button>
          <Button sx={buttonSX} onClick={onSave}>
            Zapisz
          </Button>
        </footer>
      </Box>
    </Modal>
  );
};

export default WordModal;
