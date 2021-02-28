import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  baseContainer: {
    backgroundColor: '#eff5f8',
    width: '100%',
    minHeight: '100vh',
    flexGrow: 2,
    alignContent: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  headerContainer: {
    background: 'linear-gradient(90deg, rgba(82,153,235,1) 0%, rgba(88,127,235,1) 100%);',
    width: '100%',
    maxHeight: '12vh',
    padding: '1rem',
    alignContent: 'center',
  },
  lawsContainer:{
    height: '100%',
  },
  lawsDescriptionContainer: {
    // background: 'blue',
    width: '20px',
    padding: '2rem 0 0',
    margin: '0 2rem 0 14rem',
    justifyContent: 'center',
  },
  filtersContainer: {
    backgroundColor: '#ffffff',
    alignContent: 'center',
  },
  hours: {
    color: theme.palette.ternary.main,
    fontSize: '14px',
    lineHeight: '18px',
  },
  inputFilter: {
    "&::placeholder": {
      color: theme.palette.ternary.main,
      opacity: 1,
    },
    color: theme.palette.ternary.main,
    fontSize: 14,
  },
  eventsAndCommuniques: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  eventsContainer:{
    overflow: 'auto',
    maxHeight: '80vh',
  },
  eventsDescriptions: {
    paddingBottom: '0.625rem',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  fullEventsDescriptions: {
    paddingTop: '0.625rem',
    paddingLeft: '0.625rem',
    height: 'calc(100% - 129px)',
    width: '100%',
  },
  currentEvents: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
  SearchBar: {
    color: '#000 !important',
    fontFamily: 'Baloo Chettan 2',
    fontSize: '0.875rem'
  },
  SearchBarLabel: {
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.ternary.main
  },
  presentationContainer: {
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    }
  },
  loginContainer: {
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    }
  },
  logoContainer: {
    width: 'fit-content',
  },
  logo: {
    width: '80px',
    height: '90px',
    backgroundColor: theme.palette.primary.main,
  },
  activeDescription: {
    marginLeft: '1.25rem',
    marginRight: '1.25rem',
    width: '90%',
    backgroundColor: `${theme.palette.secondary.light} !important`,
  },
  scrollContainer:{
    overflow: 'auto',
    minHeight: '70%',
    maxHeight: '20vh',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '24pt',
    paddingLeft: '1.25rem',
    paddingTop: '1.118rem',
    paddingBottom: '1.25rem',
    color: theme.palette.ternary.main,
    fontWeight: 300,
    lineHeight: '18pt',
  },
  selectDaySubtitle: {
    fontSize: '19pt',
    paddingLeft: '2.833rem',
    paddingTop: '1.25rem',
    paddingBottom: '1.25rem',
    color: theme.palette.ternary.main,
    fontWeight: 300,
    lineHeight: '13pt',
  },
  dateGroup: {
    fontSize: 18.5,
    paddingLeft: '1.25rem',
    paddingTop: '1.118rem',
    paddingBottom: '1.25rem',
    color: theme.palette.ternary.main,
    fontWeight: 300,
    lineHeight: 'normal',
  },
  subtitleOngoing: {
    fontSize: 24,
    paddingLeft: '1.25rem',
    paddingTop: '1.118rem',
    color: theme.palette.ternary.main,
    fontWeight: 300,
    lineHeight: 'normal',
  },
  date: {
    color: theme.palette.ternary.main,
    paddingLeft: '1.25rem',
    paddingBottom: '1.25rem',
  },
  description: {
    marginLeft: '1.25rem',
    marginRight: '1.25rem',
    width: '90%',
    backgroundColor: '#e7ecef',
  },
  descriptionNumberEvents: {
    margin: '1.604rem 0 0.833rem 1.333rem',
    width: '90%',
    backgroundColor: '#e7ecef',
  },
  containerDescription: {
    padding: '0.75rem 1.5rem 0.667rem 1.5rem',
  },
  avatarStyle: {
    width: '2.667rem',
    height: '2.667rem',
  },
  descriptionInside: {
    marginBottom: '1.138rem',
    marginLeft: '70',
  },
  marginBottom: {
    marginBottom: '1.7rem',
  },
  marginLeft: {
    marginLeft: '1.313rem',
  },
  eventDescription: {
    paddingLeft: '0.667rem',
    color: theme.palette.ternary.main,
    fontSize: '14px',
  },
  eventTittle: {
    paddingLeft: '0.667rem',
    fontWeight: 500,
    color: theme.palette.ternary.main,
    fontSize: '14px',
    lineHeight: '18pt',
  },
  foundedEventsTitle: {
    paddingLeft: '0.667rem',
    fontWeight: 450,
    color: theme.palette.ternary.main,
    fontSize: '13pt',
    lineHeight: '18pt',
  },
  descriptionEventsFounded: {
    paddingLeft: '0.667rem',
    color: theme.palette.ternary.main,
    fontSize: '13pt',
    lineHeight: '18pt',
  },
  marginLeftDate: {
    marginLeft: '1.175rem',
    fontSize: 14,
    fontWeight: 18,
  },
  textField: {
    width: '100%',
    marginBottom: '1.5rem',
    background: 'transparent',
    borderBottomColor: theme.palette.primary.main,
    '& .MuiInput-underline:after': {
      borderBottomColor: theme.palette.primary.main,
    },
  },
  button: {
    fontSize: '12px',
    fontWeight: 'normal',
    textTransform: 'none',
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.ternary.main,
    minWidth: '7rem',
  },
  link: {
    color: theme.palette.secondary.light,
    textDecoration: 'underline',
    lineHeight: '18px',
  },
  inputIcon: {
    marginRight: '.5rem',
  },
  resetPasswordContainer: {
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    }
  },
  resetForm: {
    padding: '0 1.5rem',
  },
  resetDescription: {
    padding: '0 .5rem',
    paddingTop: '1.5rem',
  },
}));
