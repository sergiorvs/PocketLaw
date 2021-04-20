import { Card, CardContent, Divider, Grid, Typography } from '@material-ui/core';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import React, { useEffect, useState } from 'react';
import { useStyles } from './styles';
import { getImageUrl } from '../../utils/tools';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import routesDictionary from '../../routes/routesDict';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_TO_FAVORITES } from '../../graphql/mutations/Laws';
import { useTranslation } from 'react-i18next';

const LawCard = ({law, userSession}) => {
  const classes = useStyles();
  const history = useHistory();
  const {t} = useTranslation();
  const [favorite, setFavorite] = useState(law.isFavorite);
  const [addToFavorites] = useMutation(ADD_TO_FAVORITES);

  useEffect(() => {
    setFavorite(law.isFavorite);
  }, [law]);

  const handleFavorite = (lawId) => {
    setFavorite(!favorite);
    addToFavorites({
      variables: {
        lawId: lawId
      }
    });
  };

  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardContent}>
        <Grid item container md={11} sm={12} onClick={() => history.push(routesDictionary.lawDetail(law.id))}>
          <Grid item container className={classes.imageLaw} alignItems={'center'} md={2} sm={6} xs={12}>
            <img
              alt={'lawImage'}
              src={getImageUrl(law.image)}
              className={classes.lawImage}
            />
          </Grid>
          <Grid item container className={classes.title} md={3} sm={6} xs={12} justify={'flex-end'}>
            <Grid item container xs={12}>
              <Typography variant={'subtitle1'} className={classes.lawTitle}>
                {law.title}
              </Typography>
            </Grid>
            <Grid item container md={10}>
              <Grid item container xs={12} className={classes.lawExtras}>
                <LocalOfferOutlinedIcon />
                <Typography>
                  {law.tag && law.tag.tag}
                </Typography>
              </Grid>
              <Grid item container xs={12} className={classes.lawExtras}>
                <HelpOutlineOutlinedIcon />
                <Typography>
                  {law.questionsNumber}
                </Typography>
              </Grid>
              <Grid item container xs={12} className={classes.lawExtras}>
                <DescriptionOutlinedIcon />
                <Typography>
                  {t('free')}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Divider orientation="vertical" className={classes.divider} />
          </Grid>
          <Grid item className={classes.descriptionLaw} md={6} sm={12}>
            <Typography>
              {law.description}
            </Typography>
          </Grid>
        </Grid>
        {
          userSession?.id &&
          <Grid item xs={1} container alignItems={'center'} justify={'center'}>
            {favorite
              ? <FavoriteIcon
                onClick={() => handleFavorite(law.id)}
              /> :
              <FavoriteBorderIcon onClick={() => handleFavorite(law.id)} />}
          </Grid>
        }
      </CardContent>
    </Card>
  );
};

export default LawCard;
