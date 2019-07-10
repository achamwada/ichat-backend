import { ChatList, Action } from '../../models/Request';

const chatsReducer = <T>(initialState: ChatList, action: Action<T>): ChatList =>{
    return initialState;
}

export default chatsReducer;