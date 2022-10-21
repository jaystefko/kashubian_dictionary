import { SxProps } from '@mui/material';
import { COLORS } from '../utils/types';

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

const smallBoxSX: SxProps = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '40vw',
  height: '28vh',
  bgcolor: COLORS.GRAY,
  color: COLORS.YELLOW,
  boxShadow: 24,
  p: 0,
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 4,
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

export { boxSX, smallBoxSX, inputSX };
