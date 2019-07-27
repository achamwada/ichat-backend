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
import { RouteComponentProps, withRouter, Link } from 'react-router-dom';
import { AuthContext } from '../../context/auth/AuthContext';

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

interface DrawerMenuItem {
  menuText: string;
  link: string;
  icon: string;
}

interface ChildComponentProps extends RouteComponentProps<any> {}

const Header: React.SFC<ChildComponentProps> = ({ history }) => {
  const [page, setPage] = useState('iChat');
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const drawerMenu: Array<DrawerMenuItem> = [
    {
      menuText: 'Home',
      link: '/',
      icon: ''
    },
    {
      menuText: 'Profile',
      link: '/profile',
      icon: ''
    },
    {
      menuText: 'Channels',
      link: '/channels',
      icon: ''
    },

    {
      menuText: 'Inbox',
      link: '/inbox',
      icon: ''
    },
    {
      menuText: 'Gallery',
      link: '/gallery',
      icon: ''
    }
  ];

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <AuthContext.Consumer>
      {({ authenticated }) => {
        if (!authenticated) {
          //history.push('/login');
          return null; //<Redirect to="/login" push />;
        } else {
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
                    {page}
                  </Typography>

                  <Paper className={classes.search}>
                    <IconButton
                      className={classes.iconButton}
                      aria-label="menu"
                    >
                      <MenuIcon />
                    </IconButton>
                    <InputBase
                      className={classes.input}
                      placeholder="Search for friends"
                      inputProps={{ 'aria-label': 'search for friends' }}
                    />
                    <IconButton
                      className={classes.iconButton}
                      aria-label="search"
                    >
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
                  {drawerMenu.map(({ menuText, link }, index) => (
                    <ListItem
                      button
                      key={menuText}
                      onClick={() => {
                        setPage(menuText);
                        history.push(link);
                      }}
                    >
                      <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary={menuText} />
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
            </div>
          );
        }
      }}
    </AuthContext.Consumer>
  );
};

export default withRouter(Header);
