import {
  activeAdjectivalParticipleVariations,
  adjectivePronounVariation,
  adjectiveVariation,
  archaicPastVariations,
  conditionalModeVariations,
  descriptivePresentVariations,
  futureComplexVariationsFirst,
  futureComplexVariationsSecond,
  futureSimpleVariations,
  gerundiumVariations,
  imperativeModeVariations,
  nounPronounVariation,
  nounVariation,
  numeralVariation,
  passiveAdjectiveParticipleVariationsFirst,
  passiveAdjectiveParticipleVariationsSecond,
  pastSecondVariations,
  pastVariations,
  prePastFirstVariations,
  prePastSecondVariations,
  prePastThirdVariations,
  presentVariations,
} from './tables';

export const getConjugationVartation = () => ({
  presentVariations: { ...presentVariations },
  pastVariations: { ...pastVariations },
  archaicPastVariations: { ...archaicPastVariations },
  descriptivePresentVariations: { ...descriptivePresentVariations },
  pastSecondVariations: { ...pastSecondVariations },
  prePastFirstVariations: { ...prePastFirstVariations },
  prePastSecondVariations: { ...prePastSecondVariations },
  prePastThirdVariations: { ...prePastThirdVariations },
  prePastImpersonal: '',
  futureSimpleVariations: { ...futureSimpleVariations },
  futureComplexVariationsFirst: { ...futureComplexVariationsFirst },
  futureComplexVariationsSecond: { ...futureComplexVariationsSecond },
  imperativeModeVariations: { ...imperativeModeVariations },
  conditionalModeVariations: { ...conditionalModeVariations },
  conditionalModeImpersonal: '',
  infinitive: '',
  aspectEquivalent: '',
  contemporaryAdverbialParticiple: '',
  priorAdverbialParticiple: '',
  gerundium: '',
  gerundiumGrammaticalType: 'PERFECT',
  gerundiumVariations: { ...gerundiumVariations },
  activeAdjectivalParticiple: '',
  activeAdjectivalParticipleVariations: { ...activeAdjectivalParticipleVariations },
  passiveAdjectiveParticipleFirst: '',
  passiveAdjectiveParticipleVariationsFirst: { ...passiveAdjectiveParticipleVariationsFirst },
  passiveAdjectiveParticipleSecond: '',
  passiveAdjectiveParticipleVariationsSecond: { ...passiveAdjectiveParticipleVariationsSecond },
});

export const getAdverbVariation = () => ({
  base: '',
  comparative: '',
  superlative: '',
});

export const getAdjectivePronounVariation = () => ({
  adjectivePronounVariation: { ...adjectivePronounVariation },
});

export const getNounPronounVariation = () => ({
  nounPronounVariation: { ...nounPronounVariation },
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
  adjectiveVariation: { ...adjectiveVariation },
  inAssemblies: '',
  base: '',
  comparative: '',
  superlative: '',
});
