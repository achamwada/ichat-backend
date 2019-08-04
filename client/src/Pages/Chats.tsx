import React, { useContext } from 'react';
//import { AuthContext } from '../context';
import Grid from '@material-ui/core/Grid';
import Channels from '../components/chats/ChatContent/channels/Channels';
import Messages from '../components/chats/ChatContent/messages/Messages';
import Hidden from '@material-ui/core/Hidden';
import Contacts from '../components/chats/Contacts';
import chatContext from '../context/chat/chatsContext';
import { Paper } from '@material-ui/core';

const Chats: React.FC = () => {
  const chatCtx = useContext(chatContext);
  const { chats } = chatCtx;

  return (
    <Grid container direction="row">
      <Grid item sm={12} md={8}>
        <Messages
          chats={chats}
          messageFromInput="test"
          channel="test"
          sendMessage={() => console.log('object')}
          sendChatAction={() => console.log('object')}
        />
      </Grid>

      <Hidden smDown>
        <Grid item sm={3} xl={3}>
          <Contacts />
        </Grid>
      </Hidden>
    </Grid>
  );
};

export default Chats;
