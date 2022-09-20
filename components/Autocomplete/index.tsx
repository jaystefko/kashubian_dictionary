import { CircularProgress, TextField } from '@mui/material';
import { Dispatch, Fragment, SetStateAction, useState } from 'react';
import { getTranslatedWordListByString, getWordList, getWordListByString } from '../../utils/api';
import errorHandler from '../../utils/errorHandler';
import { LOCALES, Word } from '../../utils/types';
import Autocomplete from '@mui/material/Autocomplete';
import { inputSX } from '../../styles/sx';
import { useRouter } from 'next/router';

type Option = {
  id: number;
  word: string;
  normalizedWord: string;
};

type ACProps = {
  isFullWidth?: boolean;
  label?: string;
  placeholder?: string;
  isMultiple?: boolean;
  onChangeSingle?: Dispatch<SetStateAction<Option | null>>;
  onChangeMultiple?: Dispatch<SetStateAction<Array<Option | null>>>;
  value: any;
  isKashebian?: boolean;
};

const AC = ({
  isFullWidth = false,
  label = '',
  placeholder = '',
  isMultiple = false,
  onChangeSingle,
  onChangeMultiple,
  value,
  isKashebian = true,
}: ACProps) => {
  let { locale } = useRouter();
  if (!locale) locale = LOCALES.pl;

  const [isOpen, setIsOpen] = useState(false);
  const [optionList, setOptionList] = useState<Array<Partial<Word>>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('');

  async function searchForWords(searchBy?: string, pageLimit = 10) {
    try {
      setIsLoading(true);
      let response;
      if (!isKashebian) {
        response = searchBy
          ? await getTranslatedWordListByString(searchBy, pageLimit)
          : await getTranslatedWordListByString('', pageLimit);
        setOptionList(
          response.data?.data?.SearchTranslations?.select?.map((translation: any) => ({
            word: translation.polish,
            id: translation.meaning.kashubianEntry.id,
            key: translation.meaning.kashubianEntry.id,
          })) || []
        );
      } else {
        response = searchBy
          ? await getWordListByString(searchBy, pageLimit)
          : await getWordList(pageLimit);
        setOptionList(response.data?.data?.findAllKashubianEntries?.select || []);
      }
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
          onChangeMultiple((value as Array<Option>) || null);
        } else if (!isMultiple && onChangeSingle) {
          onChangeSingle((value as Option) || null);
        }
      }}
      value={value}
      isOptionEqualToValue={(option, value) => option?.id === value?.id}
      getOptionLabel={(option) => option?.word || ''}
      onInputChange={(e, value) => {
        e?.preventDefault();
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
