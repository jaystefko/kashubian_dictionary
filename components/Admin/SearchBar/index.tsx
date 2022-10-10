import { Add } from '@mui/icons-material';
import { Button, TextField } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { buttonSX, iconSX, inputSX } from '../../../styles/sx';

type SearchBarProps = {
  setSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  search: string;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
};

const SearchBar = ({ setSearch, search, setIsModalOpen }: SearchBarProps) => {
  return (
    <section style={{ display: 'flex', margin: '0 0 1rem' }}>
      <TextField
        sx={inputSX}
        value={search}
        label='Wyszukaj'
        placeholder='Wyszukaj...'
        onChange={setSearch}
      />
      <Button onClick={setIsModalOpen.bind(this, true)} sx={buttonSX}>
        <Add sx={iconSX} />
      </Button>
    </section>
  );
};

export default SearchBar;
