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
  meanings: [
    {
      antonyms: Array<{
        meaningId: number;
        note: string;
      }>;
      base: number;
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
  CONJUGATION_II = 'CONJUGATION_II',
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

enum ToastFunction {
  ERROR = 'error',
  INFO = 'info',
  WARN = 'warn',
}

export { PartOfSpeech, PartOfSpeechSubType, ToastFunction };
export type { Word, BasicAuth, WordOfADay };
