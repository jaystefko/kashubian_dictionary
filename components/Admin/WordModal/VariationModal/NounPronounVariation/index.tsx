import ByCasesVariation, { ByCasesVariationProps } from '../ByCasesVariation';

export type NounPronounVariationProps = {
  nounPronounVariation: ByCasesVariationProps;
};

const NounPronounVariation = (props: NounPronounVariationProps) => {
  return (
    <div>
      <ByCasesVariation {...props.nounPronounVariation}></ByCasesVariation>
    </div>
  );
};

export default NounPronounVariation;
