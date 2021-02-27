import {Divider, Grid, Typography} from "@material-ui/core";
import LocalOfferOutlinedIcon from "@material-ui/icons/LocalOfferOutlined";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import React from "react";
import {useStyles} from "./styles";
import {useQuery} from "@apollo/client";
import {GET_ALL_LAWS} from "../../graphql/queries/Laws";
import {getImageUrl} from "../../utils/tools";

const LawsList = ({searchFilter}) => {
  const classes = useStyles();

  const { data={} } = useQuery(GET_ALL_LAWS, {variables: {searchFilter}});
  const { objects=[] } = data.getAllLaws?data.getAllLaws:{}

  return(
    <>
      {objects?.map((law) => (
        <Grid item container key={law.id} className={classes.lawsDescription}>
          <Grid item container
                className={classes.imageLaw} alignItems={"center"} xs={2}>
            <img
              alt={"lawImage"}
              src={getImageUrl(law.image)}
              className={classes.lawImage}
            />
          </Grid>
          <Grid item container className={classes.title} xs={3}>
            <Grid item container xs={12}>
              <Typography variant={"subtitle1"} className={classes.lawTitle}>
                {law.title}
              </Typography>
            </Grid>
            <Grid item container xs={12} style={{marginLeft: '30%'}}>
              <Grid item container xs={12} className={classes.lawExtras}>
                <LocalOfferOutlinedIcon/>
                <Typography>
                  {law.tag.tag}
                </Typography>
              </Grid>
              <Grid item container xs={12} className={classes.lawExtras}>
                <HelpOutlineOutlinedIcon/>
                <Typography>
                  {law.questionsNumber}
                </Typography>
              </Grid>
              <Grid item container xs={12} className={classes.lawExtras}>
                <DescriptionOutlinedIcon/>
                <Typography>
                  Gratis
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Divider orientation="vertical" className={classes.divider}/>
          </Grid>
          <Grid item className={classes.descriptionLaw} xs={6}>
            <Typography>
              {law.description}
            </Typography>
          </Grid>
        </Grid>
      ))}
    </>
  )
}

export default LawsList;
