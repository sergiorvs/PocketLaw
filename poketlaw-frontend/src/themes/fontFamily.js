import fileBebasNeueRegular from '../fonts/BebasNeue-Regular.ttf';
import fileAntonioLight from '../fonts/antonio.light.ttf';

export const BebasNeueRegular = {
  fontFamily: 'BebasNeueRegular',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: '400',
  src: `
   local('BebasNeueRegular'),
   local('BebasNeueRegular'),
   url(${fileBebasNeueRegular}) format('truetype')
 `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

export const AntonioLight = {
  fontFamily: 'AntonioLight',
  fontStyle: 'light',
  fontDisplay: 'swap',
  fontWeight: '400',
  src: `
   local('AntonioLight'),
   local('AntonioLight'),
   url(${fileAntonioLight}) format('truetype')
 `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};
