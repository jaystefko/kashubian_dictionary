import ByCasesAllGenderTypesVariation, {
  ByCasesAllGenderTypesVariationProps,
} from '../ByCasesAllGenderTypesVariation';
import { MenuItem, Select, TextField } from '@mui/material';

import { useIntl } from 'react-intl';
import ByPersonsVariation, { ByPersonsVariationProps } from '../ByPersonsVariation';
import ByPersonsAllGenderTypesExtendedVariation, {
  ByPersonsAllGenderTypesExtendedVariationProps,
} from '../ByPersonsAllGenderTypesExtendedVariation';
import ByPersonsAllGenderTypesVariation, {
  ByPersonsAllGenderTypesVariationProps,
} from '../ByPersonsAllGenderTypesVariation';
import ByCasesVariation, { ByCasesVariationProps } from '../ByCasesVariation';

export type VerbVariationProps = {
  presentVariations: ByPersonsVariationProps;
  pastVariations: ByPersonsAllGenderTypesExtendedVariationProps;
  archaicPastVariations: ByPersonsAllGenderTypesExtendedVariationProps;
  descriptivePresentVariations: ByPersonsAllGenderTypesVariationProps;
  pastSecondVariations: ByPersonsAllGenderTypesExtendedVariationProps;
  prePastFirstVariations: ByPersonsAllGenderTypesExtendedVariationProps;
  prePastSecondVariations: ByPersonsAllGenderTypesExtendedVariationProps;
  prePastThirdVariations: ByPersonsAllGenderTypesExtendedVariationProps;
  prePastImpersonal: string;
  futureSimpleVariations: ByPersonsAllGenderTypesVariationProps;
  futureComplexVariationsFirst: ByPersonsAllGenderTypesExtendedVariationProps;
  futureComplexVariationsSecond: ByPersonsAllGenderTypesExtendedVariationProps;
  imperativeModeVariations: ByPersonsVariationProps;
  conditionalModeVariations: ByPersonsAllGenderTypesExtendedVariationProps;
  conditionalModeImpersonal: string;
  infinitive: string;
  aspectEquivalent: string;
  contemporaryAdverbialParticiple: string;
  priorAdverbialParticiple: string;
  gerundium: string;
  gerundiumGrammaticalType: string;
  gerundiumVariations: ByCasesVariationProps;
  activeAdjectivalParticiple: string;
  activeAdjectivalParticipleVariations: ByCasesAllGenderTypesVariationProps;
  passiveAdjectiveParticipleFirst: string;
  passiveAdjectiveParticipleVariationsFirst: ByCasesAllGenderTypesVariationProps;
  passiveAdjectiveParticipleSecond: string;
  passiveAdjectiveParticipleVariationsSecond: ByCasesAllGenderTypesVariationProps;
};

