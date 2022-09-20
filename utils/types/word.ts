import { GatheredMeaning, Meaning, PARTS_OF_SPEECH, SUB_PARTS_OF_SPEECH } from './';

type WordOfADay = {
  entryId: number;
  word: string;
  definitions: Array<string>;
};

type Word = {
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
  variation: any;
  word: string;
};

type GatheredWord = {
  id: number;
  note: string;
  word: string;
  normalizedWord: string;
  variation: any;
  base: {
    id: number;
    word: string;
    normalizedWord: string;
  };
  others: Array<{
    other: {
      id: number;
      normalizedWord: string;
      word: string;
    };
  }>;
  meanings: Array<Partial<GatheredMeaning>>;
  partOfSpeech: PARTS_OF_SPEECH;
  partOfSpeechSubType: SUB_PARTS_OF_SPEECH;
  priority: boolean;
};

export type { Word, GatheredWord, WordOfADay };
