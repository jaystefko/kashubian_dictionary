import { TextField } from '@mui/material';

import { useIntl } from 'react-intl';

export type ByPersonsVariationProps = {
  firstPersonSingular: string;
  firstPersonPluralFirst: string;
  firstPersonPluralSecond: string;
  secondPersonSingular: string;
  secondPersonPluralFirst: string;
  secondPersonPluralSecond: string;
  thirdPersonSingular: string;
  thirdPersonPlural: string;
};

const ByPersonsVariation = (props: ByPersonsVariationProps) => {
  const intl = useIntl();
  return (
    <div>
      <TextField
        value={props.firstPersonSingular}
        placeholder={`${intl.formatMessage({ id: 'firstPersonSingular' })}...`}
        label={intl.formatMessage({ id: 'firstPersonSingular' })}
      />
      <TextField
        value={props.firstPersonPluralFirst}
        placeholder={`${intl.formatMessage({ id: 'firstPersonPluralFirst' })}...`}
        label={intl.formatMessage({ id: 'firstPersonPluralFirst' })}
      />
      <TextField
        value={props.firstPersonPluralSecond}
        placeholder={`${intl.formatMessage({ id: 'firstPersonPluralSecond' })}...`}
        label={intl.formatMessage({ id: 'firstPersonPluralSecond' })}
      />
      <TextField
        value={props.secondPersonSingular}
        placeholder={`${intl.formatMessage({ id: 'secondPersonSingular' })}...`}
        label={intl.formatMessage({ id: 'secondPersonSingular' })}
      />
      <TextField
        value={props.secondPersonPluralFirst}
        placeholder={`${intl.formatMessage({ id: 'secondPersonPluralFirst' })}...`}
        label={intl.formatMessage({ id: 'secondPersonPluralFirst' })}
      />
      <TextField
        value={props.secondPersonPluralSecond}
        placeholder={`${intl.formatMessage({ id: 'secondPersonPluralSecond' })}...`}
        label={intl.formatMessage({ id: 'secondPersonPluralSecond' })}
      />
      <TextField
        value={props.thirdPersonSingular}
        placeholder={`${intl.formatMessage({ id: 'thirdPersonSingular' })}...`}
        label={intl.formatMessage({ id: 'thirdPersonSingular' })}
      />
      <TextField
        value={props.thirdPersonPlural}
        placeholder={`${intl.formatMessage({ id: 'thirdPersonPlural' })}...`}
        label={intl.formatMessage({ id: 'thirdPersonPlural' })}
      />
    </div>
  );
};

export default ByPersonsVariation;