const VerbVariation = (props: VerbVariationProps) => {
  const intl = useIntl();
  return (
    <div>
      <ByPersonsVariation {...props.presentVariations}></ByPersonsVariation>
      <ByPersonsAllGenderTypesExtendedVariation
        {...props.pastVariations}
      ></ByPersonsAllGenderTypesExtendedVariation>
      <ByPersonsAllGenderTypesExtendedVariation
        {...props.archaicPastVariations}
      ></ByPersonsAllGenderTypesExtendedVariation>
      <ByPersonsAllGenderTypesVariation
        {...props.descriptivePresentVariations}
      ></ByPersonsAllGenderTypesVariation>
      <ByPersonsAllGenderTypesExtendedVariation
        {...props.pastSecondVariations}
      ></ByPersonsAllGenderTypesExtendedVariation>
      <ByPersonsAllGenderTypesExtendedVariation
        {...props.prePastFirstVariations}
      ></ByPersonsAllGenderTypesExtendedVariation>
      <ByPersonsAllGenderTypesExtendedVariation
        {...props.prePastSecondVariations}
      ></ByPersonsAllGenderTypesExtendedVariation>
      <ByPersonsAllGenderTypesExtendedVariation
        {...props.prePastThirdVariations}
      ></ByPersonsAllGenderTypesExtendedVariation>
      <TextField
        value={props.prePastImpersonal}
        placeholder={`${intl.formatMessage({ id: 'prePastImpersonal' })}...`}
        label={intl.formatMessage({ id: 'prePastImpersonal' })}
      />
      <ByPersonsAllGenderTypesVariation
        {...props.futureSimpleVariations}
      ></ByPersonsAllGenderTypesVariation>
      <ByPersonsAllGenderTypesExtendedVariation
        {...props.futureComplexVariationsFirst}
      ></ByPersonsAllGenderTypesExtendedVariation>
      <ByPersonsAllGenderTypesExtendedVariation
        {...props.futureComplexVariationsSecond}
      ></ByPersonsAllGenderTypesExtendedVariation>
      <ByPersonsVariation {...props.imperativeModeVariations}></ByPersonsVariation>
      <ByPersonsAllGenderTypesExtendedVariation
        {...props.conditionalModeVariations}
      ></ByPersonsAllGenderTypesExtendedVariation>
      <TextField
        value={props.conditionalModeImpersonal}
        placeholder={`${intl.formatMessage({ id: 'conditionalModeImpersonal' })}...`}
        label={intl.formatMessage({ id: 'conditionalModeImpersonal' })}
      />
      <TextField
        value={props.infinitive}
        placeholder={`${intl.formatMessage({ id: 'infinitive' })}...`}
        label={intl.formatMessage({ id: 'infinitive' })}
      />
      <TextField
        value={props.aspectEquivalent}
        placeholder={`${intl.formatMessage({ id: 'aspectEquivalent' })}...`}
        label={intl.formatMessage({ id: 'aspectEquivalent' })}
      />
      <TextField
        value={props.contemporaryAdverbialParticiple}
        placeholder={`${intl.formatMessage({ id: 'contemporaryAdverbialParticiple' })}...`}
        label={intl.formatMessage({ id: 'contemporaryAdverbialParticiple' })}
      />
      <TextField
        value={props.priorAdverbialParticiple}
        placeholder={`${intl.formatMessage({ id: 'priorAdverbialParticiple' })}...`}
        label={intl.formatMessage({ id: 'priorAdverbialParticiple' })}
      />
      <TextField
        value={props.gerundium}
        placeholder={`${intl.formatMessage({ id: 'gerundium' })}...`}
        label={intl.formatMessage({ id: 'gerundium' })}
      />
      <Select
        fullWidth
        value={props.gerundiumGrammaticalType}
        label={intl.formatMessage({ id: 'gerundiumGrammaticalType' })}
      >
        <MenuItem value={'PERFECT'}>{intl.formatMessage({ id: 'PERFECT' })}</MenuItem>
        <MenuItem value={'IMPERFECTIVE'}>{intl.formatMessage({ id: 'IMPERFECTIVE' })}</MenuItem>
      </Select>
      <ByCasesVariation {...props.gerundiumVariations}></ByCasesVariation>
      <TextField
        value={props.activeAdjectivalParticiple}
        placeholder={`${intl.formatMessage({ id: 'activeAdjectivalParticiple' })}...`}
        label={intl.formatMessage({ id: 'activeAdjectivalParticiple' })}
      />
      <ByCasesAllGenderTypesVariation
        {...props.activeAdjectivalParticipleVariations}
      ></ByCasesAllGenderTypesVariation>
      <TextField
        value={props.passiveAdjectiveParticipleFirst}
        placeholder={`${intl.formatMessage({ id: 'passiveAdjectiveParticipleFirst' })}...`}
        label={intl.formatMessage({ id: 'passiveAdjectiveParticipleFirst' })}
      />
      <ByCasesAllGenderTypesVariation
        {...props.passiveAdjectiveParticipleVariationsFirst}
      ></ByCasesAllGenderTypesVariation>
      <TextField
        value={props.passiveAdjectiveParticipleSecond}
        placeholder={`${intl.formatMessage({ id: 'passiveAdjectiveParticipleSecond' })}...`}
        label={intl.formatMessage({ id: 'passiveAdjectiveParticipleSecond' })}
      />
      <ByCasesAllGenderTypesVariation
        {...props.passiveAdjectiveParticipleVariationsSecond}
      ></ByCasesAllGenderTypesVariation>
    </div>
  );
};

export default VerbVariation;
