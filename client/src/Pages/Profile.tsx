import React, { Fragment } from 'react';
import ProfileCoverSlider from '../components/ProfileCoverSlider';
import { Grid, Paper } from '@material-ui/core';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import UserStatus from '../components/chats/UserStatus';
import Contacts from '../components/chats/Contacts';
import PhotoGallery from '../components/PhotoGallery';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gridItem: {
      //padding: theme.spacing(2),
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3)
    },
    container: {
      marginTop: theme.spacing(2)
    }
  })
);

const Profile: React.FC = props => {
  const classes = useStyles();
  return (
    <Fragment>
      <ProfileCoverSlider />

      <Grid container direction="row" className={classes.container}>
        <Grid item sm={4}>
          <Paper>
            <PhotoGallery />
          </Paper>
        </Grid>

        <Grid item sm={5} className={classes.gridItem}>
          <Paper>
            <UserStatus />
          </Paper>
        </Grid>

        <Grid item sm={2}>
          <Contacts />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Profile;
