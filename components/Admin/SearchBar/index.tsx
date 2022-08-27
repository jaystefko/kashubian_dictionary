import { Add, Search } from '@mui/icons-material';
import { Button, TextField } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { setter } from '../../../utils/utilities';

import styles from './styles.module.css';

type SearchBarProps = {
  setSearch: Dispatch<SetStateAction<string>>;
  search: string;
  searchForWords: (searchBy: string) => void;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
};

const SearchBar = ({ setSearch, search, searchForWords, setIsModalOpen }: SearchBarProps) => {
  return (
    <section className={styles.bar}>
      <TextField
        sx={{
          '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#fdcd01 !important',
          },
        }}
        className={styles.input}
        value={search}
        placeholder='Wyszukaj...'
        onChange={setter.bind(this, setSearch)}
      />
      <Button onClick={searchForWords.bind(this, search)} className={styles.button}>
        <Search className={styles.icon} />
      </Button>
      <Button onClick={setIsModalOpen.bind(this, true)} className={styles.button}>
        <Add className={styles.icon} />
      </Button>
    </section>
  );
};

export default SearchBar;
