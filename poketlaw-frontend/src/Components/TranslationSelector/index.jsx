import React from 'react';
import { useTranslation } from 'react-i18next';
import { Divider, Grid } from '@material-ui/core';
import { useStyles } from './styles';


function TranslationSelector(props) {
  const classes = useStyles();
  const {i18n} = useTranslation();

  const onClickLanguage = (language) => {
    if (i18n.language === language) return;
    i18n.changeLanguage(language);
    // localStorage.setItem(APP_LANGUAGE, language.languageCode);
  };

  return (
    <Grid item container xs={12} justify={'center'} className={classes.container}>
      <Grid item
            className={classes.item}
            onClick={() => {
              onClickLanguage('ES');
            }}
      >
        ES
      </Grid>
        <Divider className={classes.divider} />
      <Grid item
            className={classes.itemB}
            onClick={() => {
              onClickLanguage('EN');
            }}
      >
        EN
      </Grid>
    </Grid>
  );
}

export default TranslationSelector;
