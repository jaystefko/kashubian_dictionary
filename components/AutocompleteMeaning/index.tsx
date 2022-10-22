import { CircularProgress, TextField } from '@mui/material';
import { Dispatch, Fragment, SetStateAction, useState } from 'react';
import { getMeaningList } from '../../utils/api';
import errorHandler from '../../utils/errorHandler';
import Autocomplete from '@mui/material/Autocomplete';
import { useIntl } from 'react-intl';

type Option = {
  id: number;
  definition: string;
};

type MACProps = {
  isFullWidth?: boolean;
  label?: string;
  placeholder?: string;
  isMultiple?: boolean;
  onChangeSingle?: Dispatch<SetStateAction<Option | null>>;
  onChangeMultiple?: Dispatch<SetStateAction<Array<Option | null>>>;
  value: any;
};

const MAC = ({
  isFullWidth = false,
  label = '',
  placeholder = '',
  isMultiple = false,
  onChangeSingle,
  onChangeMultiple,
  value,
}: MACProps) => {
  const intl = useIntl();

  const [isOpen, setIsOpen] = useState(false);
  const [optionList, setOptionList] = useState<Array<Option>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('');

  async function searchForMeanings(searchBy = '', pageLimit = 10) {
    try {
      setIsLoading(true);
      const response = await getMeaningList(searchBy, pageLimit);
      setOptionList(response.data?.data?.findAllMeanings?.select || []);
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
        searchForMeanings();
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
      getOptionLabel={(option) => option?.definition || ''}
      onInputChange={(e, value) => {
        e?.preventDefault();
        setSearch(value);
        if (value) searchForMeanings(`${value}`);
      }}
      filterOptions={(options) => options}
      options={optionList}
      loading={isLoading}
      loadingText={intl.formatMessage({ id: 'loadingText' })}
      renderInput={(params) => (
        <TextField
          {...params}
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

export default MAC;
