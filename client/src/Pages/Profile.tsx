import React, { Fragment } from 'react';
import ProfileCoverSlider from '../components/ProfileCoverSlider';
import { Grid, Paper } from '@material-ui/core';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import UserStatus from '../components/chats/UserStatus';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    panel: {
      padding: theme.spacing(2),
      margin: theme.spacing(3)
    }
  })
);

const Profile: React.FC = props => {
  const classes = useStyles();
  return (
    <Fragment>
      <ProfileCoverSlider />

      <Grid container direction="row">
        <Grid item sm={3}>
          <Paper className={classes.panel}>Left pane</Paper>
        </Grid>

        <Grid item sm={6}>
          <Paper className={classes.panel}>
            <UserStatus />
          </Paper>
        </Grid>

        <Grid item sm={3}>
          <Paper className={classes.panel}>right pane</Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Profile;
