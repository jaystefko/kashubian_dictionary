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

type subPartPerPart = {
  [PartOfSpeech.NOUN]: [
    PartOfSpeechSubType.NEUTER,
    PartOfSpeechSubType.MASCULINE,
    PartOfSpeechSubType.FEMININE,
    PartOfSpeechSubType.PLURAL_MASCULINE,
    PartOfSpeechSubType.NON_MASCULINE
  ];
  [PartOfSpeech.VERB]: [
    PartOfSpeechSubType.CONJUGATION_I,
    PartOfSpeechSubType.CONJUGATION_II,
    PartOfSpeechSubType.CONJUGATION_III,
    PartOfSpeechSubType.CONJUGATION_IV
  ];
  [PartOfSpeech.ADJECTIVE]: [
    PartOfSpeechSubType.INFLECTIV_ADJECTIVE,
    PartOfSpeechSubType.UNINFLECTIV_ADJECTIVE
  ];
  [PartOfSpeech.NUMERAL]: [
    PartOfSpeechSubType.INFLECTIV_NUMERAL,
    PartOfSpeechSubType.UNINFLECTIV_NUMERAL
  ];
  [PartOfSpeech.PRONOUN]: [
    PartOfSpeechSubType.NOUN_PRONOUN,
    PartOfSpeechSubType.ADJECTIVE_PRONOUN,
    PartOfSpeechSubType.NUMERAL_PRONOUN,
    PartOfSpeechSubType.ADVERB_PRONOUN
  ];
  [PartOfSpeech.ADVERB]: [PartOfSpeechSubType.ADVERB];
  [PartOfSpeech.PREPOSITION]: [PartOfSpeechSubType.PREPOSITION];
  [PartOfSpeech.CONJUNCTION]: [PartOfSpeechSubType.CONJUNCTION];
  [PartOfSpeech.INTERJECTION]: [PartOfSpeechSubType.INTERJECTION];
  [PartOfSpeech.PARTICIPLE]: [PartOfSpeechSubType.PARTICIPLE];
};

