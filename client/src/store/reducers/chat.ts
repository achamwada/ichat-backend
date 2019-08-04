import { ChatActions } from '../actions/Chat';
import { Chat, ChatTypes } from '../types/Chat';

const initialState: Chat[] = [];
const chatReducer = (initState = initialState, action: ChatActions): Chat[] => {
  switch (action.type) {
    case ChatTypes.CREATE_CHAT:
      return [...initState, action.payload];
    case ChatTypes.UPDATE_CHAT:
      return initState.map(chat => {
        if (chat._id === action.payload._id) {
          return { ...chat, ...action.payload };
        } else {
          return chat;
        }
      });

    case ChatTypes.DELETE_CHAT:
      return initState.filter(chat => chat._id !== action.payload);
    default:
      return initState;
  }
};

export default chatReducer;
