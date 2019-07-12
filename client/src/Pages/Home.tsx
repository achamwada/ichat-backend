import React, { Fragment, useState } from 'react';
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
  console.log('history', history);
  //history.push('/login');

  const classes = useStyles();
  return (
    <Fragment>
      <Hidden smDown>
        <Grid item sm={3}>
          <LeftSideBar />
        </Grid>
      </Hidden>

      <Grid item xs={12} sm={4} xl={4}>
        <UserStatus />
        {chatsList.map(function(item, i) {
          return <ChatItem key={i} />;
        })}
      </Grid>
      <Hidden smDown>
        <Grid item sm={3} xl={3}>
          <Paper className={classes.root}>
            <Typography
              variant="h5"
              component="h3"
              style={{
                padding: '1rem',
                backgroundColor: '#3f51b5',
                color: '#fff'
              }}
            >
              Recent Activities
            </Typography>
            <Divider />
            <FriendsList />
          </Paper>
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
