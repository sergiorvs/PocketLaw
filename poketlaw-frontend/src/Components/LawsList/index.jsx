import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useStyles } from './styles';
import { useQuery } from '@apollo/client';
import {GET_ALL_LAWS, GET_FAVORITES} from '../../graphql/queries/Laws';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import clsx from 'clsx';
import LawCard from '../LawCard';

const LawsList = ({searchFilter, favorites}) => {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  const {data = {}} = useQuery(favorites?GET_FAVORITES:GET_ALL_LAWS, {
    variables: {
      page,
      searchFilter
    }, fetchPolicy: 'no-cache'
  });

  const {objects = []} = Object.keys(data).length?data[Object.keys(data)[0]]:{};

  useEffect(() => {
    if (objects.length) {
      const {pages} = data[Object.keys(data)[0]];

      setPages(pages);
    }
  }, [objects]);

  return (
    <>
      {objects?.map((law) => (
        <Grid item container key={law.id} className={classes.lawsDescription}>
         <LawCard law={law} />
        </Grid>
      ))}

      <Grid item container xs={12} justify={'flex-end'}>
        <ArrowBackIosIcon className={clsx(classes.icon, page === 1 && classes.disabled)}
                          onClick={() => setPage(page - 1)} />
        <ArrowForwardIosIcon className={clsx(classes.icon, page === pages && classes.disabled)}
                             onClick={() => setPage(page + 1)} />
      </Grid>
    </>
  );
};

export default LawsList;
