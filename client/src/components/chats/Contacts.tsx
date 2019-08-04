import { Paper, Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import {
  createStyles,
  makeStyles,
  Theme,
  withTheme
} from '@material-ui/core/styles';
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
      borderBottom: 'solid #F0F0F0 1px',
      marginBottom: theme.spacing(1)
    },
    subHeading: {
      padding: theme.spacing(2),
      backgroundColor: theme.palette.primary.main,
      color: '#fff'
    }
  })
);

const Contacts: React.FC = props => {
  const classes = useStyles({});
  //const { theme } = props;

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
      <Typography variant="h5" component="h3" className={classes.subHeading}>
        Contacts
      </Typography>

      <List className={classes.root}>
        {friends && friends.length > 0 ? (
          friends.map(friend => {
            const { related_user } = friend;
            if (related_user) {
              const labelId = `checkbox-list-secondary-label-${
                related_user.first_name
              }`;
              return (
                <ListItem key={related_user._id} button>
                  <ListItemAvatar>
                    <Avatar alt={`Avatar n°`} src={related_user.avatar} />
                  </ListItemAvatar>
                  <ListItemText
                    id={labelId}
                    primary={`${related_user.first_name} ${
                      related_user.last_name
                    }`}
                  />
                </ListItem>
              );
            } else {
              return <ListItem key={i++}>error here</ListItem>;
            }
          })
        ) : (
          <ListItem>You have no contacts yet</ListItem>
        )}
      </List>
    </Paper>
  );
};

export default withTheme(Contacts);
