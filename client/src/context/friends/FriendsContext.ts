import { createContext } from 'react';
import { FriendStructure } from '../../models';

const FriendContext = createContext<Partial<FriendStructure>>({
    relating_user: '',
  related_user: [],
  relationship: '',
  acceptance: false,
  date_added: Date.now(),
  addFriend: (): void => {},
  getAllFriends: (): void => {}
});

export default FriendContext;