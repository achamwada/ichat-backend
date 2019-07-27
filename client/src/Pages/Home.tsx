import React, { useContext, useEffect, useState, Fragment } from 'react';
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme
} from '@material-ui/core/styles';
import { CssBaseline, Grid, Hidden } from '@material-ui/core';

import ChatItem from '../components/chats/ChatItem';
import Contacts from '../components/chats/Contacts';
import RecentActivities from '../components/chats/RecentActivities';
import UserStatus from '../components/chats/UserStatus';
import FriendContext from '../context/friends/FriendsContext';
import statusContext from '../context/status/statusContext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      marginTop: theme.spacing(3),
      padding: theme.spacing(3),
      marginLeft: '18%'
    },
    contacts: {
      position: 'fixed',
      top: '5em',
      right: '10%',
      width: '20%'
    }
  })
);

export default function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const statusCtx = useContext(statusContext);
  const { statuses, getStatuses } = statusCtx;

  useEffect(() => {
    getStatuses();
    //console.log('statuses ==>', statuses);
    // eslint-disable-next-line
  }, []);

  const friendCtx = useContext(FriendContext);
  const { friends, getAllFriends } = friendCtx;

  useEffect(() => {
    getAllFriends();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <CssBaseline />
      <Grid container className={classes.content}>
        <Grid item xs={12} sm={6} xl={6} style={{ marginBottom: '2em' }}>
          <UserStatus />
          {statuses && statuses.length > 0 ? (
            statuses.map((status, index) => {
              return <ChatItem key={status._id} status={status} />;
            })
          ) : (
            <p>no statuses</p>
          )}
        </Grid>
        <Hidden smDown>
          <Grid item sm={5} xl={5} className={classes.contacts}>
            <Contacts />
            <RecentActivities />
          </Grid>
        </Hidden>
      </Grid>
    </Fragment>
  );
}