type ConjugationVartation = {
  presentVariations: {
    firstPersonSingular: string;
    firstPersonPluralFirst: string;
    firstPersonPluralSecond: string;
    secondPersonSingular: string;
    secondPersonPluralFirst: string;
    secondPersonPluralSecond: string;
    thirdPersonSingular: string;
    thirdPersonPlural: string;
  };
  pastVariations: {
    firstPersonMasculine: string;
    firstPersonFeminine: string;
    firstPersonNeuter: string;
    firstPersonPluralMasculineFirst: string;
    firstPersonNonMasculineFirst: string;
    firstPersonPluralSecondMasculine: string;
    firstPersonPluralSecondNonMasculine: string;
    secondPersonMasculine: string;
    secondPersonFeminine: string;
    secondPersonNeuter: string;
    secondPersonPluralMasculineSecond: string;
    secondPersonNonMasculineSecond: string;
    secondPersonPluralMasculineFirst: string;
    secondPersonNonMasculineFirst: string;
    secondPersonPluralMasculineThird: string;
    secondPersonNonMasculineThird: string;
    thirdPersonMasculine: string;
    thirdPersonFeminine: string;
    thirdPersonNeuter: string;
    thirdPersonPluralMasculine: string;
    thirdPersonNonMasculine: string;
  };
  archaicPastVariations: {
    firstPersonMasculine: string;
    firstPersonFeminine: string;
    firstPersonNeuter: string;
    firstPersonPluralMasculineFirst: string;
    firstPersonNonMasculineFirst: string;
    firstPersonPluralSecondMasculine: string;
    firstPersonPluralSecondNonMasculine: string;
    secondPersonMasculine: string;
    secondPersonFeminine: string;
    secondPersonNeuter: string;
    secondPersonPluralMasculineSecond: string;
    secondPersonNonMasculineSecond: string;
    secondPersonPluralMasculineFirst: string;
    secondPersonNonMasculineFirst: string;
    secondPersonPluralMasculineThird: string;
    secondPersonNonMasculineThird: string;
    thirdPersonMasculine: string;
    thirdPersonFeminine: string;
    thirdPersonNeuter: string;
    thirdPersonPluralMasculine: string;
    thirdPersonNonMasculine: string;
  };
  descriptivePresentVariations: {
    firstPersonMasculine: string;
    firstPersonFeminine: string;
    firstPersonNeuter: string;
    firstPersonPluralMasculineFirst: string;
    firstPersonNonMasculineFirst: string;
    firstPersonPluralMasculineSecond: string;
    firstPersonNonMasculineSecond: string;
    secondPersonMasculine: string;
    secondPersonFeminine: string;
    secondPersonNeuter: string;
    secondPersonPluralMasculineSecond: string;
    secondPersonNonMasculineSecond: string;
    thirdPersonMasculine: string;
    thirdPersonFeminine: string;
    thirdPersonSingular: string;
    secondPersonPluralMasculineFirst: string;
    secondPersonNonMasculineFirst: string;
    thirdPersonPluralMasculine: string;
    thirdPersonNonMasculine: string;
  };
  pastSecondVariations: {
    firstPersonMasculine: string;
    firstPersonFeminine: string;
    firstPersonNeuter: string;
    firstPersonPluralMasculineFirst: string;
    firstPersonNonMasculineFirst: string;
    firstPersonPluralSecondMasculine: string;
    firstPersonPluralSecondNonMasculine: string;
    secondPersonMasculine: string;
    secondPersonFeminine: string;
    secondPersonNeuter: string;
    secondPersonPluralMasculineSecond: string;
    secondPersonNonMasculineSecond: string;
    secondPersonPluralMasculineFirst: string;
    secondPersonNonMasculineFirst: string;
    secondPersonPluralMasculineThird: string;
    secondPersonNonMasculineThird: string;
    thirdPersonMasculine: string;
    thirdPersonFeminine: string;
    thirdPersonNeuter: string;
    thirdPersonPluralMasculine: string;
    thirdPersonNonMasculine: string;
  };
  prePastFirstVariations: {
    firstPersonMasculine: string;
    firstPersonFeminine: string;
    firstPersonNeuter: string;
    firstPersonPluralMasculineFirst: string;
    firstPersonNonMasculineFirst: string;
    firstPersonPluralSecondMasculine: string;
    firstPersonPluralSecondNonMasculine: string;
    secondPersonMasculine: string;
    secondPersonFeminine: string;
    secondPersonNeuter: string;
    secondPersonPluralMasculineSecond: string;
    secondPersonNonMasculineSecond: string;
    secondPersonPluralMasculineFirst: string;
    secondPersonNonMasculineFirst: string;
    secondPersonPluralMasculineThird: string;
    secondPersonNonMasculineThird: string;
    thirdPersonMasculine: string;
    thirdPersonFeminine: string;
    thirdPersonNeuter: string;
    thirdPersonPluralMasculine: string;
    thirdPersonNonMasculine: string;
  };
  prePastSecondVariations: {
    firstPersonMasculine: string;
    firstPersonFeminine: string;
    firstPersonNeuter: string;
    firstPersonPluralMasculineFirst: string;
    firstPersonNonMasculineFirst: string;
    firstPersonPluralSecondMasculine: string;
    firstPersonPluralSecondNonMasculine: string;
    secondPersonMasculine: string;
    secondPersonFeminine: string;
    secondPersonNeuter: string;
    secondPersonPluralMasculineSecond: string;
    secondPersonNonMasculineSecond: string;
    secondPersonPluralMasculineFirst: string;
    secondPersonNonMasculineFirst: string;
    secondPersonPluralMasculineThird: string;
    secondPersonNonMasculineThird: string;
    thirdPersonMasculine: string;
    thirdPersonFeminine: string;
    thirdPersonNeuter: string;
    thirdPersonPluralMasculine: string;
    thirdPersonNonMasculine: string;
  };
  prePastThirdVariations: {
    firstPersonMasculine: string;
    firstPersonFeminine: string;
    firstPersonNeuter: string;
    firstPersonPluralMasculineFirst: string;
    firstPersonNonMasculineFirst: string;
    firstPersonPluralSecondMasculine: string;
    firstPersonPluralSecondNonMasculine: string;
    secondPersonMasculine: string;
    secondPersonFeminine: string;
    secondPersonNeuter: string;
    secondPersonPluralMasculineSecond: string;
    secondPersonNonMasculineSecond: string;
    secondPersonPluralMasculineFirst: string;
    secondPersonNonMasculineFirst: string;
    secondPersonPluralMasculineThird: string;
    secondPersonNonMasculineThird: string;
    thirdPersonMasculine: string;
    thirdPersonFeminine: string;
    thirdPersonNeuter: string;
    thirdPersonPluralMasculine: string;
    thirdPersonNonMasculine: string;
  };
  prePastImpersonal: string;
  futureSimpleVariations: {
    firstPersonMasculine: string;
    firstPersonFeminine: string;
    firstPersonNeuter: string;
    firstPersonPluralMasculineFirst: string;
    firstPersonNonMasculineFirst: string;
    firstPersonPluralMasculineSecond: string;
    firstPersonNonMasculineSecond: string;
    secondPersonMasculine: string;
    secondPersonFeminine: string;
    secondPersonNeuter: string;
    secondPersonPluralMasculineSecond: string;
    secondPersonNonMasculineSecond: string;
    thirdPersonMasculine: string;
    thirdPersonFeminine: string;
    thirdPersonSingular: string;
    secondPersonPluralMasculineFirst: string;
    secondPersonNonMasculineFirst: string;
    thirdPersonPluralMasculine: string;
    thirdPersonNonMasculine: string;
  };
  futureComplexVariationsFirst: {
    firstPersonMasculine: string;
    firstPersonFeminine: string;
    firstPersonNeuter: string;
    firstPersonPluralMasculineFirst: string;
    firstPersonNonMasculineFirst: string;
    firstPersonPluralSecondMasculine: string;
    firstPersonPluralSecondNonMasculine: string;
    secondPersonMasculine: string;
    secondPersonFeminine: string;
    secondPersonNeuter: string;
    secondPersonPluralMasculineSecond: string;
    secondPersonNonMasculineSecond: string;
    secondPersonPluralMasculineFirst: string;
    secondPersonNonMasculineFirst: string;
    secondPersonPluralMasculineThird: string;
    secondPersonNonMasculineThird: string;
    thirdPersonMasculine: string;
    thirdPersonFeminine: string;
    thirdPersonNeuter: string;
    thirdPersonPluralMasculine: string;
    thirdPersonNonMasculine: string;
  };
  futureComplexVariationsSecond: {
    firstPersonMasculine: string;
    firstPersonFeminine: string;
    firstPersonNeuter: string;
    firstPersonPluralMasculineFirst: string;
    firstPersonNonMasculineFirst: string;
    firstPersonPluralSecondMasculine: string;
    firstPersonPluralSecondNonMasculine: string;
    secondPersonMasculine: string;
    secondPersonFeminine: string;
    secondPersonNeuter: string;
    secondPersonPluralMasculineSecond: string;
    secondPersonNonMasculineSecond: string;
    secondPersonPluralMasculineFirst: string;
    secondPersonNonMasculineFirst: string;
    secondPersonPluralMasculineThird: string;
    secondPersonNonMasculineThird: string;
    thirdPersonMasculine: string;
    thirdPersonFeminine: string;
    thirdPersonNeuter: string;
    thirdPersonPluralMasculine: string;
    thirdPersonNonMasculine: string;
  };
  imperativeModeVariations: {
    firstPersonSingular: string;
    firstPersonPluralFirst: string;
    firstPersonPluralSecond: string;
    secondPersonSingular: string;
    secondPersonPluralFirst: string;
    secondPersonPluralSecond: string;
    thirdPersonSingular: string;
    thirdPersonPlural: string;
  };
  conditionalModeVariations: {
    firstPersonMasculine: string;
    firstPersonFeminine: string;
    firstPersonNeuter: string;
    firstPersonPluralMasculineFirst: string;
    firstPersonNonMasculineFirst: string;
    firstPersonPluralSecondMasculine: string;
    firstPersonPluralSecondNonMasculine: string;
    secondPersonMasculine: string;
    secondPersonFeminine: string;
    secondPersonNeuter: string;
    secondPersonPluralMasculineSecond: string;
    secondPersonNonMasculineSecond: string;
    secondPersonPluralMasculineFirst: string;
    secondPersonNonMasculineFirst: string;
    secondPersonPluralMasculineThird: string;
    secondPersonNonMasculineThird: string;
    thirdPersonMasculine: string;
    thirdPersonFeminine: string;
    thirdPersonNeuter: string;
    thirdPersonPluralMasculine: string;
    thirdPersonNonMasculine: string;
  };
  conditionalModeImpersonal: string;
  infinitive: string;
  aspectEquivalent: string;
  contemporaryAdverbialParticiple: string;
  priorAdverbialParticiple: string;
  gerundium: string;
  gerundiumGrammaticalType: string;
  gerundiumVariations: {
    nominative: string;
    genitive: string;
    dative: string;
    accusative: string;
    instrumental: string;
    locative: string;
    vocative: string;
    nominativePlural: string;
    genitivePlural: string;
    dativePlural: string;
    accusativePlural: string;
    instrumentalPlural: string;
    locativePlural: string;
    vocativePlural: string;
  };
  activeAdjectivalParticiple: string;
  activeAdjectivalParticipleVariations: {
    nominativeMasculine: string;
    nominativeFeminine: string;
    nominativeNeuter: string;
    genitiveMasculine: string;
    genitiveFeminine: string;
    genitiveNeuter: string;
    dativeMasculine: string;
    dativeFeminine: string;
    dativeNeuter: string;
    accusativeMasculine: string;
    accusativeFeminine: string;
    accusativeNeuter: string;
    instrumentalMasculine: string;
    instrumentalFeminine: string;
    instrumentalNeuter: string;
    locativeMasculine: string;
    locativeFeminine: string;
    locativeNeuter: string;
    vocativeMasculine: string;
    vocativeFeminine: string;
    vocativeNeuter: string;
    nominativePluralMasculine: string;
    nominativeNonMasculine: string;
    genitivePluralMasculine: string;
    genitiveNonMasculine: string;
    dativePluralMasculine: string;
    dativeNonMasculine: string;
    accusativePluralMasculine: string;
    accusativeNonMasculine: string;
    instrumentalPluralMasculine: string;
    instrumentalNonMasculine: string;
    locativePluralMasculine: string;
    locativeNonMasculine: string;
    vocativePluralMasculine: string;
    vocativeNonMasculine: string;
  };
  passiveAdjectiveParticipleFirst: string;
  passiveAdjectiveParticipleVariationsFirst: {
    nominativeMasculine: string;
    nominativeFeminine: string;
    nominativeNeuter: string;
    genitiveMasculine: string;
    genitiveFeminine: string;
    genitiveNeuter: string;
    dativeMasculine: string;
    dativeFeminine: string;
    dativeNeuter: string;
    accusativeMasculine: string;
    accusativeFeminine: string;
    accusativeNeuter: string;
    instrumentalMasculine: string;
    instrumentalFeminine: string;
    instrumentalNeuter: string;
    locativeMasculine: string;
    locativeFeminine: string;
    locativeNeuter: string;
    vocativeMasculine: string;
    vocativeFeminine: string;
    vocativeNeuter: string;
    nominativePluralMasculine: string;
    nominativeNonMasculine: string;
    genitivePluralMasculine: string;
    genitiveNonMasculine: string;
    dativePluralMasculine: string;
    dativeNonMasculine: string;
    accusativePluralMasculine: string;
    accusativeNonMasculine: string;
    instrumentalPluralMasculine: string;
    instrumentalNonMasculine: string;
    locativePluralMasculine: string;
    locativeNonMasculine: string;
    vocativePluralMasculine: string;
    vocativeNonMasculine: string;
  };
  passiveAdjectiveParticipleSecond: string;
  passiveAdjectiveParticipleVariationsSecond: {
    nominativeMasculine: string;
    nominativeFeminine: string;
    nominativeNeuter: string;
    genitiveMasculine: string;
    genitiveFeminine: string;
    genitiveNeuter: string;
    dativeMasculine: string;
    dativeFeminine: string;
    dativeNeuter: string;
    accusativeMasculine: string;
    accusativeFeminine: string;
    accusativeNeuter: string;
    instrumentalMasculine: string;
    instrumentalFeminine: string;
    instrumentalNeuter: string;
    locativeMasculine: string;
    locativeFeminine: string;
    locativeNeuter: string;
    vocativeMasculine: string;
    vocativeFeminine: string;
    vocativeNeuter: string;
    nominativePluralMasculine: string;
    nominativeNonMasculine: string;
    genitivePluralMasculine: string;
    genitiveNonMasculine: string;
    dativePluralMasculine: string;
    dativeNonMasculine: string;
    accusativePluralMasculine: string;
    accusativeNonMasculine: string;
    instrumentalPluralMasculine: string;
    instrumentalNonMasculine: string;
    locativePluralMasculine: string;
    locativeNonMasculine: string;
    vocativePluralMasculine: string;
    vocativeNonMasculine: string;
  };
};

