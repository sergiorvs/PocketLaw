import React from 'react';
import { useStyles } from './styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { Grid } from '@material-ui/core';
import { useTranslation } from 'react-i18next';


export default function SearchBar({searchFilter, setSearchFilter}) {
  const classes = useStyles();
  const {t} = useTranslation();

  const handleChange = (event) => {
    setSearchFilter(event.target.value);
  };

  return (
    <Grid item container justify={'flex-end'} sm={8} xs={12}
          className={classes.searchBarContainer}>
      <Paper component="form" className={classes.root}>
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          className={classes.input}
          onChange={handleChange}
          value={searchFilter}
          placeholder={t('search')}
          inputProps={{'aria-label': 'search google maps'}}
        />
      </Paper>
    </Grid>
  );
}
