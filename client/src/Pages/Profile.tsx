import React, { useEffect, useContext, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CssBaseline, Grid, Avatar, Paper } from '@material-ui/core';
import PlaceholderImage from '../images/LandingPage/hero/coffee.jpg';
import TopStories from '../components/layouts/sidebars/TopStories';
import { AuthContext } from '../context/auth/AuthContext';
import ProfileGallery from '../components/PhotoGallery';
import { ThemeProvider } from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      marginTop: '5em',
      marginLeft: '15%'
      // width: '60%'
    },
    card: {},
    media: {
      height: 140
    },
    profileAvatar: {
      margin: 10,
      width: 60,
      height: 60
    },
    galleryContainer: {
      //border: `0.5px solid #81d4fa`,
      marginTop: theme.spacing(3),
      padding: theme.spacing(1),
      boxShadow: `1px 5px 5px #bdbdbd`
    },
    interestsContainer: {
      position: 'fixed',
      top: '5em',
      right: '5px',
      width: '100%'
    }
  })
);

const Profile: React.FC = () => {
  const classes = useStyles();

  const userCxt = useContext(AuthContext);
  const { user, loadUserData } = userCxt;

  useEffect(() => {
    loadUserData();
    console.log('userDetails', user);
    console.log('userCxt', userCxt);
    // eslint-disable-next-line
  }, []);

  return (
    <Grid container>
      <Grid item className={classes.content} sm={7}>
        <Grid container>
          <Grid sm={12}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={PlaceholderImage}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Grid container>
                    <Grid item>
                      <Typography gutterBottom variant="h5" component="h2">
                        <Avatar
                          alt="Remy Sharp"
                          src={user.avatar}
                          className={classes.profileAvatar}
                        />
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {user.first_name + ' ' + user.last_name}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        style={{ marginTop: '2em' }}
                      >
                        {user.bio ? user.bio : 'Missing bio...'}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid sm={12} className={classes.galleryContainer}>
            <Typography variant="h5" style={{ padding: '20px' }}>
              Profile Gallery
            </Typography>
            <Paper>
              <ProfileGallery />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid sm={3} className={classes.interestsContainer}>
        <TopStories />
        <br />
        <TopStories />
      </Grid>
    </Grid>
  );
};

export default Profile;
