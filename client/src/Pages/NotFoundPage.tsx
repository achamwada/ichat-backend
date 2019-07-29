import { Divider, Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: '2.5em',
      marginLeft: '15%',
      //margin: 'auto',
      height: '85vh',
      textAlign: 'center'
    },
    title: {
      marginTop: theme.spacing(5),
      padding: theme.spacing(3),
      paddingTop: theme.spacing(3)
      //textAlign: 'center'
    },
    lead: {
      paddingTop: theme.spacing(3),
      //padding: theme.spacing(1),
      height: '70vh'
    }
  })
);

const NotFoundPage: React.FC = props => {
  const classes = useStyles({});
  return (
    <Fragment>
      <Grid item sm={9} className={classes.container}>
        <Typography variant="h4" component="p" className={classes.title}>
          404 | Page not found :(
        </Typography>
        {/* <Divider /> */}
        <Typography component="p" className={classes.lead}>
          Opps it seems what you are searching for is not available, click
          <Link to="/"> here </Link> to go back.
        </Typography>
      </Grid>
    </Fragment>
  );
};

export default NotFoundPage;
