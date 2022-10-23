import { Box, Button, Modal } from '@mui/material';
import { useState, useEffect } from 'react';
import { useIntl } from 'react-intl';
import { boxSX } from '../../../../styles/sx';
import styles from '../styles.module.css';
import { SUB_PARTS_OF_SPEECH } from '../../../../utils/types';
import NounVariation, { NounVariationProps } from './NounVariation';
import VerbVariation, { VerbVariationProps } from './VerbVariation';
import AdjectiveVariation, { AdjectiveVariationProps } from './AdjectiveVariation';
import NumeralVariation, { NumeralVariationProps } from './NumeralVariation';
import NounPronounVariation, { NounPronounVariationProps } from './NounPronounVariation';
import AdjectivePronounVariation, {
  AdjectivePronounVariationProps,
} from './AdjectivePronounVariation';
import AdverbVariation, { AdverbVariationProps } from './AdverbVariation';

type VariationModalProps = {
  isOpen: boolean;
  partOfSpeechSubType: SUB_PARTS_OF_SPEECH;
  setIsOpen: (isOpen: boolean) => void;
  variation: Object | null;
  save: (variation: Object | null) => void;
};

const VariationModal = ({
  isOpen,
  setIsOpen,
  partOfSpeechSubType,
  variation,
  save,
}: VariationModalProps) => {
  const intl = useIntl();
  // @ts-ignore
  const [v, setV] = useState({});

  useEffect(() => {
    if (variation) setV({ ...variation });
  }, [variation]);

  let variationTablesToRender = prepareVariationTables(partOfSpeechSubType, variation);

  return (
    <Modal open={isOpen}>
      <Box sx={boxSX}>
        <header className={styles.header}>
          <h2>{intl.formatMessage({ id: 'variation' })}</h2>
        </header>
        <main className={styles.main}>{variationTablesToRender}</main>
        <footer className={styles.footer}>
          <Button onClick={setIsOpen.bind(this, false)}>
            {intl.formatMessage({ id: 'close' })}
          </Button>
          <Button onClick={save.bind(this, v)}>{intl.formatMessage({ id: 'save' })}</Button>
        </footer>
      </Box>
    </Modal>
  );
};

function prepareVariationTables(
  partOfSpeechSubType: SUB_PARTS_OF_SPEECH,
  variation: Object | null
) {
  let variationTableToRender;
  switch (partOfSpeechSubType) {
    case SUB_PARTS_OF_SPEECH.NEUTER:
    case SUB_PARTS_OF_SPEECH.MASCULINE:
    case SUB_PARTS_OF_SPEECH.FEMININE:
    case SUB_PARTS_OF_SPEECH.PLURAL_MASCULINE:
    case SUB_PARTS_OF_SPEECH.NON_MASCULINE:
      let nounVariation = variation as NounVariationProps;
      variationTableToRender = <NounVariation {...nounVariation}></NounVariation>;
      break;
    case SUB_PARTS_OF_SPEECH.CONJUGATION_I:
    case SUB_PARTS_OF_SPEECH.CONJUGATION_II:
    case SUB_PARTS_OF_SPEECH.CONJUGATION_III:
    case SUB_PARTS_OF_SPEECH.CONJUGATION_IV:
      let verbVariation = variation as VerbVariationProps;
      variationTableToRender = <VerbVariation {...verbVariation}></VerbVariation>;
      break;
    case SUB_PARTS_OF_SPEECH.INFLECTIV_ADJECTIVE:
    case SUB_PARTS_OF_SPEECH.UNINFLECTIV_ADJECTIVE:
      let adjectiveVariation = variation as AdjectiveVariationProps;
      variationTableToRender = <AdjectiveVariation {...adjectiveVariation}></AdjectiveVariation>;
      break;
    case SUB_PARTS_OF_SPEECH.INFLECTIV_NUMERAL:
    case SUB_PARTS_OF_SPEECH.UNINFLECTIV_NUMERAL:
      let numeralVariation = variation as NumeralVariationProps;
      variationTableToRender = <NumeralVariation {...numeralVariation}></NumeralVariation>;
      break;
    case SUB_PARTS_OF_SPEECH.NOUN_PRONOUN:
      let nounPronoun = variation as NounPronounVariationProps;
      variationTableToRender = <NounPronounVariation {...nounPronoun}></NounPronounVariation>;
      break;
    case SUB_PARTS_OF_SPEECH.ADJECTIVE_PRONOUN:
      let adjectivePronoun = variation as AdjectivePronounVariationProps;
      variationTableToRender = (
        <AdjectivePronounVariation {...adjectivePronoun}></AdjectivePronounVariation>
      );
      break;
    case SUB_PARTS_OF_SPEECH.ADVERB:
      let adverbPronoun = variation as AdverbVariationProps;
      variationTableToRender = <AdverbVariation {...adverbPronoun}></AdverbVariation>;
      break;
  }
  return variationTableToRender;
}

export default VariationModal;
