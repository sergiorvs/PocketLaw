import React, { useState } from 'react';
import { useStyles } from './styles';
import { Container, Grid } from '@material-ui/core';
import SearchBar from '../../Components/SearchBar';
import LawsList from '../../Components/LawsList';

function Dashboard() {
  const classes = useStyles();

  // States
  const [searchFilter, setSearchFilter] = useState('');

  return (
    <Container className={classes.baseContainer}>
      <Grid item container className={classes.lawsContainer}>
        <SearchBar
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
        />
        <Grid
          item container sm={12}
          alignItems={'flex-start'}
          justify={'center'}
          className={classes.lawsDescriptionContainer}
        >
          <LawsList searchFilter={searchFilter} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;
