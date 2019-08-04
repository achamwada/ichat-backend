import { ChatTypes, Chat } from '../types/Chat';

export interface CreateChat {
  type: ChatTypes.CREATE_CHAT;
  payload: Chat;
}

export interface UpdateChat {
  type: ChatTypes.UPDATE_CHAT;
  payload: Chat;
}

export interface ListChats {
  type: ChatTypes.LIST_CHATS;
  payload: string;
}

export interface DeleteChat {
  type: ChatTypes.DELETE_CHAT;
  payload: string;
}

export type ChatActions = CreateChat | UpdateChat | ListChats | DeleteChat;
