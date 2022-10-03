interface MeaningOG {
  translation: {
    english: string;
    german: string;
    polish: string;
    ukrainian: string;
  };
  definition: string;
  origin?: string;
  examples?: Array<{
    example: string;
    note?: string;
  }>;
  phrasalVerbs?: Array<{
    note?: string;
    phrasalVerb: string;
  }>;
  proverbs?: Array<{
    note?: string;
    proverb: string;
  }>;
  quotes?: Array<{
    note?: string;
    quote: string;
  }>;
}

interface Meaning extends MeaningOG {
  antonyms?: Array<{
    meaningId: number;
    note?: string;
  }>;
  hyperonym?: number;
  synonyms?: Array<{
    meaningId: number;
    note?: string;
  }>;
}

interface GatheredMeaning extends MeaningOG {
  antonyms?: Array<{
    id: number;
    antonym: {
      definition: string;
    };
  }>;
  hyperonym?: {
    id: number;
    definition: string;
  };
  synonyms?: Array<{
    id: number;
    synonym: {
      definition: string;
    };
  }>;
}

export type { Meaning, GatheredMeaning };
