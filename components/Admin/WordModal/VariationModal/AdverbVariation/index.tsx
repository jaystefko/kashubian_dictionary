import { TextField } from '@mui/material';
import { useIntl } from 'react-intl';

export type AdverbVariationProps = {
  base: string;
  comparative: string;
  superlative: string;
};

const AdverbVariation = (props: AdverbVariationProps) => {
  const intl = useIntl();
  return (
    <div>
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

export default AdverbVariation;
