import { CircularProgress, TextField } from '@mui/material';
import { Dispatch, Fragment, SetStateAction, useState } from 'react';
import { getTranslatedWordListByString, getWordList, getWordListByString } from '../../utils/api';
import errorHandler from '../../utils/errorHandler';
import { COLORS, LOCALES, Word } from '../../utils/types';
import Autocomplete from '@mui/material/Autocomplete';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';

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
  isColorFlipped?: boolean;
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
  isColorFlipped,
}: ACProps) => {
  let { locale } = useRouter();
  if (!locale) locale = LOCALES.pl;
  const intl = useIntl();

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
          response.data?.data?.findAllKashubianEntries?.select?.map((translation: any) => ({
            word: translation.word,
            id: translation.id,
            key: translation.id,
          })) || []
        );
      } else {
        response = searchBy
          ? await getWordListByString(searchBy, pageLimit)
          : await getWordList(pageLimit);
        setOptionList(response.data?.data?.findAllKashubianEntries?.select || []);
      }
    } catch (error) {
      errorHandler(error, intl);
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
      loadingText={intl.formatMessage({ id: 'loadingText' })}
      sx={
        isColorFlipped
          ? {
              ':focus-within': {
                '& fieldset': { borderColor: 'white !important' },
              },
            }
          : undefined
      }
      renderInput={(params) => (
        <TextField
          {...params}
          fullWidth={isFullWidth}
          placeholder={placeholder}
          label={label}
          value={search}
          sx={
            isColorFlipped
              ? {
                  '& fieldset': {
                    borderColor: COLORS.YELLOW,
                  },
                  ':hover': {
                    '& fieldset': { borderColor: 'white !important' },
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white !important',
                  },
                }
              : undefined
          }
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
