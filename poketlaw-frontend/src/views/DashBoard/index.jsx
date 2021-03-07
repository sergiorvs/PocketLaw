import React, { useState } from 'react';
import { useStyles } from './styles';
import PropTypes from 'prop-types';
import {Container, Grid} from '@material-ui/core';
import SearchBar from '../../Components/SearchBar';
import LawsList from '../../Components/LawsList';

const propTypes = {
  favorites: PropTypes.bool,
};

function Dashboard(props) {
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
          <LawsList searchFilter={searchFilter} favorites={props.favorites}/>
        </Grid>
      </Grid>
    </Container>
  );
}

Dashboard.propTypes = propTypes;
Dashboard.defaultProps = {
  favorites: false,
};

export default Dashboard;
