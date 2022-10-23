import ByCasesAllGenderTypesVariation, {
  ByCasesAllGenderTypesVariationProps,
} from '../ByCasesAllGenderTypesVariation';
import { TextField } from '@mui/material';

import { useIntl } from 'react-intl';

export type NumeralVariationProps = {
  numeralVariation: ByCasesAllGenderTypesVariationProps;
  inAssemblies: string;
  base: string;
  comparative: string;
  superlative: string;
};

const NumeralVariation = (props: NumeralVariationProps) => {
  const intl = useIntl();
  return (
    <div>
      <ByCasesAllGenderTypesVariation {...props.numeralVariation}></ByCasesAllGenderTypesVariation>
      <TextField
        value={props.inAssemblies}
        placeholder={`${intl.formatMessage({ id: 'inAssemblies' })}...`}
        label={intl.formatMessage({ id: 'inAssemblies' })}
      />
      <TextField
        value={props.base}
        placeholder={`${intl.formatMessage({ id: 'base' })}...`}
        label={intl.formatMessage({ id: 'base' })}
      />
      <TextField
        value={props.comparative}
        placeholder={`${intl.formatMessage({ id: 'comparative' })}...`}
        label={intl.formatMessage({ id: 'comparative' })}
      />
      <TextField
        value={props.superlative}
        placeholder={`${intl.formatMessage({ id: 'superlative' })}...`}
        label={intl.formatMessage({ id: 'superlative' })}
      />
    </div>
  );
};

export default NumeralVariation;
