import { TextField } from '@mui/material';
import { useIntl } from 'react-intl';

export type ByCasesAllGenderTypesVariationProps = {
  firstPersonMasculine: string;
  firstPersonFeminine: string;
  firstPersonNeuter: string;
  firstPersonPluralMasculineFirst: string;
  firstPersonNonMasculineFirst: string;
  firstPersonPluralMasculineSecond: string;
  firstPersonNonMasculineSecond: string;
  secondPersonMasculine: string;
  secondPersonFeminine: string;
  secondPersonNeuter: string;
  secondPersonPluralMasculineSecond: string;
  secondPersonNonMasculineSecond: string;
  thirdPersonMasculine: string;
  thirdPersonFeminine: string;
  thirdPersonSingular: string;
  secondPersonPluralMasculineFirst: string;
  secondPersonNonMasculineFirst: string;
  thirdPersonPluralMasculine: string;
  thirdPersonNonMasculine: string;
};

const ByCasesAllGenderTypesVariation = (props: ByCasesAllGenderTypesVariationProps) => {
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
        value={props.firstPersonPluralMasculineSecond}
        placeholder={`${intl.formatMessage({ id: 'firstPersonPluralMasculineSecond' })}...`}
        label={intl.formatMessage({ id: 'firstPersonPluralMasculineSecond' })}
      />
      <TextField
        value={props.firstPersonNonMasculineSecond}
        placeholder={`${intl.formatMessage({ id: 'firstPersonNonMasculineSecond' })}...`}
        label={intl.formatMessage({ id: 'firstPersonNonMasculineSecond' })}
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
        value={props.thirdPersonSingular}
        placeholder={`${intl.formatMessage({ id: 'thirdPersonSingular' })}...`}
        label={intl.formatMessage({ id: 'thirdPersonSingular' })}
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

export default ByCasesAllGenderTypesVariation;
