import React, { Fragment, useReducer } from 'react';
import FriendContext from './FriendsContext';
import friendReducer from './friendReducer';
import { FriendStructure, ActionTypes, Action } from '../../models/';
import axios from 'axios';

const FriendContextState: React.FC = props => {
  const addFriend = async (friendEmailAddress: string) => {
    try {
      const friending = await axios.post('/api/friend', {
        email_address: friendEmailAddress
      });
      const results = await friending.data;
      const { requested_friend_id } = results;

      let action: Action<string> = {
        type: ActionTypes.ACCEPT_FRIEND_REQUEST,
        payload: requested_friend_id
      };
      dispatch(action);
    } catch (error) {}
  };

  const getAllFriends = async () => {
    try {
      const friendlistRequest = await axios.get('/api/friend');
      const friendlistArray: Array<
        FriendStructure
      > = await friendlistRequest.data;
      let action: Action<Array<FriendStructure>> = {
        type: ActionTypes.LIST_FRIENDS,
        payload: friendlistArray
      };
      dispatch(action);
    } catch (error) {}
  };

  const initialState: FriendStructure = {
    relating_user: '',
    related_user: null,
    relationship: '',
    acceptance: false,
    date_added: Date.now(),
    addFriend
  };

  const [friendState, dispatch] = useReducer(friendReducer, initialState);

  return (
    <FriendContext.Provider
      value={{
        relating_user: friendState.relating_user,
        related_user: friendState.related_user,
        relationship: friendState.relationship,
        acceptance: friendState.acceptance,
        date_added: friendState.date_added,
        addFriend: friendState.addFriend
      }}
    >
      {props.children}
    </FriendContext.Provider>
  );
};

export default FriendContextState;
