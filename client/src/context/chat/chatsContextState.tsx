import React, { Fragment, useReducer } from 'react';
import ChatContext from './chatsContext';
import chatsReducer from './chatsReducer';
import { ChatList, Action } from '../../models/Request';

const ChatContextState: React.FC = props => {
  const initialState: ChatList = {
    chats: [
      {
        from: 'Alex',
        channel: 'Golang',
        date_created: '20/07/2019',
        message: 'hello'
      },
      {
        from: 'Martha',
        channel: 'Golang',
        date_created: '20/07/2019',
        message: 'hello'
      },
      {
        from: 'Junior',
        channel: 'Golang',
        date_created: '20/07/2019',
        message: 'hello'
      }
    ]
  };

  const [chatState, dispatch] = useReducer(chatsReducer, initialState);
  return (
    <ChatContext.Provider
      value={{
        chats: chatState.chats
      }}
    >
      {props.children}
    </ChatContext.Provider>
  );
};

export default ChatContextState;
