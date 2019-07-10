import {
  Action,
  User,
  FriendStructure,
  AuthStatusPayload,
  ActionTypes,
  FriendList
} from '../../models/';

const listAllFriends = (initialState: FriendList, Friends: FriendStructure[]): FriendList => {
  return {
    ...initialState,
    friends: Friends
  }
};

const friendReducer = <T>(initialState: FriendList, action: Action<T>): FriendList => {
  switch (action.type) {
    case ActionTypes.LIST_FRIENDS: {
      return listAllFriends(initialState, action.payload);
    }

    default: {
      return initialState;
    }
  }
};

export default friendReducer;