type NounVariation = {
  nounVariation: {
    nominative: string;
    genitive: string;
    dative: string;
    accusative: string;
    instrumental: string;
    locative: string;
    vocative: string;
    nominativePlural: string;
    genitivePlural: string;
    dativePlural: string;
    accusativePlural: string;
    instrumentalPlural: string;
    locativePlural: string;
    vocativePlural: string;
  };
};

type NumeralVariation = {
  numeralVariation: {
    nominativeMasculine: string;
    nominativeFeminine: string;
    nominativeNeuter: string;
    genitiveMasculine: string;
    genitiveFeminine: string;
    genitiveNeuter: string;
    dativeMasculine: string;
    dativeFeminine: string;
    dativeNeuter: string;
    accusativeMasculine: string;
    accusativeFeminine: string;
    accusativeNeuter: string;
    instrumentalMasculine: string;
    instrumentalFeminine: string;
    instrumentalNeuter: string;
    locativeMasculine: string;
    locativeFeminine: string;
    locativeNeuter: string;
    vocativeMasculine: string;
    vocativeFeminine: string;
    vocativeNeuter: string;
    nominativePluralMasculine: string;
    nominativeNonMasculine: string;
    genitivePluralMasculine: string;
    genitiveNonMasculine: string;
    dativePluralMasculine: string;
    dativeNonMasculine: string;
    accusativePluralMasculine: string;
    accusativeNonMasculine: string;
    instrumentalPluralMasculine: string;
    instrumentalNonMasculine: string;
    locativePluralMasculine: string;
    locativeNonMasculine: string;
    vocativePluralMasculine: string;
    vocativeNonMasculine: string;
  };
  inAssemblies: string;
  base: string;
  comparative: string;
  superlative: string;
};

