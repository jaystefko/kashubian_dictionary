import {
  descriptivePresentVariations,
  gerundiumVariations,
  nounVariation,
  numeralVariation,
  pastVariations,
  presentVariations,
} from './tables';

export const getConjugationVartation = () => ({
  presentVariations: { ...presentVariations },
  pastVariations: { ...pastVariations },
  archaicPastVariations: { ...pastVariations },
  descriptivePresentVariations: { ...descriptivePresentVariations },
  pastSecondVariations: { ...pastVariations },
  prePastFirstVariations: { ...pastVariations },
  prePastSecondVariations: { ...pastVariations },
  prePastThirdVariations: { ...pastVariations },
  prePastImpersonal: '',
  futureSimpleVariations: { ...descriptivePresentVariations },
  futureComplexVariationsFirst: { ...pastVariations },
  futureComplexVariationsSecond: { ...pastVariations },
  imperativeModeVariations: { ...presentVariations },
  conditionalModeVariations: { ...pastVariations },
  conditionalModeImpersonal: '',
  infinitive: '',
  aspectEquivalent: '',
  contemporaryAdverbialParticiple: '',
  priorAdverbialParticiple: '',
  gerundium: '',
  gerundiumGrammaticalType: 'PERFECT',
  gerundiumVariations: { ...gerundiumVariations },
  activeAdjectivalParticiple: '',
  activeAdjectivalParticipleVariations: { ...numeralVariation },
  passiveAdjectiveParticipleFirst: '',
  passiveAdjectiveParticipleVariationsFirst: { ...numeralVariation },
  passiveAdjectiveParticipleSecond: '',
  passiveAdjectiveParticipleVariationsSecond: { ...numeralVariation },
});

export const getAdverbVariation = () => ({
  base: '',
  comparative: '',
  superlative: '',
});

export const getAdjectivePronounVariation = () => ({
  adjectivePronounVariation: { ...numeralVariation },
});

export const getNounPronounVariation = () => ({
  nounPronounVariation: { ...nounVariation },
});

export const getNounVariation = () => ({
  nounVariation: { ...nounVariation },
});

export const getNumeralVariation = () => ({
  numeralVariation: { ...numeralVariation },
  inAssemblies: '',
  base: '',
  comparative: '',
  superlative: '',
});

export const getAdjectiveVariation = () => ({
  adjectiveVariation: { ...numeralVariation },
  inAssemblies: '',
  base: '',
  comparative: '',
  superlative: '',
});
