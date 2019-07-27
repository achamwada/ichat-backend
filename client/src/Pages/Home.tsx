import React, { useContext, useEffect, useState } from 'react';
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme
} from '@material-ui/core/styles';
import {
  Toolbar,
  Typography,
  IconButton,
  Divider,
  CssBaseline,
  AppBar,
  List,
  ListItemIcon,
  ListItemText,
  Drawer,
  Grid,
  Hidden,
  ListItem,
  InputBase,
  Paper
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import clsx from 'clsx';
import ChatItem from '../components/chats/ChatItem';
import Contacts from '../components/chats/Contacts';
import RecentActivities from '../components/chats/RecentActivities';
import UserStatus from '../components/chats/UserStatus';
import FriendContext from '../context/friends/FriendsContext';
import statusContext from '../context/status/statusContext';

import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex'
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: {
      //marginRight: 36
    },
    hide: {
      display: 'none'
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap'
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1
      }
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      left: '20%'
    },
    contacts: {
      position: 'fixed',
      top: '5em',
      right: '10%',
      width: '20%'
    },
    input: {
      marginLeft: 8,
      flex: 1
    },
    iconButton: {
      padding: 10
    },
    divider: {
      width: 1,
      height: 28,
      margin: 4
    },
    search: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: '20%',
      right: '10%',
      position: 'fixed'
    }
  })
);

export default function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

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

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            iChat
          </Typography>

          <Paper className={classes.search}>
            <IconButton className={classes.iconButton} aria-label="menu">
              <MenuIcon />
            </IconButton>
            <InputBase
              className={classes.input}
              placeholder="Search for friends"
              inputProps={{ 'aria-label': 'search for friends' }}
            />
            <IconButton className={classes.iconButton} aria-label="search">
              <SearchIcon />
            </IconButton>
            <Divider className={classes.divider} />
            <IconButton
              color="primary"
              className={classes.iconButton}
              aria-label="directions"
            >
              <DirectionsIcon />
            </IconButton>
          </Paper>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container style={{ marginLeft: '9em' }}>
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
            <Grid item sm={5} xl={5} className={classes.contacts}>
              <Contacts />
              <RecentActivities />
            </Grid>
          </Hidden>
        </Grid>
      </main>
    </div>
  );
}
