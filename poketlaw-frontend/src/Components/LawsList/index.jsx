import { Card, CardContent, Divider, Grid, Typography } from '@material-ui/core';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import React, { useEffect, useState } from 'react';
import { useStyles } from './styles';
import { useQuery } from '@apollo/client';
import { GET_ALL_LAWS } from '../../graphql/queries/Laws';
import { getImageUrl } from '../../utils/tools';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import clsx from 'clsx';
import LawCard from '../LawCard';

const LawsList = ({searchFilter}) => {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [favorite, setFavorite] = useState(false);

  const {data = {}} = useQuery(GET_ALL_LAWS, {
    variables: {
      page,
      searchFilter
    }
  });

  const {objects = []} = data.getAllLaws ? data.getAllLaws : {};

  useEffect(() => {
    if (objects.length) {
      const {pages} = data.getAllLaws;

      setPages(pages);
    }
  }, [objects]);

  const handleFavorite = () => {
    setFavorite(!favorite);
  }

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
