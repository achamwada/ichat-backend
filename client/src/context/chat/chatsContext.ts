import React, { createContext } from 'react';
import { ChatList } from '../../models/Request';

const chatContext = createContext<ChatList>({
    chats: []
});

export default chatContext;
