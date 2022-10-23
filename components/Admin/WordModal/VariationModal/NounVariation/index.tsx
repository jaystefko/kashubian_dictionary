import ByCasesVariation, { ByCasesVariationProps } from '../ByCasesVariation';

export type NounVariationProps = {
  nounVariation: ByCasesVariationProps;
};

const NounVariation = (props: NounVariationProps) => {
  return <ByCasesVariation {...props.nounVariation}></ByCasesVariation>;
};

export default NounVariation;
