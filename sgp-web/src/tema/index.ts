import { createTheme } from '@mui/material/styles';

export const coresPadaria = {
  barraLateral: 'rgb(52, 36, 25)',
  barraLateralHover: '#463428',
  barraLateralSelecionada: '#6b5547',
  barraLateralSelecionadaHover: '#7a6251',
  destaque: '#d6a15d',
  textoClaro: '#fff7ed',
  fundoPagina: '#faf7f2',
};

export const tema = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: coresPadaria.destaque,
      contrastText: coresPadaria.barraLateral,
    },
    background: {
      default: coresPadaria.fundoPagina,
      paper: '#ffffff',
    },
    text: {
      primary: '#2f2118',
      secondary: '#6b5547',
    },
  },

  shape: {
    borderRadius: 8,
  },

  typography: {
    fontFamily: ['Inter', 'Roboto', 'Arial', 'sans-serif'].join(','),
    fontSize: 14,

    h1: {
      fontSize: '1.75rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 700,
      lineHeight: 1.25,
    },
    h3: {
      fontSize: '1.25rem',
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: '1.125rem',
      fontWeight: 600,
      lineHeight: 1.35,
    },
    h5: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: '0.95rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    subtitle1: {
      fontSize: '0.9rem',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    subtitle2: {
      fontSize: '0.85rem',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.8125rem',
      lineHeight: 1.45,
    },
    button: {
      fontSize: '0.8125rem',
      fontWeight: 600,
      textTransform: 'none',
    },
    caption: {
      fontSize: '0.7rem',
      lineHeight: 1.35,
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: '100%',
        },
        body: {
          height: '100%',
          margin: 0,
          backgroundColor: coresPadaria.fundoPagina,
        },
        '#root': {
          height: '100%',
        },
        '*': {
          boxSizing: 'border-box',
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          boxShadow: 'none',
        },
      },
    },

    MuiToggleButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});
