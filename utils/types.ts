import {
  AdjectiveVariation,
  ConjugationVartation,
  NounVariation,
  NumeralVariation,
} from './variations';

type BasicAuth = {
  username: string;
  password: string;
};

type WordOfADay = {
  entryId: number;
  word: string;
  definitions: Array<string>;
};

type Word = {
  id: number;
  base: number;
  meanings: [
    {
      antonyms: Array<{
        meaningId: number;
        note: string;
      }>;
      definition: string;
      examples: Array<{
        example: string;
        note: string;
      }>;
      hyperonym: number;
      origin: string;
      phrasalVerbs: Array<{
        note: string;
        phrasalVerb: string;
      }>;
      proverbs: Array<{
        note: string;
        proverb: string;
      }>;
      quotes: Array<{
        note: string;
        quote: string;
      }>;
      synonyms: Array<{
        meaningId: number;
        note: string;
      }>;
      translation: {
        english: string;
        german: string;
        polish: string;
        ukrainian: string;
      };
    }
  ];
  note: string;
  others: Array<{
    entryId: number;
    note: string;
  }>;
  partOfSpeech: PartOfSpeech;
  partOfSpeechSubType: PartOfSpeechSubType;
  priority: boolean;
  variation: {
    variation: {
      nounVariation: {
        accusative: string;
        accusativePlural: string;
        dative: string;
        dativePlural: string;
        genitive: string;
        genitivePlural: string;
        instrumental: string;
        instrumentalPlural: string;
        locative: string;
        locativePlural: string;
        nominative: string;
        nominativePlural: string;
        vocative: string;
        vocativePlural: string;
      };
    };
  };
  word: string;
};

enum PartOfSpeech {
  ADJECTIVE = 'ADJECTIVE',
  ADVERB = 'ADVERB',
  CONJUNCTION = 'CONJUNCTION',
  INTERJECTION = 'INTERJECTION',
  NOUN = 'NOUN',
  NUMERAL = 'NUMERAL',
  PARTICIPLE = 'PARTICIPLE',
  PREPOSITION = 'PREPOSITION',
  PRONOUN = 'PRONOUN',
  VERB = 'VERB',
}

enum PartOfSpeechSubType {
  ADJECTIVE_PRONOUN = 'ADJECTIVE_PRONOUN',
  ADVERB = 'ADVERB',
  ADVERB_PRONOUN = 'ADVERB_PRONOUN',
  CONJUGATION_I = 'CONJUGATION_I',
  CONJUGATION_II = 'CONJUGATIOCONJUGATION_IIN_II',
  CONJUGATION_III = 'CONJUGATION_III',
  CONJUGATION_IV = 'CONJUGATION_IV',
  CONJUNCTION = 'CONJUNCTION',
  FEMININE = 'FEMININE',
  INFLECTIV_ADJECTIVE = 'INFLECTIV_ADJECTIVE',
  INFLECTIV_NUMERAL = 'INFLECTIV_NUMERAL',
  INTERJECTION = 'INTERJECTION',
  MASCULINE = 'MASCULINE',
  NEUTER = 'NEUTER',
  NON_MASCULINE = 'NON_MASCULINE',
  NOUN_PRONOUN = 'NOUN_PRONOUN',
  NUMERAL_PRONOUN = 'NUMERAL_PRONOUN',
  PARTICIPLE = 'PARTICIPLE',
  PLURAL_MASCULINE = 'PLURAL_MASCULINE',
  PREPOSITION = 'PREPOSITION',
  UNINFLECTIV_ADJECTIVE = 'UNINFLECTIV_ADJECTIVE',
  UNINFLECTIV_NUMERAL = 'UNINFLECTIV_NUMERAL',
}

