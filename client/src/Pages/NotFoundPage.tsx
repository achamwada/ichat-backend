import { Divider } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: theme.spacing(2),
      height: '85vh'
    },
    title: {
      padding: theme.spacing(2)
    },
    lead: {
      marginTop: theme.spacing(3),
      padding: theme.spacing(1)
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
        <Divider />
        <Typography component="p" className={classes.lead}>
          Opps it seems what you are searching for is not available, click
          <Link to="/"> here </Link> to go back.
        </Typography>
      </Grid>
    </Fragment>
  );
};

export default NotFoundPage;
