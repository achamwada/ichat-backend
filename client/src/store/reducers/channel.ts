import { ChannelTypes, Channel } from '../types/Channel';
import { ChannelActions } from '../actions/Channel';

const initialChannel: Channel[] = [];

const channelReducer = (
  initState = initialChannel,
  action: ChannelActions
): Channel[] => {
  console.log('action in reducer', action);
  switch (action.type) {
    case ChannelTypes.CREATE_CHANNEL:
      return [...initState, action.payload];
    case ChannelTypes.DELETE_CHANNEL:
      return initState.filter(channel => channel._id !== action.payload);
    case ChannelTypes.UPDATE_CHANNEL:
      return initState.map(channel => {
        if (channel._id == action.payload._id) {
          return { ...channel, ...action.payload };
        } else {
          return channel;
        }
      });
    case ChannelTypes.LOAD_CHANNELS:
      return action.payload;
    default:
      return initState;
  }
};

export default channelReducer;
