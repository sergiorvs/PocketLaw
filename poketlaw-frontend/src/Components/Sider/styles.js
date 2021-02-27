// eslint-disable-next-line
export default (theme) => ({
  siderItems: {
    // backgroundColor: theme.palette.general.main,
    // borderRadius: '19px 0 0 19px',
  },
  postSelected: {
    // borderRadius: '19px 19px 0 19px',
  },
  preSelected: {
    // borderRadius: '0 0 19px 0',
  },
  selectedBackground: {
    opacity: 1,
  },
  normalBackground: {
    opacity: 0.3,
    color: theme.palette.general.main
  },
  icon: {
    // width: '2rem',
  },
  siderText: {
    paddingTop: '0.2rem',
    color: theme.palette.secondary.light,
  },
  siderLink: {
    textDecorationLine: 'none',
    color: theme.palette.primary.main,
  },
  siderIcon: {
    minWidth: 'auto',
    marginRight: '.5rem',
  },
});
