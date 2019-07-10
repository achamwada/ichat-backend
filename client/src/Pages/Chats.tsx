import React, { useContext } from 'react';
import { AuthContext } from '../context';

const Chats: React.FC = () => {
  const auth = useContext(AuthContext);

  const { token, data, authenticated } = auth;
  return (
    <React.Fragment>
      {JSON.stringify({ token, data, authenticated })}
    </React.Fragment>
  );
};

export default Chats;
