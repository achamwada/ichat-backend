import React, { Fragment, useState } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core/';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import ChatItem from '../components/chats/ChatItem';
import LeftSideBar from '../components/layouts/sidebars/LeftSideBar';
import FriendsList from '../components/FriendsList';
import Divider from '@material-ui/core/Divider';
import UserStatus from '../components/chats/UserStatus';
import Hidden from '@material-ui/core/Hidden';
const Home = () => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        padding: theme.spacing(3),
        margin: theme.spacing(1)
      }
    })
  );

  const [chatsList, setChatList] = useState([1, 2, 3]);

  const classes = useStyles();
  return (
    <Fragment>
      <Hidden smDown>
        <Grid item sm={3}>
          <LeftSideBar />
        </Grid>
      </Hidden>

      <Grid item xs={12} sm={5} xl={5}>
        <UserStatus />
        {chatsList.map(function(item, i) {
          return <ChatItem key={i} />;
        })}
      </Grid>

      <Hidden smDown>
        <Grid item sm={4} xl={4}>
          <Paper className={classes.root}>
            <Typography variant="h5" component="h3">
              Recent Activities
            </Typography>
            <Divider />
            <FriendsList />
          </Paper>
        </Grid>
      </Hidden>
    </Fragment>
  );
};

export default Home;
