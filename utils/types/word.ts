import { GatheredMeaning, Meaning, PARTS_OF_SPEECH, SUB_PARTS_OF_SPEECH } from './';

type WordOfADay = {
  entryId: number;
  word: string;
  definitions: Array<string>;
};

type Word = {
  id: number;
  base: number;
  meanings: Array<Partial<Meaning>>;
  note: string;
  others: Array<{
    entryId: number;
    note: string;
  }>;
  partOfSpeech: PARTS_OF_SPEECH;
  partOfSpeechSubType: SUB_PARTS_OF_SPEECH;
  priority: boolean;
  variation:
    | {
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
      }
    | null
    | undefined;
  word: string;
};

type GatheredWord = {
  id: number;
  base: {
    id: number;
    word: string;
    normalizedWord: string;
  };
  meanings: Array<Partial<GatheredMeaning>>;
  note: string;
  others: Array<{
    other: {
      id: number;
      normalizedWord: string;
      word: string;
    };
  }>;
  partOfSpeech: PARTS_OF_SPEECH;
  partOfSpeechSubType: SUB_PARTS_OF_SPEECH;
  priority: boolean;
  variation: [
    {
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
    }
  ];
  word: string;
};

export type { Word, GatheredWord, WordOfADay };
