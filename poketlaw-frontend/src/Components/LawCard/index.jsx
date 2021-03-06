import { Card, CardContent, Divider, Grid, Typography } from '@material-ui/core';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import React, { useState } from 'react';
import { useStyles } from './styles';
import { getImageUrl } from '../../utils/tools';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import routesDictionary from '../../routes/routesDict';
import { useHistory } from 'react-router-dom';

const LawCard = ({law}) => {
  const classes = useStyles();
  const history = useHistory();
  const [favorite, setFavorite] = useState(false);

  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <Card className={classes.root} onClick={() => history.push(routesDictionary.lawDetail(law.id))}>
      <CardContent className={classes.cardContent}>
        <Grid item container className={classes.imageLaw} alignItems={'center'} xs={2}>
          <img
            alt={'lawImage'}
            src={getImageUrl(law.image)}
            className={classes.lawImage}
          />
        </Grid>
        <Grid item container className={classes.title} xs={3} justify={'flex-end'}>
          <Grid item container xs={12}>
            <Typography variant={'subtitle1'} className={classes.lawTitle}>
              {law.title}
            </Typography>
          </Grid>
          <Grid item container xs={10}>
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
                Gratis
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Divider orientation="vertical" className={classes.divider} />
        </Grid>
        <Grid item className={classes.descriptionLaw} xs={6}>
          <Typography>
            {law.description}
          </Typography>
        </Grid>
        <Grid item xs={1} container alignItems={'center'} justify={'center'}>
          {favorite ? <FavoriteIcon onClick={handleFavorite} /> : <FavoriteBorderIcon onClick={handleFavorite} />}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default LawCard;
