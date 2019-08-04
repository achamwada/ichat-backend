import { User } from '../../models/Request';

export enum ChatTypes {
  CREATE_CHAT = 'CREATE_CHAT',
  UPDATE_CHAT = 'UPDATE_CHAT',
  LIST_CHATS = 'LIST_CHATS',
  DELETE_CHAT = 'DELETE_CHAT'
}

export interface Chat {
  _id: string;
  message: string;
  created_at: Date;
  user: string;
  channel: string;
}
