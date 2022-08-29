import { CircularProgress, TextField } from '@mui/material';
import { Dispatch, Fragment, SetStateAction, useState } from 'react';
import { getWordList, getWordListByString } from '../../utils/api';
import errorHandler from '../../utils/errorHandler';
import { Word } from '../../utils/types';
import Autocomplete from '@mui/material/Autocomplete';
import { inputSX } from '../../styles/sx';

type ACProps = {
  isFullWidth?: boolean;
  label?: string;
  placeholder?: string;
  isMultiple?: boolean;
  onChangeSingle?: Dispatch<SetStateAction<Partial<Word> | undefined>>;
  onChangeMultiple?: Dispatch<SetStateAction<Partial<Word>[] | undefined>>;
};

const AC = ({
  isFullWidth = false,
  label = '',
  placeholder = '',
  isMultiple = false,
  onChangeSingle,
  onChangeMultiple,
}: ACProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [optionList, setOptionList] = useState<Array<Partial<Word>>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('');

  async function searchForWords(searchBy?: string, pageLimit = 10) {
    try {
      setIsLoading(true);
      const response = searchBy
        ? await getWordListByString(searchBy, pageLimit)
        : await getWordList(pageLimit);
      setOptionList(response.data?.data?.SearchKashubianEntries?.select);
    } catch (error) {
      errorHandler(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Autocomplete
      multiple={isMultiple}
      open={isOpen}
      onOpen={() => {
        searchForWords();
        setIsOpen(true);
      }}
      onClose={() => {
        setSearch('');
        setOptionList([]);
        setIsOpen(false);
      }}
      onChange={(e, value) => {
        if (isMultiple && onChangeMultiple) {
          onChangeMultiple((value as Array<Partial<Word>>) || undefined);
        } else if (!isMultiple && onChangeSingle) {
          onChangeSingle((value as Partial<Word>) || undefined);
        }
      }}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      getOptionLabel={(option) => option.word || ''}
      onInputChange={(e, value) => {
        e.preventDefault();
        setSearch(value);
        if (value) searchForWords(`${value}`);
      }}
      filterOptions={(options) => options}
      options={optionList}
      loading={isLoading}
      renderInput={(params) => (
        <TextField
          {...params}
          sx={inputSX}
          fullWidth={isFullWidth}
          placeholder={placeholder}
          label={label}
          value={search}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <Fragment>
                {isLoading ? <CircularProgress color='inherit' size={20} /> : null}
                {params.InputProps.endAdornment}
              </Fragment>
            ),
          }}
        />
      )}
    />
  );
};

export default AC;
