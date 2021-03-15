import React, { useEffect, useState } from 'react';
import { useStyles } from './styles';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Fab,
  Grid,
  Typography
} from '@material-ui/core';
import LawCard from '../../Components/LawCard';
import {useHistory, useParams} from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_LAW_DETAIL } from '../../graphql/queries/Laws';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import clsx from "clsx";


class ExpandMoreIcon extends React.Component {
  render() {
    return <ExpandMoreOutlinedIcon />;
  }
}

function LawDetail() {
  const classes = useStyles();
  const {id} = useParams();
  const history = useHistory();

  const {data = {}} = useQuery(GET_LAW_DETAIL, {
    variables: {
      idLaw: id,
    },
    fetchPolicy: 'network-only',
  });

  const {getQuestionsByLaw = []} = data;

  const [law, setLaw] = useState({});

  useEffect(() => {
    if (getQuestionsByLaw.length) {
      setLaw(getQuestionsByLaw[0]);
    }
  }, [getQuestionsByLaw]);

  return (
    <Container className={classes.baseContainer}>
      <Grid item container xs={12}>
        <Grid item xs={1} container>
          <ArrowBackIosIcon
            className={classes.goBackButton}
            onClick={() => history.goBack()}
          />
        </Grid>
        <Grid item xs={11} container className={classes.lawsContainer}>
          <LawCard law={law} />
        </Grid>
      </Grid>
      <Grid item xs={10} container className={classes.questionContainer}>
        {law.questionSet && law.questionSet.map(question => (
          <Accordion  key={`question-${question.id}`} className={classes.accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Grid item container>
                <Grid item xs={9}>
                  <Typography className={classes.heading}>{question.question}</Typography>
                </Grid>
                <Grid item container xs={3} justify={'flex-end'}>
                  <Fab
                    aria-label='add'
                    className={
                      clsx(question.status===1?classes.simpleAnswerFabPositive:
                        question.status===-1?
                          classes.simpleAnswerFabNegative:
                          classes.simpleAnswerFab)
                    }
                    size={'small'}
                    classes={{root: classes.simpleAnswerFab}}
                  >
                    {question.simpleAnswer}
                  </Fab>
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {question.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Grid>
    </Container>
  );
}

export default LawDetail;
