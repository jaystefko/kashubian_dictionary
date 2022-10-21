import { Add, Remove } from '@mui/icons-material';
import { Box, Button, Grid, Modal, Paper, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { boxSX, inputSX } from '../../../../styles/sx';
import { GatheredMeaning } from '../../../../utils/types';
import MAC from '../../../AutocompleteMeaning';
import styles from '../styles.module.css';

type MeaningModalProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  meaning?: GatheredMeaning;
  meaningListIndex: number;
  save: (meaning: GatheredMeaning, index: number) => void;
};

type Option = {
  id: number;
  definition: string;
};

const MeaningModal = ({
  isOpen,
  setIsOpen,
  meaning,
  meaningListIndex,
  save,
}: MeaningModalProps) => {
  const intl = useIntl();
  const [antonymList, setAntonymList] = useState<Array<Option | null>>([]);
  const [exampleList, setExampleList] = useState<Array<{ note?: string; example: string }>>([]);
  const [hyperonym, setHyperonym] = useState<Option | null>(null);
  const [phrasalVerbList, setPhrasalVerbList] = useState<
    Array<{ note?: string; phrasalVerb: string }>
  >([]);
  const [proVerbList, setProVerbList] = useState<Array<{ note?: string; proverb: string }>>([]);
  const [quoteList, setQuoteList] = useState<Array<{ note?: string; quote: string }>>([]);
  const [synonymList, setSynonymList] = useState<Array<Option | null>>([]);

  useEffect(() => {
    if (isOpen && meaning) {
      setExampleList(meaning.examples || []);
      setPhrasalVerbList(meaning.phrasalVerbs || []);
      setProVerbList(meaning.proverbs || []);
      setQuoteList(meaning.quotes || []);
      setSynonymList(
        meaning.synonyms?.map((s) => ({ id: s.id, definition: s.synonym.definition })) || []
      );
      setAntonymList(
        meaning.antonyms?.map((a) => ({ id: a.id, definition: a.antonym.definition })) || []
      );
      setHyperonym(meaning.hyperonym || null);
    }
  }, [isOpen]); // eslint-disable-line

  function saveProxy() {
    const newMeaning: GatheredMeaning = {
      translation: meaning?.translation!,
      definition: meaning?.definition!,
      antonyms: antonymList
        .filter((a) => a)
        .map((a) => ({
          id: a!.id,
          antonym: { definition: a!.definition },
        })),
      examples: exampleList,
      hyperonym: hyperonym || undefined,
      origin: meaning?.origin,
      proverbs: proVerbList,
      phrasalVerbs: phrasalVerbList,
      quotes: quoteList,
      synonyms: synonymList
        .filter((s) => s)
        .map((s) => ({
          id: s!.id,
          synonym: { definition: s!.definition },
        })),
    };

    save(newMeaning, meaningListIndex);
  }

  return (
    <Modal open={isOpen}>
      <Box sx={boxSX}>
        <header className={styles.header}>
          <h2>{intl.formatMessage({ id: 'meaning' })}</h2>
        </header>
        <main className={styles.main}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <MAC
                isFullWidth
                placeholder={`${intl.formatMessage({ id: 'hyperonym' })}...`}
                label={intl.formatMessage({ id: 'hyperonym' })}
                onChangeSingle={setHyperonym}
                value={hyperonym}
              />
            </Grid>
            <Grid item xs={12}>
              <MAC
                isFullWidth
                placeholder={`${intl.formatMessage({ id: 'synonyms' })}...`}
                label={intl.formatMessage({ id: 'synonyms' })}
                isMultiple
                onChangeMultiple={setSynonymList}
                value={synonymList}
              />
            </Grid>
            <Grid item xs={12}>
              <MAC
                isFullWidth
                placeholder={`${intl.formatMessage({ id: 'antonyms' })}...`}
                label={intl.formatMessage({ id: 'antonyms' })}
                isMultiple
                onChangeMultiple={setAntonymList}
                value={antonymList}
              />
            </Grid>
            <Grid item xs={12}>
              <Paper elevation={3} sx={{ margin: '0.5rem 0' }}>
                <Grid item xs={12}>
                  <h3 style={{ margin: 0, padding: '1rem 0 0 1rem' }}>
                    {intl.formatMessage({ id: 'quotes' })}
                  </h3>
                </Grid>
                {quoteList.map((q, index) => (
                  <Grid
                    container
                    xs={12}
                    key={index}
                    spacing={2}
                    margin='0.5rem 0'
                    alignItems='center'
                  >
                    <Grid item xs={5}>
                      <TextField
                        fullWidth
                        sx={inputSX}
                        value={q.quote}
                        placeholder={`${intl.formatMessage({ id: 'quote' })}...`}
                        label={intl.formatMessage({ id: 'quote' })}
                        onChange={(e) => {
                          const copy = [...quoteList];
                          copy[index].quote = e.target.value;
                          setQuoteList(copy);
                        }}
                      />
                    </Grid>
                    <Grid item xs={5}>
                      <TextField
                        fullWidth
                        sx={inputSX}
                        value={q.note}
                        placeholder={`${intl.formatMessage({ id: 'note' })}...`}
                        label={intl.formatMessage({ id: 'note' })}
                        onChange={(e) => {
                          const copy = [...quoteList];
                          copy[index].note = e.target.value;
                          setQuoteList(copy);
                        }}
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <Button
                        title={intl.formatMessage({ id: 'removeQuote' })}
                        onClick={() => {
                          const copy = quoteList.filter((qq, i) => i !== index);
                          setQuoteList(copy);
                        }}
                      >
                        <Remove />
                      </Button>
                    </Grid>
                  </Grid>
                ))}
                <Grid item xs={12} spacing={2}>
                  <Button
                    style={{ margin: '1rem 0 0.5rem 0.5rem' }}
                    onClick={() => {
                      setQuoteList([...quoteList, { note: '', quote: '' }]);
                    }}
                  >
                    <Add /> {intl.formatMessage({ id: 'addQuote' })}
                  </Button>
                </Grid>
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper elevation={3} sx={{ background: 'transparent', margin: '0.5rem 0' }}>
                <Grid item xs={12}>
                  <h3 style={{ margin: 0, padding: '1rem 0 0 1rem' }}>
                    {intl.formatMessage({ id: 'examples' })}
                  </h3>
                </Grid>
                {exampleList.map((e, index) => (
                  <Grid
                    container
                    xs={12}
                    key={index}
                    spacing={2}
                    margin='0.5rem 0'
                    alignItems='center'
                  >
                    <Grid item xs={5}>
                      <TextField
                        fullWidth
                        sx={inputSX}
                        value={e.example}
                        placeholder={`${intl.formatMessage({ id: 'example' })}...`}
                        label={intl.formatMessage({ id: 'example' })}
                        onChange={(e) => {
                          const copy = [...exampleList];
                          copy[index].example = e.target.value;
                          setExampleList(copy);
                        }}
                      />
                    </Grid>
                    <Grid item xs={5}>
                      <TextField
                        fullWidth
                        sx={inputSX}
                        value={e.note}
                        placeholder={`${intl.formatMessage({ id: 'note' })}...`}
                        label={intl.formatMessage({ id: 'note' })}
                        onChange={(event) => {
                          const copy = [...exampleList];
                          copy[index].note = event.target.value;
                          setExampleList(copy);
                        }}
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <Button
                        title={intl.formatMessage({ id: 'removeExample' })}
                        onClick={() => {
                          const copy = exampleList.filter((ee, i) => i !== index);
                          setExampleList(copy);
                        }}
                      >
                        <Remove />
                      </Button>
                    </Grid>
                  </Grid>
                ))}
                <Grid item xs={12} spacing={2}>
                  <Button
                    style={{ margin: '1rem 0 0.5rem 0.5rem' }}
                    onClick={() => {
                      setExampleList([...exampleList, { note: '', example: '' }]);
                    }}
                  >
                    <Add /> {intl.formatMessage({ id: 'addExample' })}
                  </Button>
                </Grid>
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper elevation={3} sx={{ background: 'transparent', margin: '0.5rem 0' }}>
                <Grid item xs={12}>
                  <h3 style={{ margin: 0, padding: '1rem 0 0 1rem' }}>
                    {intl.formatMessage({ id: 'proverbs' })}
                  </h3>
                </Grid>
                {proVerbList.map((p, index) => (
                  <Grid
                    container
                    xs={12}
                    key={index}
                    spacing={2}
                    margin='0.5rem 0'
                    alignItems='center'
                  >
                    <Grid item xs={5}>
                      <TextField
                        fullWidth
                        sx={inputSX}
                        value={p.proverb}
                        placeholder={`${intl.formatMessage({ id: 'proverb' })}...`}
                        label={intl.formatMessage({ id: 'proverb' })}
                        onChange={(e) => {
                          const copy = [...proVerbList];
                          copy[index].proverb = e.target.value;
                          setProVerbList(copy);
                        }}
                      />
                    </Grid>
                    <Grid item xs={5}>
                      <TextField
                        fullWidth
                        sx={inputSX}
                        value={p.note}
                        placeholder={`${intl.formatMessage({ id: 'note' })}...`}
                        label={intl.formatMessage({ id: 'note' })}
                        onChange={(e) => {
                          const copy = [...proVerbList];
                          copy[index].note = e.target.value;
                          setProVerbList(copy);
                        }}
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <Button
                        title={intl.formatMessage({ id: 'removeProverb' })}
                        onClick={() => {
                          const copy = proVerbList.filter((pp, i) => i !== index);
                          setProVerbList(copy);
                        }}
                      >
                        <Remove />
                      </Button>
                    </Grid>
                  </Grid>
                ))}
                <Grid item xs={12} spacing={2}>
                  <Button
                    style={{ margin: '1rem 0 0.5rem 0.5rem' }}
                    onClick={() => {
                      setProVerbList([...proVerbList, { note: '', proverb: '' }]);
                    }}
                  >
                    <Add /> {intl.formatMessage({ id: 'addProverb' })}
                  </Button>
                </Grid>
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper elevation={3} sx={{ background: 'transparent', margin: '0.5rem 0' }}>
                <Grid item xs={12}>
                  <h3 style={{ margin: 0, padding: '1rem 0 0 1rem' }}>
                    {intl.formatMessage({ id: 'phrasalVerbs' })}
                  </h3>
                </Grid>
                {phrasalVerbList.map((p, index) => (
                  <Grid
                    container
                    xs={12}
                    key={index}
                    spacing={2}
                    margin='0.5rem 0'
                    alignItems='center'
                  >
                    <Grid item xs={5}>
                      <TextField
                        fullWidth
                        sx={inputSX}
                        value={p.phrasalVerb}
                        placeholder={`${intl.formatMessage({ id: 'phrasalVerb' })}...`}
                        label={intl.formatMessage({ id: 'phrasalVerb' })}
                        onChange={(e) => {
                          const copy = [...phrasalVerbList];
                          copy[index].phrasalVerb = e.target.value;
                          setPhrasalVerbList(copy);
                        }}
                      />
                    </Grid>
                    <Grid item xs={5}>
                      <TextField
                        fullWidth
                        sx={inputSX}
                        value={p.note}
                        placeholder={`${intl.formatMessage({ id: 'note' })}...`}
                        label={intl.formatMessage({ id: 'note' })}
                        onChange={(e) => {
                          const copy = [...phrasalVerbList];
                          copy[index].note = e.target.value;
                          setPhrasalVerbList(copy);
                        }}
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <Button
                        title={intl.formatMessage({ id: 'removePhrasalVerb' })}
                        onClick={() => {
                          const copy = phrasalVerbList.filter((pp, i) => i !== index);
                          setPhrasalVerbList(copy);
                        }}
                      >
                        <Remove />
                      </Button>
                    </Grid>
                  </Grid>
                ))}
                <Grid item xs={12} spacing={2}>
                  <Button
                    style={{ margin: '1rem 0 0.5rem 0.5rem' }}
                    onClick={() => {
                      setPhrasalVerbList([...phrasalVerbList, { note: '', phrasalVerb: '' }]);
                    }}
                  >
                    <Add /> {intl.formatMessage({ id: 'addPhrasalVerb' })}
                  </Button>
                </Grid>
              </Paper>
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
