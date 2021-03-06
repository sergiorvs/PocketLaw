import React, { useEffect, useState } from 'react';
import { useStyles } from './styles';
import { Accordion, AccordionDetails, AccordionSummary, Container, Grid, Typography } from '@material-ui/core';
import LawCard from '../../Components/LawCard';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_LAW_DETAIL } from '../../graphql/queries/Laws';

class ExpandMoreIcon extends React.Component {
  render() {
    return null;
  }
}

function LawDetail() {
  const classes = useStyles();
  const {id} = useParams();

  const {data = {}} = useQuery(GET_LAW_DETAIL, {
    variables: {
      idLaw: id
    }
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
        <Grid item xs={12} container className={classes.lawsContainer}>
          <LawCard law={law} />
        </Grid>
        <Grid item xs={10} container className={classes.questionContainer}>
        {law.questionSet && law.questionSet.map(question => (
          // <Grid item container className={classes.lawsQuestionContainer}>
            <Accordion  key={`question-${question.id}`} className={classes.accordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>{question.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {question.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          // </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default LawDetail;