type AdjectiveVariation = {
  adjectiveVariation: {
    nominativeMasculine: string;
    nominativeFeminine: string;
    nominativeNeuter: string;
    genitiveMasculine: string;
    genitiveFeminine: string;
    genitiveNeuter: string;
    dativeMasculine: string;
    dativeFeminine: string;
    dativeNeuter: string;
    accusativeMasculine: string;
    accusativeFeminine: string;
    accusativeNeuter: string;
    instrumentalMasculine: string;
    instrumentalFeminine: string;
    instrumentalNeuter: string;
    locativeMasculine: string;
    locativeFeminine: string;
    locativeNeuter: string;
    vocativeMasculine: string;
    vocativeFeminine: string;
    vocativeNeuter: string;
    nominativePluralMasculine: string;
    nominativeNonMasculine: string;
    genitivePluralMasculine: string;
    genitiveNonMasculine: string;
    dativePluralMasculine: string;
    dativeNonMasculine: string;
    accusativePluralMasculine: string;
    accusativeNonMasculine: string;
    instrumentalPluralMasculine: string;
    instrumentalNonMasculine: string;
    locativePluralMasculine: string;
    locativeNonMasculine: string;
    vocativePluralMasculine: string;
    vocativeNonMasculine: string;
  };
  inAssemblies: string;
  base: string;
  comparative: string;
  superlative: string;
};