const variationPerSubPart = {
  [PartOfSpeechSubType.ADJECTIVE_PRONOUN]: {
    adjectivePronounVariation: {
      nominativeMasculine: '',
      nominativeFeminine: '',
      nominativeNeuter: '',
      genitiveMasculine: '',
      genitiveFeminine: '',
      genitiveNeuter: '',
      dativeMasculine: '',
      dativeFeminine: '',
      dativeNeuter: '',
      accusativeMasculine: '',
      accusativeFeminine: '',
      accusativeNeuter: '',
      instrumentalMasculine: '',
      instrumentalFeminine: '',
      instrumentalNeuter: '',
      locativeMasculine: '',
      locativeFeminine: '',
      locativeNeuter: '',
      vocativeMasculine: '',
      vocativeFeminine: '',
      vocativeNeuter: '',
      nominativePluralMasculine: '',
      nominativeNonMasculine: '',
      genitivePluralMasculine: '',
      genitiveNonMasculine: '',
      dativePluralMasculine: '',
      dativeNonMasculine: '',
      accusativePluralMasculine: '',
      accusativeNonMasculine: '',
      instrumentalPluralMasculine: '',
      instrumentalNonMasculine: '',
      locativePluralMasculine: '',
      locativeNonMasculine: '',
      vocativePluralMasculine: '',
      vocativeNonMasculine: '',
    },
  },
  [PartOfSpeechSubType.ADVERB]: {
    base: '',
    comparative: '',
    superlative: '',
  },
  [PartOfSpeechSubType.ADVERB_PRONOUN]: {},
  [PartOfSpeechSubType.CONJUGATION_I]: ConjugationVartation,
  [PartOfSpeechSubType.CONJUGATION_II]: ConjugationVartation,
  [PartOfSpeechSubType.CONJUGATION_III]: ConjugationVartation,
  [PartOfSpeechSubType.CONJUGATION_IV]: ConjugationVartation,
  [PartOfSpeechSubType.CONJUNCTION]: {},
  [PartOfSpeechSubType.FEMININE]: NounVariation,
  [PartOfSpeechSubType.INFLECTIV_ADJECTIVE]: AdjectiveVariation,
  [PartOfSpeechSubType.INFLECTIV_NUMERAL]: NumeralVariation,
  [PartOfSpeechSubType.INTERJECTION]: {},
  [PartOfSpeechSubType.MASCULINE]: NounVariation,
  [PartOfSpeechSubType.NEUTER]: NounVariation,
  [PartOfSpeechSubType.NON_MASCULINE]: NounVariation,
  [PartOfSpeechSubType.NOUN_PRONOUN]: {
    nounPronounVariation: {
      nominative: '',
      genitive: '',
      dative: '',
      accusative: '',
      instrumental: '',
      locative: '',
      vocative: '',
      nominativePlural: '',
      genitivePlural: '',
      dativePlural: '',
      accusativePlural: '',
      instrumentalPlural: '',
      locativePlural: '',
      vocativePlural: '',
    },
  },
  [PartOfSpeechSubType.NUMERAL_PRONOUN]: {},
  [PartOfSpeechSubType.PARTICIPLE]: {},
  [PartOfSpeechSubType.PLURAL_MASCULINE]: NounVariation,
  [PartOfSpeechSubType.PREPOSITION]: {},
  [PartOfSpeechSubType.UNINFLECTIV_ADJECTIVE]: AdjectiveVariation,
  [PartOfSpeechSubType.UNINFLECTIV_NUMERAL]: NumeralVariation,
};

enum ToastFunction {
  ERROR = 'error',
  INFO = 'info',
  WARN = 'warn',
}

const subPartPerPart = {
  [PartOfSpeech.NOUN]: [
    PartOfSpeechSubType.NEUTER,
    PartOfSpeechSubType.MASCULINE,
    PartOfSpeechSubType.FEMININE,
    PartOfSpeechSubType.PLURAL_MASCULINE,
    PartOfSpeechSubType.NON_MASCULINE,
  ],
  [PartOfSpeech.VERB]: [
    PartOfSpeechSubType.CONJUGATION_I,
    PartOfSpeechSubType.CONJUGATION_II,
    PartOfSpeechSubType.CONJUGATION_III,
    PartOfSpeechSubType.CONJUGATION_IV,
  ],
  [PartOfSpeech.ADJECTIVE]: [
    PartOfSpeechSubType.INFLECTIV_ADJECTIVE,
    PartOfSpeechSubType.UNINFLECTIV_ADJECTIVE,
  ],
  [PartOfSpeech.NUMERAL]: [
    PartOfSpeechSubType.INFLECTIV_NUMERAL,
    PartOfSpeechSubType.UNINFLECTIV_NUMERAL,
  ],
  [PartOfSpeech.PRONOUN]: [
    PartOfSpeechSubType.NOUN_PRONOUN,
    PartOfSpeechSubType.ADJECTIVE_PRONOUN,
    PartOfSpeechSubType.NUMERAL_PRONOUN,
    PartOfSpeechSubType.ADVERB_PRONOUN,
  ],
  [PartOfSpeech.ADVERB]: [PartOfSpeechSubType.ADVERB],
  [PartOfSpeech.PREPOSITION]: [PartOfSpeechSubType.PREPOSITION],
  [PartOfSpeech.CONJUNCTION]: [PartOfSpeechSubType.CONJUNCTION],
  [PartOfSpeech.INTERJECTION]: [PartOfSpeechSubType.INTERJECTION],
  [PartOfSpeech.PARTICIPLE]: [PartOfSpeechSubType.PARTICIPLE],
};

enum COLORS {
  YELLOW = '#fdcd01',
  GRAY = '#404040',
  BLACK01 = 'rgba(0, 0, 0, 0.1)',
  BLACK03 = 'rgba(0, 0, 0, 0.3)',
}

export {
  PartOfSpeech,
  PartOfSpeechSubType,
  ToastFunction,
  COLORS,
  subPartPerPart,
  variationPerSubPart,
};
export type { Word, BasicAuth, WordOfADay };
