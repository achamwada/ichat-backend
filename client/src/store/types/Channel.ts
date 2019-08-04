import { User } from '../../models/Request';

export enum ChannelTypes {
  CREATE_CHANNEL = 'CREATE_CHANNEL',
  LIST_CHANNELS = 'LIST_CHANNELS',
  UPDATE_CHANNEL = 'UPDATE_CHANNEL',
  DELETE_CHANNEL = 'DELETE_CHANNEL',
  LOAD_CHANNELS = 'LOAD_CHANNELS'
}

export interface Channel {
  _id: string;
  title: string;
  description: String;
  date_created: Date;
  owner: User;
  avatar: string;
  members: User[];
  channelChats: string[];
}
