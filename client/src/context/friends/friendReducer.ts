import { Action, User, FriendStructure, AuthStatusPayload , ActionTypes} from '../../models/';

const listAllFriends = (initialState: FriendStructure, Friends: FriendStructure) => {
        return {
            ...initialState,
            Friends
        }
}

const friendReducer = <T>(initialState: FriendStructure, action: Action<T>) => {
    switch(action.type){
        case ActionTypes.LIST_FRIENDS:{
            //return   listAllFriends(initialState, action.payload);
            //return {...initialState, action.payload};
            return initialState;
        }

        default: {
            return initialState;
        }
    }
}

export default friendReducer;