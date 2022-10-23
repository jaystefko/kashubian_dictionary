import { TextField } from '@mui/material';

import { useIntl } from 'react-intl';

export type ByPersonsAllGenderTypesExtendedVariationProps = {
  firstPersonMasculine: string;
  firstPersonFeminine: string;
  firstPersonNeuter: string;
  firstPersonPluralMasculineFirst: string;
  firstPersonNonMasculineFirst: string;
  firstPersonPluralSecondMasculine: string;
  firstPersonPluralSecondNonMasculine: string;
  secondPersonMasculine: string;
  secondPersonFeminine: string;
  secondPersonNeuter: string;
  secondPersonPluralMasculineSecond: string;
  secondPersonNonMasculineSecond: string;
  secondPersonPluralMasculineFirst: string;
  secondPersonNonMasculineFirst: string;
  secondPersonPluralMasculineThird: string;
  secondPersonNonMasculineThird: string;
  thirdPersonMasculine: string;
  thirdPersonFeminine: string;
  thirdPersonNeuter: string;
  thirdPersonPluralMasculine: string;
  thirdPersonNonMasculine: string;
};

const ByPersonsAllGenderTypesExtendedVariation = (
  props: ByPersonsAllGenderTypesExtendedVariationProps
) => {
  const intl = useIntl();
  return (
    <div>
      <TextField
        value={props.firstPersonMasculine}
        placeholder={`${intl.formatMessage({ id: 'firstPersonMasculine' })}...`}
        label={intl.formatMessage({ id: 'firstPersonMasculine' })}
      />
      <TextField
        value={props.firstPersonFeminine}
        placeholder={`${intl.formatMessage({ id: 'firstPersonFeminine' })}...`}
        label={intl.formatMessage({ id: 'firstPersonFeminine' })}
      />
      <TextField
        value={props.firstPersonNeuter}
        placeholder={`${intl.formatMessage({ id: 'firstPersonNeuter' })}...`}
        label={intl.formatMessage({ id: 'firstPersonNeuter' })}
      />
      <TextField
        value={props.firstPersonPluralMasculineFirst}
        placeholder={`${intl.formatMessage({ id: 'firstPersonPluralMasculineFirst' })}...`}
        label={intl.formatMessage({ id: 'firstPersonPluralMasculineFirst' })}
      />
      <TextField
        value={props.firstPersonNonMasculineFirst}
        placeholder={`${intl.formatMessage({ id: 'firstPersonNonMasculineFirst' })}...`}
        label={intl.formatMessage({ id: 'firstPersonNonMasculineFirst' })}
      />
      <TextField
        value={props.firstPersonPluralSecondMasculine}
        placeholder={`${intl.formatMessage({ id: 'firstPersonPluralSecondMasculine' })}...`}
        label={intl.formatMessage({ id: 'firstPersonPluralSecondMasculine' })}
      />
      <TextField
        value={props.firstPersonPluralSecondNonMasculine}
        placeholder={`${intl.formatMessage({ id: 'firstPersonPluralSecondNonMasculine' })}...`}
        label={intl.formatMessage({ id: 'firstPersonPluralSecondNonMasculine' })}
      />
      <TextField
        value={props.secondPersonMasculine}
        placeholder={`${intl.formatMessage({ id: 'secondPersonMasculine' })}...`}
        label={intl.formatMessage({ id: 'secondPersonMasculine' })}
      />
      <TextField
        value={props.secondPersonFeminine}
        placeholder={`${intl.formatMessage({ id: 'secondPersonFeminine' })}...`}
        label={intl.formatMessage({ id: 'secondPersonFeminine' })}
      />
      <TextField
        value={props.secondPersonNeuter}
        placeholder={`${intl.formatMessage({ id: 'secondPersonNeuter' })}...`}
        label={intl.formatMessage({ id: 'secondPersonNeuter' })}
      />
      <TextField
        value={props.secondPersonPluralMasculineSecond}
        placeholder={`${intl.formatMessage({ id: 'secondPersonPluralMasculineSecond' })}...`}
        label={intl.formatMessage({ id: 'secondPersonPluralMasculineSecond' })}
      />
      <TextField
        value={props.secondPersonNonMasculineSecond}
        placeholder={`${intl.formatMessage({ id: 'secondPersonNonMasculineSecond' })}...`}
        label={intl.formatMessage({ id: 'secondPersonNonMasculineSecond' })}
      />
      <TextField
        value={props.secondPersonPluralMasculineFirst}
        placeholder={`${intl.formatMessage({ id: 'secondPersonPluralMasculineFirst' })}...`}
        label={intl.formatMessage({ id: 'secondPersonPluralMasculineFirst' })}
      />
      <TextField
        value={props.secondPersonNonMasculineFirst}
        placeholder={`${intl.formatMessage({ id: 'secondPersonNonMasculineFirst' })}...`}
        label={intl.formatMessage({ id: 'secondPersonNonMasculineFirst' })}
      />
      <TextField
        value={props.secondPersonPluralMasculineThird}
        placeholder={`${intl.formatMessage({ id: 'secondPersonPluralMasculineThird' })}...`}
        label={intl.formatMessage({ id: 'secondPersonPluralMasculineThird' })}
      />
      <TextField
        value={props.secondPersonNonMasculineThird}
        placeholder={`${intl.formatMessage({ id: 'secondPersonNonMasculineThird' })}...`}
        label={intl.formatMessage({ id: 'secondPersonNonMasculineThird' })}
      />
      <TextField
        value={props.thirdPersonMasculine}
        placeholder={`${intl.formatMessage({ id: 'thirdPersonMasculine' })}...`}
        label={intl.formatMessage({ id: 'thirdPersonMasculine' })}
      />
      <TextField
        value={props.thirdPersonFeminine}
        placeholder={`${intl.formatMessage({ id: 'thirdPersonFeminine' })}...`}
        label={intl.formatMessage({ id: 'thirdPersonFeminine' })}
      />
      <TextField
        value={props.thirdPersonNeuter}
        placeholder={`${intl.formatMessage({ id: 'thirdPersonNeuter' })}...`}
        label={intl.formatMessage({ id: 'thirdPersonNeuter' })}
      />
      <TextField
        value={props.thirdPersonPluralMasculine}
        placeholder={`${intl.formatMessage({ id: 'thirdPersonPluralMasculine' })}...`}
        label={intl.formatMessage({ id: 'thirdPersonPluralMasculine' })}
      />
      <TextField
        value={props.thirdPersonNonMasculine}
        placeholder={`${intl.formatMessage({ id: 'thirdPersonNonMasculine' })}...`}
        label={intl.formatMessage({ id: 'thirdPersonNonMasculine' })}
      />
    </div>
  );
};

export default ByPersonsAllGenderTypesExtendedVariation;
