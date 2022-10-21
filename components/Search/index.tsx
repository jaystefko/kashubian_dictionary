import { FormControlLabel, FormGroup, Switch } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import AC from '../Autocomplete';

type Option = {
  id: number;
  word: string;
  normalizedWord: string;
};

const Search = () => {
  const router = useRouter();
  const intl = useIntl();
  const [isChecked, setIsChecked] = useState(false);
  const [value, setValue] = useState<Option | null>(null);

  useEffect(() => {
    if (value) {
      router.push(`/word/${value.id}`);
    }
  }, [value]); // eslint-disable-line

  return (
    <section style={{ width: '100%' }}>
      <AC
        isFullWidth
        label={intl.formatMessage({ id: 'searchMainPage' })}
        placeholder={`${intl.formatMessage({ id: 'searchMainPage' })}...`}
        onChangeSingle={setValue}
        value={null}
        isKashebian={isChecked}
        isColorFlipped
      />
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={isChecked}
              color='warning'
              onChange={setIsChecked.bind(this, !isChecked)}
            />
          }
          label={intl.formatMessage({ id: 'searchKashebian' })}
        />
      </FormGroup>
    </section>
  );
};

export default Search;