type variationPerSubPart = {
  [PartOfSpeechSubType.ADJECTIVE_PRONOUN]: {
    adjectivePronounVariation: {
      nominativeMasculine: string;
      nominativeFeminine: string;
      nominativeNeuter: string;
      genitiveMasculine: string;
      genitiveFeminine: string;
      genitiveNeuter: string;
      dativeMasculine: string;
      dativeFeminine: string;
      dativeNeuter: string;
      accusativeMasculine: string;
      accusativeFeminine: string;
      accusativeNeuter: string;
      instrumentalMasculine: string;
      instrumentalFeminine: string;
      instrumentalNeuter: string;
      locativeMasculine: string;
      locativeFeminine: string;
      locativeNeuter: string;
      vocativeMasculine: string;
      vocativeFeminine: string;
      vocativeNeuter: string;
      nominativePluralMasculine: string;
      nominativeNonMasculine: string;
      genitivePluralMasculine: string;
      genitiveNonMasculine: string;
      dativePluralMasculine: string;
      dativeNonMasculine: string;
      accusativePluralMasculine: string;
      accusativeNonMasculine: string;
      instrumentalPluralMasculine: string;
      instrumentalNonMasculine: string;
      locativePluralMasculine: string;
      locativeNonMasculine: string;
      vocativePluralMasculine: string;
      vocativeNonMasculine: string;
    };
  };
  [PartOfSpeechSubType.ADVERB]: {
    base: string;
    comparative: string;
    superlative: string;
  };
  [PartOfSpeechSubType.ADVERB_PRONOUN]: {};
  [PartOfSpeechSubType.CONJUGATION_I]: ConjugationVartation;
  [PartOfSpeechSubType.CONJUGATION_II]: ConjugationVartation;
  [PartOfSpeechSubType.CONJUGATION_III]: ConjugationVartation;
  [PartOfSpeechSubType.CONJUGATION_IV]: ConjugationVartation;
  [PartOfSpeechSubType.CONJUNCTION]: {};
  [PartOfSpeechSubType.FEMININE]: NounVariation;
  [PartOfSpeechSubType.INFLECTIV_ADJECTIVE]: AdjectiveVariation;
  [PartOfSpeechSubType.INFLECTIV_NUMERAL]: NumeralVariation;
  [PartOfSpeechSubType.INTERJECTION]: {};
  [PartOfSpeechSubType.MASCULINE]: NounVariation;
  [PartOfSpeechSubType.NEUTER]: NounVariation;
  [PartOfSpeechSubType.NON_MASCULINE]: NounVariation;
  [PartOfSpeechSubType.NOUN_PRONOUN]: {
    nounPronounVariation: {
      nominative: string;
      genitive: string;
      dative: string;
      accusative: string;
      instrumental: string;
      locative: string;
      vocative: string;
      nominativePlural: string;
      genitivePlural: string;
      dativePlural: string;
      accusativePlural: string;
      instrumentalPlural: string;
      locativePlural: string;
      vocativePlural: string;
    };
  };
  [PartOfSpeechSubType.NUMERAL_PRONOUN]: {};
  [PartOfSpeechSubType.PARTICIPLE]: {};
  [PartOfSpeechSubType.PLURAL_MASCULINE]: NounVariation;
  [PartOfSpeechSubType.PREPOSITION]: {};
  [PartOfSpeechSubType.UNINFLECTIV_ADJECTIVE]: AdjectiveVariation;
  [PartOfSpeechSubType.UNINFLECTIV_NUMERAL]: NumeralVariation;
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

enum ToastFunction {
  ERROR = 'error',
  INFO = 'info',
  WARN = 'warn',
}

export { PartOfSpeech, PartOfSpeechSubType, ToastFunction };
export type { Word, BasicAuth, WordOfADay, subPartPerPart, variationPerSubPart };
