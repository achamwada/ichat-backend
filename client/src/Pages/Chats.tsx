import React, { useContext } from 'react';
import { AuthContext } from '../context';

const Chats: React.FC = () => {
  const auth = useContext(AuthContext);

  const { authenticated } = auth;
  return <React.Fragment>{JSON.stringify({ authenticated })}</React.Fragment>;
};

export default Chats;
