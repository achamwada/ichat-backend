import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import ChannelDetails from '../components/Channels/ChannelDetails';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../store/reducers';
import axios from 'axios';
import { ChannelTypes } from '../store/types/Channel';
import { CssBaseline } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      // marginTop: '4em', //theme.spacing(5),
      // padding: theme.spacing(3),
      // marginLeft: '18%'
    }
  })
);

const ChannelHome = () => {
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
    <>
      <CssBaseline />
      <Grid container className={classes.content}>
        {channels &&
          channels.map(channel => {
            return (
              <Grid
                item
                xs={12}
                sm={5}
                md={3}
                xl={3}
                style={{ margin: '0.5em' }}
              >
                <ChannelDetails channelData={channel} />
              </Grid>
            );
          })}
      </Grid>
    </>
  );
};

export default ChannelHome;
