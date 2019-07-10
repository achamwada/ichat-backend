import { createContext } from 'react';
import { FriendList } from '../../models';

const FriendContext = createContext<FriendList>({
  friends: null,
  addFriend: (): void => {},
  getAllFriends: (): void => {}
});

export default FriendContext;
