import { Add, Remove } from '@mui/icons-material';
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
  Paper,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { boxSX, buttonSX, checkboxSX, inputSX } from '../../../styles/sx';
import {
  PARTS_OF_SPEECH,
  SUB_PARTS_OF_SPEECH,
  Word,
  subPartPerPart,
  variationPerSubPart,
  GatheredWord,
  COLORS,
  Meaning,
} from '../../../utils/types';
import { isEmpty, setter } from '../../../utils/utilities';
import AC from '../../Autocomplete';
import defaultMeaning from './meaning';
import { FormattedMessage, useIntl } from 'react-intl';

import styles from './styles.module.css';
import VariationModal from './VariationModal';
import MeaningModal from './MeaningModal';

type WordModalProps = {
  isModalOpen: boolean;
  wordId: number;
  closeHandler: () => void;
  word?: Partial<GatheredWord>;
  saveHandler: (word: Partial<Word>, id: number) => void;
};

type Option = {
  id: number;
  word: string;
  normalizedWord: string;
};

const WordModal = ({ isModalOpen, wordId, closeHandler, word, saveHandler }: WordModalProps) => {
  const intl = useIntl();
  const [header, setHeader] = useState('');
  const [wordString, setWordString] = useState('');
  const [priority, setPriority] = useState(true);
  const [partOfSpeech, setPartOfSpeech] = useState('');
  const [subPartOfSpeech, setSubPartOfSpeech] = useState('');
  const [subPartOfSpeechOptionList, setSubPartOfSpeechOptionList] = useState<
    Array<SUB_PARTS_OF_SPEECH>
  >([]);
  const [variations, setVariations] = useState<Object | null>(null);
  const [note, setNote] = useState('');
  const [base, setBase] = useState<Option | null>(null);
  const [others, setOthers] = useState<Array<Option | null>>([]);
  const [meanings, setMeanings] = useState<Array<Meaning>>([{ ...defaultMeaning }]);
  const [isVariationModalOpen, setIsVariationModalOpen] = useState(false);
  const [isMeaningModalOpen, setIsMeaningModalOpen] = useState(false);
  const [meaningIndex, setMeaningIndex] = useState(-1);

  useEffect(() => {
    if (!isModalOpen) {
      setHeader('Dodaj słowo');
      setWordString('');
      setPriority(true);
      setPartOfSpeech('');
      setSubPartOfSpeech('');
      setVariations(null);
      setNote('');
      setBase(null);
      setOthers([]);
      setMeanings([{ ...defaultMeaning }]);
    }
  }, [isModalOpen]); // eslint-disable-line

  useEffect(() => {
    if (!word) return;

    const otherList = word?.others?.map((o) => ({
      id: o.other.id,
      word: o.other.word,
      normalizedWord: o.note,
    }));

    setHeader('Edytuj słowo');
    setWordString(word.word!);
    setPriority(Boolean(word.priority));
    setPartOfSpeech(word.partOfSpeech!);
    setSubPartOfSpeech(word.partOfSpeechSubType!);
    setVariations(word.variation && !isEmpty(word.variation) ? word.variation : null);
    setNote(word?.note || '');
    setBase(word?.base || null);
    setOthers(otherList || []);
    setMeanings(word.meanings || []);
    setSPOSOptionList(word.partOfSpeech!, false);
  }, [word]);

  function onSave() {
    try {
      const meaningCheck = meanings.filter((m) => m.definition && m.translation.polish);
      if (!wordString) {
        toast.error('Proszę podać słowo kaszubskie');
        return;
      }
      if (!(partOfSpeech && subPartOfSpeech)) {
        toast.error('Proszę wpisać część i pod część mowy');
        return;
      }
      if (!meaningCheck.length) {
        toast.error(
          'Słowo musi posiadać przynajmniej 1 znaczenie z wypełnioną definicją i tłumaczeniem PL'
        );
        return;
      }

      let wordObject: Partial<Word> = {
        word: wordString,
        priority: priority,
        partOfSpeech: partOfSpeech as PARTS_OF_SPEECH,
        partOfSpeechSubType: subPartOfSpeech as SUB_PARTS_OF_SPEECH,
        variation: variations,
        note: note.length ? note : undefined,
        others: others
          ?.map((x) => ({ entryId: x?.id || -1, note: x?.word || '' }))
          .filter((x) => x),
        base: base?.id ? Number(base?.id) : undefined,
        meanings: meanings,
      };

      saveHandler(wordObject, wordId);
    } catch (error) {
      toast.error('Formatowanie podanych wariacji jest niepoprawne');
      return;
    }
  }

  function setSPOSOptionList(pos: PARTS_OF_SPEECH, isVariationsIncluded = true) {
    const optionList = subPartPerPart[pos];

    if (optionList.length === 1) {
      setSubPartOfSpeech(optionList[0]);
      if (isVariationsIncluded) setVariations(variationPerSubPart[optionList[0]]);
    } else if (isVariationsIncluded) {
      setVariations(null);
      setSubPartOfSpeech('');
    }

    setSubPartOfSpeechOptionList(optionList);
  }

  function variationSaveHandler(v: Object | null) {
    setVariations(v);
    setIsVariationModalOpen(false);
  }

  function meaningSaveHandler(meaning: Meaning, index: number) {
    const copy = meanings;
    copy[index] = meaning;
    setMeanings(copy);
    setIsMeaningModalOpen(false);
  }

  function partOfSpeechChangeHandler(e: SelectChangeEvent<string>) {
    setPartOfSpeech(e.target.value as PARTS_OF_SPEECH);
    setSPOSOptionList(e.target.value as PARTS_OF_SPEECH);
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
                    <Checkbox
                      sx={checkboxSX}
                      checked={priority}
                      onChange={setPriority.bind(this, !priority)}
                    />
                  }
                  label='Może być słowem dnia'
                />
              </FormGroup>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id='partOfSpeech'>Część mowy *</InputLabel>
                <Select
                  labelId='partOfSpeech'
                  sx={inputSX}
                  value={partOfSpeech}
                  label='Część mowy'
                  required
                  onChange={partOfSpeechChangeHandler}
                >
                  {(Object.keys(PARTS_OF_SPEECH) as Array<keyof typeof PARTS_OF_SPEECH>).map(
                    (p) => (
                      <MenuItem key={p} value={p}>
                        <FormattedMessage id={`PARTS_OF_SPEECH.${p}`} />
                      </MenuItem>
                    )
                  )}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id='subPartOfSpeech'>Pod część mowy *</InputLabel>
                <Select
                  labelId='subPartOfSpeech'
                  sx={inputSX}
                  value={subPartOfSpeech}
                  disabled={!subPartOfSpeechOptionList.length}
                  required
                  label='Pod część mowy'
                  onChange={(e) => {
                    setVariations(variationPerSubPart[e.target.value as SUB_PARTS_OF_SPEECH]);
                    setSubPartOfSpeech(e.target.value as SUB_PARTS_OF_SPEECH);
                  }}
                >
                  {subPartOfSpeechOptionList.map((p) => (
                    <MenuItem key={p} value={p}>
                      <FormattedMessage id={`SUB_PARTS_OF_SPEECH.${p}`} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button disabled={!variations} onClick={setIsVariationModalOpen.bind(this, true)}>
                <FormattedMessage id='variation' />
              </Button>
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
                value={base}
              />
            </Grid>
            <Grid item xs={12}>
              <AC
                isFullWidth
                label='Słowa powiązane'
                placeholder='Wyszukaj słowa powiązane...'
                isMultiple
                onChangeMultiple={setOthers}
                value={others}
              />
            </Grid>
            <Grid item xs={12}>
              <h2>Znaczenia</h2>

              {meanings.map((m, index) => (
                <Paper
                  elevation={3}
                  key={index}
                  sx={{ background: 'transparent', margin: '2rem 0' }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <p style={{ margin: '0 1rem', color: COLORS.YELLOW, fontWeight: 'bold' }}>
                        Znaczenie {index + 1}
                      </p>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        sx={inputSX}
                        value={meanings[index].definition}
                        required
                        placeholder='Definicja...'
                        label='Definicja'
                        onChange={(e) => {
                          const copy = [...meanings];
                          copy[index].definition = e.target.value;
                          setMeanings(copy);
                        }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        sx={inputSX}
                        value={meanings[index].translation?.polish || ''}
                        required
                        placeholder='Tłumaczenie PL...'
                        label='Tłumaczenie PL'
                        onChange={(e) => {
                          const copy = [...meanings];
                          copy[index].translation.polish = e.target.value;
                          setMeanings(copy);
                        }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        sx={inputSX}
                        value={meanings[index].translation?.english || ''}
                        placeholder='Tłumaczenie EN...'
                        label='Tłumaczenie EN'
                        onChange={(e) => {
                          const copy = [...meanings];
                          copy[index].translation.english = e.target.value;
                          setMeanings(copy);
                        }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        sx={inputSX}
                        value={meanings[index].translation?.german || ''}
                        placeholder='Tłumaczenie GE...'
                        label='Tłumaczenie GE'
                        onChange={(e) => {
                          const copy = [...meanings];
                          copy[index].translation.german = e.target.value;
                          setMeanings(copy);
                        }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        sx={inputSX}
                        value={meanings[index].translation?.ukrainian || ''}
                        placeholder='Tłumaczenie UK...'
                        label='Tłumaczenie UK'
                        onChange={(e) => {
                          const copy = [...meanings];
                          copy[index].translation.ukrainian = e.target.value;
                          setMeanings(copy);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        disabled={index === 0}
                        sx={buttonSX}
                        onClick={() => {
                          if (index !== 0) {
                            const copy = meanings.filter((m, i) => i !== index);
                            setMeanings(copy);
                          }
                        }}
                      >
                        <Remove />
                        Usuń znaczenie
                      </Button>
                      <Button
                        sx={buttonSX}
                        onClick={() => {
                          setMeaningIndex(index);
                          setIsMeaningModalOpen(true);
                        }}
                      >
                        Zcharakretyzuj znaczenie
                      </Button>
                    </Grid>
                  </Grid>
                </Paper>
              ))}

              <Button
                sx={buttonSX}
                onClick={() => {
                  setMeanings([...meanings, { ...defaultMeaning }]);
                }}
              >
                <Add /> Dodaj znaczenie
              </Button>
            </Grid>
          </Grid>
        </main>
        <footer className={styles.footer}>
          <Button sx={buttonSX} onClick={closeHandler}>
            {intl.formatMessage({ id: 'close' })}
          </Button>
          <Button sx={buttonSX} onClick={onSave}>
            {intl.formatMessage({ id: 'save' })}
          </Button>
        </footer>
        <MeaningModal
          isOpen={isMeaningModalOpen}
          save={meaningSaveHandler}
          setIsOpen={setIsMeaningModalOpen}
          meaning={meanings[meaningIndex]}
          meaningListIndex={meaningIndex}
        />
        <VariationModal
          isOpen={isVariationModalOpen}
          save={variationSaveHandler}
          setIsOpen={setIsVariationModalOpen}
          variation={variations}
        />
      </Box>
    </Modal>
  );
};

export default WordModal;
