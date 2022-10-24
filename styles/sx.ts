import { SxProps } from '@mui/material';
import { COLORS } from '../utils/types';

const boxSX: SxProps = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80vw',
  height: '80vh',
  bgcolor: COLORS.BACKGROUND,
  color: COLORS.FONT,
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
  bgcolor: COLORS.BACKGROUND,
  color: COLORS.FONT,
  boxShadow: 24,
  p: 0,
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 4,
};

export { boxSX, smallBoxSX };
