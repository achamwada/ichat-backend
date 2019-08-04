import { combineReducers } from 'redux';
import channelReducer from './channel';
import chatReducer from './chat';

const rootReducer = combineReducers({
  chats: chatReducer,
  channels: channelReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
