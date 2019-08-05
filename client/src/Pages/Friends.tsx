import React, { useEffect, useContext, useState } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';
import FriendsContext from '../context/friends/FriendsContext';
import { FriendStructure } from '../models/Request';
import { Grid, Card } from '@material-ui/core';
import FriendItem from '../components/FriendItem';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    }
  })
);

const Friends: React.FC = props => {
  const classes = useStyles();

  const friendsCntx = useContext(FriendsContext);

  const { friends, getAllFriends } = friendsCntx;

  const [friendsList, setFriendsList] = useState(friends);
  useEffect(() => {
    getAllFriends();
    setFriendsList(friends);
    console.log('friends', friends);
  }, [friendsList]);

  return (
    <Grid container direction="row" style={{ marginBottom: '2em' }}>
      {friends
        ? friends.map(friend => {
            return (
              <Grid item key={friend.related_user.__v} sm={5} md={4} lg={4}>
                <FriendItem friend={friend} />
              </Grid>
            );
          })
        : 'No friends yet'}
    </Grid>
  );
};

export default Friends;
