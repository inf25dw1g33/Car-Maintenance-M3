// src/theme.ts
import { defaultTheme } from 'react-admin';
import { createTheme } from '@mui/material/styles';

export const edigciaTheme = createTheme(
  defaultTheme,
  {
    palette: {
      mode: 'light',
      primary: {
        main: '#4a9ed1',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#5a8fb0',
      },
      background: {
        default: '#f5f9fc',
        paper: '#ffffff',
      },
      text: {
        primary: '#0d4a73',
        secondary: '#5a8fb0',
      },
    },
    typography: {
      fontFamily: '"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      h6: {
        fontWeight: 600,
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            background: 'linear-gradient(90deg, #4a9ed1 0%, #6fb8e3 100%)',
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            background: 'linear-gradient(180deg, #a8d5f0 0%, #c8e5f7 100%)',
            color: '#0d4a73',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: 8,
          },
        },
      },
    },
  }
);