// eslint-disable-next-line
export default (theme) => ({
  wrapperContent: {
    backgroundColor: theme.palette.general.dark,
    borderRadius: '0 19px 19px 19px',
  },
  siderBackground: {
    backgroundColor: theme.palette.general.dark,
  },
  siderHeader: {
    padding: '1rem',
  },
  title: {
    fontSize: '17px',
  },
  subtitle: {
    fontSize: '6px',
    color: theme.palette.general.main,
    marginBottom: '1rem',
  },
  logoContainer: {
    textAlign: 'center',
  },
  logo: {
    width: '70px',
    height: '70px',
    backgroundColor: theme.palette.primary.main,
    margin: 'auto',
  },
  divider: {
    width: '100%',
    height: '.5px',
    backgroundColor: theme.palette.primary.main,
  },
  menuList: {
    color: theme.palette.secondary.light,
  },
});
