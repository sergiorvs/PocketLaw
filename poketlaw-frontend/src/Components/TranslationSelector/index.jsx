import React from 'react';
import { useTranslation } from 'react-i18next';
import { Divider, Grid } from '@material-ui/core';
import { ReactComponent as SpainFlag } from '../../media/spain.svg';
import { ReactComponent as UsaFlag } from '../../media/united-states-of-america.svg';
import { useStyles } from './styles';
import { APP_LANGUAGE } from '../../i18n';


function TranslationSelector(props) {
  const classes = useStyles();
  const {i18n} = useTranslation();

  const onClickLanguage = (language) => {
    if (i18n.language === language) return;
    i18n.changeLanguage(language);
    localStorage.setItem(APP_LANGUAGE, language.languageCode);
  };

  return (
    <Grid item container justify={'center'} className={classes.container}>
      <Grid item container
            justify={'space-evenly'}
            className={classes.item}
            onClick={() => {
              onClickLanguage('ES');
            }}
      >
        ES <SpainFlag className={classes.icon} />
      </Grid>
        <Divider className={classes.divider} />
      <Grid item container
            justify={'space-evenly'}
            className={classes.itemB}
            onClick={() => {
              onClickLanguage('EN');
            }}
      >
        EN <UsaFlag className={classes.icon} />
      </Grid>
    </Grid>
  );
}

export default TranslationSelector;
