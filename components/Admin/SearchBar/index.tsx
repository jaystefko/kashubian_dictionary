import { Add, Search } from '@mui/icons-material';
import { Button, TextField } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { buttonSX, iconSX, inputSX } from '../../../styles/sx';
import { setter } from '../../../utils/utilities';

type SearchBarProps = {
  setSearch: Dispatch<SetStateAction<string>>;
  search: string;
  searchForWords: (searchBy: string) => void;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
};

const SearchBar = ({ setSearch, search, searchForWords, setIsModalOpen }: SearchBarProps) => {
  return (
    <section style={{ display: 'flex', margin: '0 0 1rem' }}>
      <TextField
        sx={inputSX}
        value={search}
        label='Wyszukaj'
        placeholder='Wyszukaj...'
        onChange={setter.bind(this, setSearch)}
      />
      <Button onClick={searchForWords.bind(this, search)} sx={buttonSX}>
        <Search sx={iconSX} />
      </Button>
      <Button onClick={setIsModalOpen.bind(this, true)} sx={buttonSX}>
        <Add sx={iconSX} />
      </Button>
    </section>
  );
};

export default SearchBar;
