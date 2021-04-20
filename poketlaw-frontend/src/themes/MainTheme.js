import { createMuiTheme } from '@material-ui/core/styles';
import { AntonioLight, BebasNeueRegular } from './fontFamily';

const CreateTheme = () => {
  const PRIMARY_COLOR = '#FFFFFF';
  const SECONDARY_COLOR = '#A17EDE';
  const TERNARY_COLOR = '#87ABF7';

  return createMuiTheme({

    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
    typography: {
      fontFamily: [
        'Bebas Neue', 'BebasNeueRegular',
        '\'Antonio Light\', arial'
      ].join(','),
      color: 'black',

      h1: {
        fontSize: 40.8,
        fontWeight: 500,
        color: PRIMARY_COLOR,
      },
      h2: {
        fontSize: 34,
        color: 'black',
      },
      h3: {
        fontSize: 32,
        color: 'black',
      },
      h4: {
        fontSize: 27,
        fontWeight: 300,
        color: 'black',
      },
      h5: {
        fontSize: 22,
        fontWeight: 300,
        color: 'black',
      },
      h6: {
        fontSize: 20,
        fontWeight: 'normal',
        color: 'black',
      },
      subtitle1: {
        fontSize: 24,
        fontWeight: 300,
        lineHeight: 'normal',
        color: 'black',
      },
      subtitle2: {
        fontSize: 16,
        lineHeight: '20px',
        color: SECONDARY_COLOR,
      },
      body1: {
        fontSize: '16px',
        color: 'black',
        fontFamily: '\'Antonio Light\', arial'
      },
      body2: {
        fontSize: 15.5,
        fontWeight: 300,
        color: 'black',
        fontFamily: '\'Antonio Light\', arial'
      },
      caption: {
        fontSize: 12.8,
        fontWeight: 'normal',
        fontFamily: '\'Antonio Light\', arial'
      },
    },
    palette: {
      general: {
        main: '#ffffff',
        light: '#ededed',
        dark: '#555555',
        contrastText: '#5e5e5e',
        contrastTextLess: '#000000',
      },
      primary: {
        main: PRIMARY_COLOR,
        light: '#f9f9f9',
        dark: '#646464',
        contrastText: 'rgba(94, 94, 94, 0.5)',
      },
      secondary: {
        main: SECONDARY_COLOR,
        light: '#C999D1',
        dark: '#87ABF7',
        error: '#cc6054',
        contrastText: '#fefeff',
      },
      ternary: {
        main: TERNARY_COLOR,
        light: 'rgb(118, 248, 241)',
        dark: 'rgb(20, 41, 78)',
        neutral: '#FEF04A',
        positive: '#36AA06',
        bad: '#cc6054',
        contrastText: '#fefeff',
      },
      banner: {
        background: 'linear-gradient(57deg, rgba(151,169,255,1) 31%, rgba(118,173,237,1) 47%, rgba(217,206,215,1) 96%);',
      },
      modal: {
        btn: 'rgb(4, 8, 38)'
      },
      border: {
        light: '#F5F5F7'
      }
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '@font-face': [
            BebasNeueRegular,
            AntonioLight,
          ],
          '*': {
            'scrollbar-width': '20px',
          },
          '*::-webkit-scrollbar': {
            width: '2px',
            height: '4px',
          },
          '*::-webkit-scrollbar-thumb': {
            background: TERNARY_COLOR,
          },
        },
      },
      MuiGrid: {
        container: {
          '&::-webkit': {
            scrollbar: {
              width: '2px',
              track: {
                background: ' #f1f1f1',
              },
              thumb: {
                background: '#888',
                '&::hover': {
                  background: '#263263',
                }
              }
            }
          },
        }
      },
      MuiPickersToolbarText: {
        toolbarBtnSelected: {
          color: 'rgba(94, 94, 94, 1)',
        }
      },
      MuiButton: {
        root: {
          backgroundColor: PRIMARY_COLOR,
          textAlign: 'center',
          fontSize: 20,
        },
      },
      MuiInputBase: {
        input: {
          '&:-webkit-autofill': {
            backgroundColor: 'red',
          },
          '&:focus': {
            outline: 'none',
          }
        },
      },
      /* Input */
      MuiOutlinedInput: {
        root: {
          '&$focus': {
            border: '1px solid pink'
            // boxShadow: `gray 0 0 0 1px`,
          //   borderColor: 'blue'
          },
          // '&.Mui-focused': {
          //   border: `1px solid ${SECONDARY_COLOR}`
          // }
        },
        focused: {
          border: '1px solid #4A90E2'
        },
        notchedOutline: {
          border: '1px solid #4A90E2'
        },
      },
      MuiPickersDatePickerRoot: {
        toolbar: {
          display: 'none'
        }
      },
      MuiFormHelperText: {
        root: {
          color: SECONDARY_COLOR,
          '&$error': {
            color: '#cc6054'
          }
        }
      },
      MuiPaper: {
        root: {
          color: TERNARY_COLOR,
        }
      },
      MuiDivider: {
        root: {
          backgroundColor: 'rgb(15, 21, 62)',
        }
      },
      MuiTab: {
        root: {
          fontSize: '18px'
        }
      },
    },
  });
};

export default CreateTheme;
