import { SxProps } from '@mui/material';
import { COLORS } from '../utils/types';

const buttonSX: SxProps = {
  color: COLORS.YELLOW,
  ':hover': {
    backgroundColor: COLORS.BLACK01,
  },
};

const boxSX: SxProps = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80vw',
  height: '80vh',
  bgcolor: COLORS.GRAY,
  color: COLORS.YELLOW,
  boxShadow: 24,
  p: 0,
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 4,
};

const iconSX: SxProps = {
  color: COLORS.YELLOW,
};

const checkboxSX: SxProps = {
  fill: COLORS.YELLOW,
  ' *': {
    fill: COLORS.YELLOW,
  },
};

const inputSX: SxProps = {
  color: `${COLORS.YELLOW} !important`,
  '::placeholder': {
    color: COLORS.YELLOW,
  },
  '::-webkit-input-placeholder': {
    color: COLORS.YELLOW,
  },
  '::-ms-input-placeholder': {
    color: COLORS.YELLOW,
  },
  '::-moz-placeholder': {
    color: COLORS.YELLOW,
  },
  '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: `${COLORS.YELLOW} !important`,
    color: `${COLORS.YELLOW} !important`,
  },
  ':disabled': {
    color: `${COLORS.DISABLED_YELLOW} !important`,
  },
  ' *': {
    color: `${COLORS.YELLOW} !important`,
    '::-webkit-input-placeholder': {
      color: COLORS.YELLOW,
    },
    '::-ms-input-placeholder': {
      color: COLORS.YELLOW,
    },
    '::-moz-placeholder': {
      color: COLORS.YELLOW,
    },
    ':disabled': {
      color: `${COLORS.DISABLED_YELLOW} !important`,
    },
  },
};

const tableCellSX: SxProps = {
  color: COLORS.YELLOW,
  borderColor: COLORS.BLACK03,
};

const tableHeaderCellSX: SxProps = {
  backgroundColor: COLORS.YELLOW,
  borderColor: COLORS.YELLOW,
};

const tableSX: SxProps = {
  background: 'transparent',
  height: '100%',
};

const paperSX: SxProps = {
  height: '100%',
  background: 'transparent',
  overflowY: 'hidden',
};

const tableContainerSX: SxProps = {
  '::-webkit-scrollbar': {
    display: 'none',
  },
  height: '100%',
  scrollbarWidth: 'none',
  '-ms-overflow-style': 'none',
};

export {
  buttonSX,
  boxSX,
  iconSX,
  inputSX,
  tableCellSX,
  tableHeaderCellSX,
  tableSX,
  paperSX,
  checkboxSX,
  tableContainerSX,
};