import { Paper, Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import FriendsList from '../../components/FriendsList';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { useContext, useEffect } from 'react';
import FriendContext from '../../context/friends/FriendsContext';
import { User } from '../../models';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      //width: '100%',
      //maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      //paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      //height: '70vh',
      borderBottom: 'solid #F0F0F0 1px'
    }
  })
);

const RecentActivities: React.FC = props => {
  const classes = useStyles({});

  const friendCtx = useContext(FriendContext);
  const { friends, getAllFriends } = friendCtx;

  useEffect(() => {
    getAllFriends();
    // eslint-disable-next-line
  }, []);
  //console.log('friends in Contacts component -> ', friends);
  //console.log('friendCtx -> ', friendCtx);
  var i = 1;

  return (
    <Paper className={classes.root}>
      <Typography
        variant="h5"
        component="h3"
        style={{ padding: '1rem', backgroundColor: '#3f51b5', color: '#fff' }}
      >
        Recent Activities
      </Typography>

      <FriendsList />
    </Paper>
  );
};

export default RecentActivities;
