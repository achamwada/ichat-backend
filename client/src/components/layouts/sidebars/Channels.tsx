import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import {
  ListItem,
  ListSubheader,
  Paper,
  ListItemIcon,
  Button
} from '@material-ui/core';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React, { Fragment, useEffect } from 'react';
import { FixedSizeList, ListChildComponentProps } from 'react-window';

import { useSelector, useDispatch } from 'react-redux';
import { Channel, ChannelTypes } from '../../../store/types/Channel';
import { AppState } from '../../../store/reducers';
import axios from 'axios';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      height: 400,
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    },
    inline: {
      display: 'inline'
    },
    listItem: {
      //padding: theme.spacing(2)
    },
    subHeading: {
      padding: theme.spacing(2),
      backgroundColor: theme.palette.primary.main,
      color: '#fff'
    },

    list: {
      border: `1px solid #e0e0e0`,
      padding: 0
    },
    faIcon: {
      fontSize: 18
      // padding if needed (e.g., theme.spacing.unit * 2)
      // margin if needed
    },
    buttonItem: {
      border: 'none',
      borderRadius: 0
      //borderBottom: `1px solid ${theme.palette.primary.light}`
    }
  })
);

const Channels: React.FC = props => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const loadChannels = async () => {
    const req = await axios.get('/api/channels');

    const { channels } = await req.data;

    dispatch({ type: ChannelTypes.LOAD_CHANNELS, payload: channels });
    console.log('channels', channels);
  };

  useEffect(() => {
    loadChannels();
  }, [dispatch]);

  const channels = useSelector((state: AppState) => state.channels);

  return (
    // <FixedSizeList height={400} width="100%" itemSize={5} itemCount={1}>
    //   {/* {channels && channels.map(Channel => <p>test</p>)} */}
    //   {channels && Row(channels[0])}
    // </FixedSizeList>

    <List
      className={classes.list}
      style={{ height: '400px', overflow: 'scroll' }}
    >
      <ListSubheader style={{ padding: 0 }}>
        <Typography variant="h5" className={classes.subHeading}>
          Your Channels
        </Typography>
      </ListSubheader>
      {channels &&
        channels.map((channel, position) => {
          return (
            <React.Fragment key={channel._id}>
              <Button
                variant="outlined"
                color="secondary"
                fullWidth={true}
                className={classes.buttonItem}
              >
                <ListItem alignItems="flex-start" className={classes.listItem}>
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={channel.avatar} />
                  </ListItemAvatar>

                  <ListItemText
                    style={{ height: '100%', verticalAlign: 'center' }}
                    primary={channel.title}
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                        >
                          <ListItemIcon className="container" title={'member'}>
                            <FontAwesomeIcon
                              className={classes.faIcon}
                              icon={faUserFriends}
                            />
                          </ListItemIcon>{' '}
                          2 members
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                {position !== channels.length - 1 && (
                  <Divider variant="inset" component="li" />
                )}
              </Button>
            </React.Fragment>
          );
        })}
    </List>
  );
};

export default Channels;
