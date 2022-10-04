import { createTheme } from '@mui/material/styles';
import { COLORS } from '../utils/types';

const theme = createTheme({
  components: {
    MuiTypography: {
      defaultProps: {
        fontFamily: 'Fira Sans, sans-serif',
      },
    },
  },
  palette: {
    primary: {
      main: COLORS.YELLOW,
      contrastText: 'white',
    },
    secondary: {
      main: COLORS.GRAY,
      contrastText: 'black',
    },
    background: {
      default: 'transparent',
      paper: COLORS.GRAY,
    },
    text: {
      primary: COLORS.YELLOW,
      secondary: '#ffbf00',
      disabled: 'lightgray',
    },
    warning: {
      main: COLORS.YELLOW,
      contrastText: 'white',
    },
  },
});

export default theme;
