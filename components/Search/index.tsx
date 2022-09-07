import { FormControlLabel, FormGroup, Switch } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import AC from '../Autocomplete';

type Option = {
  id: number;
  word: string;
  normalizedWord: string;
};

const Search = () => {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);
  const [value, setValue] = useState<Option | null>(null);

  useEffect(() => {
    if (value) {
      router.push(`/word/${isChecked ? 'kashebian/' : ''}${value.id}`);
    }
  }, [value]); // eslint-disable-line

  return (
    <section style={{ width: '100%' }}>
      <AC
        isFullWidth
        label='Wyszukaj'
        placeholder='Wyszukaj...'
        onChangeSingle={setValue}
        value={null}
      />
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={isChecked} onChange={setIsChecked.bind(this, !isChecked)} />}
          label='Wyszukaj po kaszubsku'
        />
      </FormGroup>
    </section>
  );
};

export default Search;
