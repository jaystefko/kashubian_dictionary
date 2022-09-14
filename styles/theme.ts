import { createTheme } from '@mui/material/styles';

const kashebianYellow = '#fdcd01';
const backgroundGray = '#404040';

const theme = createTheme({
  palette: {
    primary: {
      main: kashebianYellow,
      contrastText: 'white',
    },
    secondary: {
      main: backgroundGray,
      contrastText: 'black',
    },
    background: {
      default: 'transparent',
      paper: backgroundGray,
    },
    text: {
      primary: kashebianYellow,
      secondary: '#ffbf00',
      disabled: 'lightgray',
    },
    warning: {
      main: kashebianYellow,
      contrastText: 'white',
    },
  },
});

export default theme;
