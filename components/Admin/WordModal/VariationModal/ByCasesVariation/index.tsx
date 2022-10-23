import { TextField } from '@mui/material';

import { useIntl } from 'react-intl';

export type ByCasesVariationProps = {
  nominative: string;
  nominativePlural: string;
  genitive: string;
  genitivePlural: string;
  dative: string;
  dativePlural: string;
  accusative: string;
  accusativePlural: string;
  instrumental: string;
  instrumentalPlural: string;
  locative: string;
  locativePlural: string;
  vocative: string;
  vocativePlural: string;
};

const ByCasesVariation = (props: ByCasesVariationProps) => {
  const intl = useIntl();
  return (
    <div>
      <TextField
        value={props.nominative}
        placeholder={`${intl.formatMessage({ id: 'nominative' })}...`}
        label={intl.formatMessage({ id: 'nominative' })}
      />
      <TextField
        value={props.nominativePlural}
        placeholder={`${intl.formatMessage({ id: 'nominativePlural' })}...`}
        label={intl.formatMessage({ id: 'nominativePlural' })}
      />
      <TextField
        value={props.genitive}
        placeholder={`${intl.formatMessage({ id: 'genitive' })}...`}
        label={intl.formatMessage({ id: 'genitive' })}
      />
      <TextField
        value={props.genitivePlural}
        placeholder={`${intl.formatMessage({ id: 'genitivePlural' })}...`}
        label={intl.formatMessage({ id: 'genitivePlural' })}
      />
      <TextField
        value={props.dative}
        placeholder={`${intl.formatMessage({ id: 'dative' })}...`}
        label={intl.formatMessage({ id: 'dative' })}
      />
      <TextField
        value={props.dativePlural}
        placeholder={`${intl.formatMessage({ id: 'dativePlural' })}...`}
        label={intl.formatMessage({ id: 'dativePlural' })}
      />
      <TextField
        value={props.accusative}
        placeholder={`${intl.formatMessage({ id: 'accusative' })}...`}
        label={intl.formatMessage({ id: 'accusative' })}
      />
      <TextField
        value={props.accusativePlural}
        placeholder={`${intl.formatMessage({ id: 'accusativePlural' })}...`}
        label={intl.formatMessage({ id: 'accusativePlural' })}
      />
      <TextField
        value={props.instrumental}
        placeholder={`${intl.formatMessage({ id: 'instrumental' })}...`}
        label={intl.formatMessage({ id: 'instrumental' })}
      />
      <TextField
        value={props.instrumentalPlural}
        placeholder={`${intl.formatMessage({ id: 'instrumentalPlural' })}...`}
        label={intl.formatMessage({ id: 'instrumentalPlural' })}
      />
      <TextField
        value={props.locative}
        placeholder={`${intl.formatMessage({ id: 'locative' })}...`}
        label={intl.formatMessage({ id: 'locative' })}
      />
      <TextField
        value={props.locativePlural}
        placeholder={`${intl.formatMessage({ id: 'locativePlural' })}...`}
        label={intl.formatMessage({ id: 'locativePlural' })}
      />
      <TextField
        value={props.vocative}
        placeholder={`${intl.formatMessage({ id: 'vocative' })}...`}
        label={intl.formatMessage({ id: 'vocative' })}
      />
      <TextField
        value={props.vocativePlural}
        placeholder={`${intl.formatMessage({ id: 'vocativePlural' })}...`}
        label={intl.formatMessage({ id: 'vocativePlural' })}
      />
    </div>
  );
};

export default ByCasesVariation;
