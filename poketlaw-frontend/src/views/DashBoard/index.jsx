import React, { useState } from 'react';
import { useStyles } from './styles';
import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import SearchBar from '../../Components/SearchBar';
import LawsList from '../../Components/LawsList';

function Dashboard() {
  const classes = useStyles();

  // States
  const [searchFilter, setSearchFilter] = useState('');

  return (
    <Grid container justify={'center'} alignContent={'center'} className={classes.baseContainer}>

      <Grid item container className={classes.lawsContainer}>
        <SearchBar
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
        />
        <Grid
          item container sm={12}
          alignItems={'flex-start'}
          className={classes.lawsDescriptionContainer}
        >
          <LawsList searchFilter={searchFilter} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Dashboard;
