import { createMuiTheme } from '@material-ui/core/styles';

const CreateTheme = () => {
  const PRIMARY_COLOR = '#FFFFFF';
  const SECONDARY_COLOR = '#76f8f1';
  const TERNARY_COLOR = '#040826';

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
      fontFamily: 'Baloo Chettan 2',

      h1: {
        fontSize: 40.8,
        fontWeight: 500,
        color: PRIMARY_COLOR,
      },
      h2: {
        fontSize: 34,
      },
      h3: {
        fontSize: 32,
      },
      h4: {
        fontSize: 27,
        fontWeight: 300,
      },
      h5: {
        fontSize: 22,
        fontWeight: 300,
      },
      h6: {
        fontSize: 20,
        fontWeight: 'normal',
      },
      subtitle1: {
        fontSize: 24,
        fontWeight: 300,
        lineHeight: 'normal',
      },
      subtitle2: {
        fontSize: 16,
        lineHeight: '20px',
        color: PRIMARY_COLOR,
      },
      body1: {
        fontSize: '16px',
      },
      body2: {
        fontSize: 15.5,
        fontWeight: 300,
      },
      caption: {
        fontSize: 12.8,
        fontWeight: 'normal',
      },
    },
    palette: {
      general: {
        main: '#ffffff',
        light: '#ededed',
        dark: 'rgb(20, 41, 78)',
        contrastText: '#5e5e5e',
        contrastTextLess: 'rgba(94, 94, 94, 0.5)',
      },
      primary: {
        main: PRIMARY_COLOR,
        light: '#f9f9f9',
        dark: '#646464',
        contrastText: 'rgba(94, 94, 94, 0.5)',
      },
      secondary: {
        main: SECONDARY_COLOR,
        light: 'rgb(118, 248, 241)',
        dark: 'rgb(20, 41, 78)',
        contrastText: '#fefeff',
      },
      ternary: {
        main: TERNARY_COLOR,
        light: 'rgb(118, 248, 241)',
        dark: 'rgb(20, 41, 78)',
        contrastText: '#fefeff',
      },
      banner: {
        background: 'linear-gradient(57deg, rgba(151,169,255,1) 31%, rgba(118,173,237,1) 47%, rgba(217,206,215,1) 96%);',
      },
      modal: {
        btn: 'rgb(4, 8, 38)'
      }
    },
    overrides: {
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
            webkitBoxShadow: '0 0 0 30px blue inset !important'
          }
        },
      },
      /* Input */
      MuiInput: {
        root: {
          padding: '0.2rem 0.2rem',
          color: PRIMARY_COLOR,
          fontSize: '20px',
        },
        input: {
          '&::placeholder': {
            opacity: 1,
          },
          '&:-webkit-autofill': {
            backgroundColor: 'blue',
            background: 'red',
            '&:hover': {
              backgroundColor: 'blue',
              webkitBoxShadow: '0 0 0 30px blue inset !important'
            },
            '&:focus': {
              backgroundColor: 'blue',
              webkitBoxShadow: '0 0 0 30px blue inset !important'
            },
            '&:active': {
              backgroundColor: 'blue',
              webkitBoxShadow: '0 0 0 30px blue inset !important'
            },
          },
        },
        underline: {
          '&::before': {
            borderBottom: `solid 2px ${PRIMARY_COLOR}`,
          },
          '&:hover:not($disabled):before': {
            borderBottomColor: PRIMARY_COLOR,
            opacity: 0.5,
          },
        },
      },
      MuiPickersDatePickerRoot: {
        toolbar: {
          display: 'none'
        }
      },
      MuiFormHelperText: {
        root: {
          color: 'rgb(118, 248, 241)',
          '&$error': {
            color: 'rgb(118, 248, 241)'
          }
        }
      },
      MuiPaper: {
        root: {
          color: TERNARY_COLOR,
        }
      },
      MuiPickersStaticWrapper: {
        staticWrapperRoot: {
          minWidth: '10%',
          maxWidth: '95%',
        }
      },
      MuiPickersDay: {
        day: {
          color: TERNARY_COLOR,
          maxWidth: '31px',
        },
        daySelected: {
          '&:hover': {
            backgroundColor: '#14294e'
          },
          color: '#76f8f1',
          backgroundColor: '#14294e',
        },
        current: {
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
      MuiPickersBasePicker: {
        pickerView: {
          minWidth: 'None',
          maxWidth: 'None',
          width: '100%',
        },
      },
      MuiPickersClock: {
        pin: {
          backgroundColor: TERNARY_COLOR,
        }
      },
      MuiPickersClockPointer: {
        pointer: {
          backgroundColor: TERNARY_COLOR,
        },
        thumb: {
          border: `14px solid ${SECONDARY_COLOR}`,
        }
      },
      MuiPickersCalendarHeader: {
        dayLabel: {
          maxWidth: '31px'
        }
      },
      PrivateTabIndicator: {
        colorSecondary: {
          backgroundColor: `${SECONDARY_COLOR}`,
        }
      },
      MuiNativeSelect: {
        icon: {
          top: '45%',
          right: '5px',
          color: TERNARY_COLOR
        },
        select: {
          '&:focus': {
            backgroundColor: 'transparent',
          },
          borderBottom: '1px solid',
          borderBottomColor: TERNARY_COLOR,
          padding: '0.5rem',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
          },
          option: {
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
            },
          }
        }
      },
      MuiCssBaseline: {
        '@global': {
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
      MuiStepConnector: {
        line: {
          borderColor: PRIMARY_COLOR
        },
        alternativeLabel: {
          top: '16px',
        },
      },
      MuiStepper: {
        alternativeLabel: {
          background: 'transparent',
        }
      },
      MuiStep: {
        alternativeLabel: {
          padding: '0 50px',
        }
      },
      MuiStepIcon: {
        root: {
          color: 'rgba(256, 256, 256, 0.38)',
          display: 'block',
          fontSize: '26pt',
        },
        text: {
          color: 'rgb(15, 21, 62)',
          fill: null,
        }
      },
      MuiIconButton: {
        root: {
          '&:hover': {
            backgroundColor: null,
          }
        }
      },
      MuiCheckbox: {
        root: {
          color: PRIMARY_COLOR
        }
      }
    }
  });
};

export default CreateTheme;
