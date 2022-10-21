import { createTheme } from '@mui/material/styles';
import { COLORS } from '../utils/types';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Fira Sans, sans-serif',
    },
  },
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: COLORS.YELLOW,
        },
      },
    },
    MuiAutocomplete: {
      defaultProps: {
        style: {
          backgroundColor: COLORS.GRAY,
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        style: {
          height: '100%',
          background: COLORS.GRAY,
          overflowY: 'hidden',
          scrollbarWidth: 'none',
        },
      },
    },
    MuiTable: {
      defaultProps: {
        style: {
          backgroundColor: 'transparent',
          height: '100%',
        },
      },
    },
    MuiTableHead: {
      defaultProps: {
        style: {
          height: 30,
        },
      },
    },
    MuiTableContainer: {
      defaultProps: {
        style: {
          height: '100%',
          scrollbarWidth: 'none',
        },
        sx: { '-ms-overflow-style': 'none', '::-webkit-scrollbar': { display: 'none' } },
      },
    },
    MuiTableCell: {
      variants: [
        {
          props: { variant: 'head' },
          style: {
            color: 'black',
            fontWeight: 'bold',
            background: COLORS.YELLOW,
            border: 'none',
          },
        },
        {
          props: { variant: 'body' },
          style: {
            color: COLORS.YELLOW,
            borderColor: COLORS.BLACK03,
          },
        },
      ],
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
