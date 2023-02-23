import { createTheme } from '@mui/material';

//#region Palatte & Typography
let theme = createTheme({
  palette: {
    primary: {
      main: '#124874',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#CF373D',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#FFC50C',
      contrastText: '#ffffff',
    },
    skyblue: {
      main: '#1890FF',
      contrastText: '#ffffff',
    },
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
    htmlFontSize: 14,
    fontWeightRegular: 400,
    allVariants: {
      color: '#124874',
    },
  },
  components: {},
});
//#endregion

//#region Components & Breakpoints
theme = createTheme(theme, {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 1680,
      xxxl: 1920,
    },
  },
  components: {
    MuiFormLabel: {
      styleOverrides: {
        asterisk: {
          color: 'red',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '& .MuiSvgIcon-root': {
            color: 'inherit',
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {},
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          '& .MuiTableCell-root': {
            borderBottom: 'none',
            fontSize: 16,
            fontWeight: 400,
            color: '#191919',
            padding: '6px 16px',
          },
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          '& .MuiTableCell-root': {
            padding: '11px 20px',
            textTransform: 'uppercase',
            fontSize: 16,
            lineHeight: '19.5px',
            fontWeight: 600,
            color: '#ffffff',
            backgroundColor: theme.palette.primary.main,
            '&:first-of-type': {
              borderTopLeftRadius: '10px',
              borderBottomLeftRadius: '10px',
            },
            '&:last-of-type': {
              borderTopRightRadius: '10px',
              borderBottomRightRadius: '10px',
            },
          },
        },
      },
    },
    MuiTableRow: {
      defaultProps: {
        hover: true,
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: '#124874',
        },
      },
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: 'page-title' },
          style: {
            fontWeight: 700,
            fontSize: '2.85rem',
            lineHeight: '3.45rem',
            color: theme.palette.secondary.main,
          },
        },
      ],
    },
    MuiTextField: {
      defaultProps: {
        autoComplete: 'off',
        autoCorrect: 'off',
      },
      styleOverrides: {
        root: {
          borderRadius: '10px',
          filter: 'drop-shadow(5px 3px 30px rgba(19, 70, 131, 0.1))',
        },
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        autoComplete: 'off',
        autoCorrect: 'off',
      },
      styleOverrides: {
        root: {
          borderRadius: 'inherit',
          '&.MuiInputBase-adornedStart': {
            input: {
              paddingLeft: '0!important',
            },
          },
          '&.Mui-error': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderWidth: '1px',
              borderStyle: 'solid',
            },
          },
        },
        input: {
          padding: '10px 15px',
          '&::placeholder': {
            color: '#5B5B5B',
            opacity: 1,
          },
        },
        notchedOutline: {
          border: 'none',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          '& .MuiSvgIcon-root': {
            color: 'inherit',
          },
          '&.c-button': {
            fontSize: '1rem',
            lineHeight: '19px',
            textTransform: 'uppercase',
            borderRadius: '5px',
            boxShadow: '0px 2px 0px rgba(0, 0, 0, 0.043)',
            padding: '10px 16px',
          },
          '&.add-button': {
            letterSpacing: '0.03em',
            textTransform: 'uppercase',
            fontSize: 16,
            lineHeight: '19px',
            fontWeight: 500,
            padding: '12.5px 20px',
            borderRadius: '10px',
            '& .MuiSvgIcon-root': {
              color: 'inherit',
            },
          },
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          '&.wrapper': {
            padding: '18px 30px',
            borderRadius: '20px',
            backgroundColor: '#ffffff',
            boxShadow: '20px 20px 60px rgba(19, 70, 131, 0.1)',
          },
        },
      },
    },
  },
});
//#endregion

export default theme;
