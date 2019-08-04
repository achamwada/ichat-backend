import { ChannelTypes, Channel } from '../types/Channel';

export interface CreateChannel {
  type: ChannelTypes.CREATE_CHANNEL;
  payload: Channel;
}

export interface UpdateChannel {
  type: ChannelTypes.UPDATE_CHANNEL;
  payload: Channel;
}

export interface ListChannels {
  type: ChannelTypes.LIST_CHANNELS;
}

export interface DeleteChannel {
  type: ChannelTypes.DELETE_CHANNEL;
  payload: string;
}

export interface LoadChannels {
  type: ChannelTypes.LOAD_CHANNELS;
  payload: Channel[];
}

export type ChannelActions =
  | CreateChannel
  | UpdateChannel
  | ListChannels
  | DeleteChannel
  | LoadChannels;
