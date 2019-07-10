import React, { Fragment, useState, useContext, useEffect } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core/';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import ChatItem from '../components/chats/ChatItem';
import LeftSideBar from '../components/layouts/sidebars/LeftSideBar';
import FriendsList from '../components/FriendsList';
import Divider from '@material-ui/core/Divider';
import UserStatus from '../components/chats/UserStatus';
import Hidden from '@material-ui/core/Hidden';
import Contacts from '../components/chats/Contacts';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import statusContext from '../context/status/statusContext';
import { Status } from '../models/Request';
import FriendContext from '../context/friends/FriendsContext';

const Home: React.FC<RouteComponentProps> = ({ history }) => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        //padding: theme.spacing(3),
        margin: theme.spacing(1)
      }
    })
  );

  const [chatsList, setChatList] = useState([1, 2, 3]);
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

  console.log('statuses ==>', statuses);
  console.log('friends ==>', friends);

  //history.push('/login');

  //history.push('/login');

  const classes = useStyles();
  return (
    <Fragment>
      <Hidden smDown>
        <Grid item md={3}>
          <LeftSideBar />
        </Grid>
      </Hidden>

      <Grid item xs={12} sm={6} xl={6}>
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
        <Grid item sm={3} xl={3}>
          <Contacts />
        </Grid>
      </Hidden>

      <Hidden smDown>
        <Grid item sm={2} xl={2}>
          <Contacts />
        </Grid>
      </Hidden>

      <Hidden smDown>
        <Grid item sm={2} xl={2}>
          <Contacts />
        </Grid>
      </Hidden>
    </Fragment>
  );
};

export default withRouter(Home);
