import ByCasesAllGenderTypesVariation, {
  ByCasesAllGenderTypesVariationProps,
} from '../ByCasesAllGenderTypesVariation';

export type AdjectivePronounVariationProps = {
  adjectivePronounVariation: ByCasesAllGenderTypesVariationProps;
};

const AdjectivePronounVariation = (props: AdjectivePronounVariationProps) => {
  return (
    <div>
      <ByCasesAllGenderTypesVariation
        {...props.adjectivePronounVariation}
      ></ByCasesAllGenderTypesVariation>
    </div>
  );
};

export default AdjectivePronounVariation;
