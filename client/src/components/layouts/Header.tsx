import {
  faEnvelope,
  faHome,
  faImages,
  faSignOutAlt,
  faUser,
  faCommentDots,
  faUsers,
  faCogs,
  faInfoCircle,
  faBalanceScale,
  faUserFriends
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Toolbar,
  Typography,
  Avatar
} from '@material-ui/core';
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme
} from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import DirectionsIcon from '@material-ui/icons/Directions';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import SearchIcon from '@material-ui/icons/Search';
import clsx from 'clsx';
import React, { useState, useEffect, useContext, Fragment } from 'react';
import { RouteComponentProps, withRouter, Redirect } from 'react-router-dom';
import { AuthContext } from '../../context/auth/AuthContext';
import PageContext from '../../context/page/PageContext';
import { PageDetails } from '../../models/Request';
import Badge from '@material-ui/core/Badge';

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
    },
    faIcon: {
      fontSize: 18
      // padding if needed (e.g., theme.spacing.unit * 2)
      // margin if needed
    },
    muiIcon: {
      fontSize: 18
      // padding if needed
      // margin if needed
    },
    margin: {
      // margin: theme.spacing(2),
      // marginRight: theme.spacing(3)
    },
    avatar: {
      //margin: 10
    }
  })
);

interface DrawerMenuItem {
  menuText: string;
  link: string;
  icon: any;
}

interface ChildComponentProps extends RouteComponentProps<any> {}

const Header: React.FC<ChildComponentProps> = ({ history, children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [selectedPage, setSelectedPage] = useState({
    pageID: 1,
    title: 'iChat',
    url: '/',
    description: 'Home page',
    icon: <FontAwesomeIcon className={classes.faIcon} icon={faHome} />
  });

  const pageCtx = useContext(PageContext);
  const { details, setPage } = pageCtx;

  useEffect(() => {
    setPage(selectedPage);
  }, [selectedPage]);

  const drawerMenu: Array<PageDetails> = [
    {
      pageID: 1,
      title: 'Home',
      url: '/',
      description: 'Home page',
      icon: <FontAwesomeIcon className={classes.faIcon} icon={faHome} />
    },
    {
      pageID: 2,
      title: 'Profile',
      url: '/profile',
      description: 'Profile page',
      icon: (
        <Avatar
          alt="Remy Sharp"
          src="https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/32191135_1822664874466099_3864436570203357184_o.jpg?_nc_cat=108&_nc_oc=AQnh1LgNu4dK3BvQfENPTwpzUrkv-DDT4hoZS3IvF9y-s61IcIjqQT8cO1c0rtIP_lAi_mT9dUilPUwMPiQyFFNZ&_nc_ht=scontent-lhr3-1.xx&oh=bb5d550f48b97316852f29830326f2ff&oe=5DE93667"
          className={classes.avatar}
        />
      ) //<FontAwesomeIcon className={classes.faIcon} icon={faUser} />
    },
    {
      pageID: 3,
      title: 'Friends',
      url: '/friends',
      description: 'Friends page',
      icon: <FontAwesomeIcon className={classes.faIcon} icon={faUserFriends} />
    },

    {
      pageID: 4,
      title: 'Chats',
      url: '/chats',
      description: 'Chats page',
      icon: <FontAwesomeIcon className={classes.faIcon} icon={faCommentDots} />
    },

    {
      pageID: 5,
      title: 'Channels',
      url: '/channels',
      description: 'Channels page',
      icon: <FontAwesomeIcon className={classes.faIcon} icon={faUsers} />
    },

    {
      pageID: 6,
      title: 'Inbox',
      url: '/inbox',
      description: 'inbox page',
      icon: (
        <Badge className={classes.margin} badgeContent={3} color="secondary">
          <MailIcon />
        </Badge>
      )
    },
    {
      pageID: 7,
      title: 'Gallery',
      url: '/gallery',
      description: 'Gallery page',
      icon: <FontAwesomeIcon className={classes.faIcon} icon={faImages} />
    },
    {
      pageID: 8,
      title: 'Log Out',
      url: '/login',
      description: 'Logged Out',
      icon: <FontAwesomeIcon className={classes.faIcon} icon={faSignOutAlt} />
    }
  ];

  const secondaryMenu = [
    {
      pageID: 9,
      title: 'Preferences',
      url: '/preferences',
      description: 'Customise your experience',
      icon: <FontAwesomeIcon className={classes.faIcon} icon={faCogs} />
    },
    {
      pageID: 10,
      title: 'About Us',
      url: '/about',
      description: 'Learn more about iChat',
      icon: <FontAwesomeIcon className={classes.faIcon} icon={faInfoCircle} />
    },
    {
      pageID: 11,
      title: 'T & C',
      url: '/terms',
      description: 'Terms and Conditions',
      icon: <FontAwesomeIcon className={classes.faIcon} icon={faBalanceScale} />
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
        if (!authenticated && history.location.pathname !== '/login') {
          history.push('/login');
        } else if (authenticated && history.location.pathname == '/login') {
          history.push('/');
        } else if (!authenticated && history.location.pathname == '/login') {
          return null;
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
                    {selectedPage.title}
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

                {details && details.url !== 'channels' ? (
                  <Fragment>
                    <List>
                      {drawerMenu.map(page => (
                        <ListItem
                          button
                          selected={page.url === selectedPage.url}
                          key={page.pageID}
                          onClick={() => {
                            if (page.title === 'Log Out') {
                              localStorage.removeItem('auth-token');
                              window.location.href = page.url;
                            } else {
                              setPage(page);
                              setSelectedPage(page);
                              history.push(page.url);
                            }
                          }}
                        >
                          <ListItemIcon className="container">
                            {page.icon}
                          </ListItemIcon>
                          <ListItemText primary={page.title} />
                        </ListItem>
                      ))}
                    </List>
                    <Divider />
                    <List>
                      {secondaryMenu.map(menu => (
                        <ListItem
                          button
                          key={menu.pageID}
                          onClick={() => {
                            setPage(menu);
                            setSelectedPage(menu);
                            history.push(menu.url);
                          }}
                        >
                          <ListItemIcon>{menu.icon}</ListItemIcon>
                          <ListItemText primary={menu.title} />
                        </ListItem>
                      ))}
                    </List>
                  </Fragment>
                ) : (
                  'error'
                )}
              </Drawer>

              <main className={classes.content}>
                <div className={classes.toolbar} />
                {children}
              </main>
            </div>
          );
        }
      }}
    </AuthContext.Consumer>
  );
};

export default withRouter(Header);
