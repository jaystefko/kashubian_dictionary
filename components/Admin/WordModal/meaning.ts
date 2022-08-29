export type MeaningCopy = {
  antonyms: undefined;
  definition: string; //
  examples: undefined;
  hyperonym: number;
  origin: string;
  phrasalVerbs: undefined;
  proverbs: undefined;
  quotes: undefined;
  synonyms: undefined;
  translationEN: string; //
  translationGE: string; //
  translationPL: string; //
  translationUK: string; //
};

const defaultMeaning = {
  antonyms: undefined,
  definition: '',
  examples: undefined,
  hyperonym: -1,
  origin: '',
  phrasalVerbs: undefined,
  proverbs: undefined,
  quotes: undefined,
  synonyms: undefined,
  translationEN: '',
  translationGE: '',
  translationPL: '',
  translationUK: '',
};

export default defaultMeaning;
