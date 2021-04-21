import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Divider, Grid } from '@material-ui/core';
import { ReactComponent as SpainFlag } from '../../media/spain.svg';
import { ReactComponent as UsaFlag } from '../../media/united-states-of-america.svg';
import { useStyles } from './styles';
import { APP_LANGUAGE } from '../../i18n';
import clsx from 'clsx';


function TranslationSelector(props) {
  const classes = useStyles();
  const {i18n} = useTranslation();
  const [active, setActive] = useState(i18n.language);

  const onClickLanguage = (language) => {
    if (i18n.language === language) return;
    i18n.changeLanguage(language);
    setActive(language);
    localStorage.setItem(APP_LANGUAGE, language.languageCode);
  };

  return (
    <Grid item container justify={'center'} className={classes.container}>
      <Grid item container
            justify={'space-evenly'}
            className={clsx(classes.item, active === 'ES' && classes.active)}
            onClick={() => {
              onClickLanguage('ES');
            }}
      >
        ES <SpainFlag className={classes.icon} />
      </Grid>
      <Divider className={classes.divider} />
      <Grid item container
            justify={'space-evenly'}
            className={clsx(classes.itemB, active === 'EN' && classes.activeB)}
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
