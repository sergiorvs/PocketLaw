// eslint-disable-next-line
export default (theme) => ({
  baseContainer: {
    minHeight: '100%',
    height: '100%',
  },
  baseContainerLogin: {
    // minHeight: 'calc(100vh - 16.3rem)',
    // padding: '0 2rem 2rem 2rem',
    height: '100%',
    [theme.breakpoints.up('lg')]: {
    },
  },
});
