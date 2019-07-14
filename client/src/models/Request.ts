export enum ReqMethods {
  POST = "POST",
  GET = "GET",
  PUT = "PUT",
  DELETE = "DELETE"
}

export interface SignIn {
  email_address: string;
  password: string;
}

export interface Request<T> {
  url: string;
  method: string;
  payload?: T;
  responseType?: string;
  token?: string | null;
}

export interface Response<U> {
  user: U;
}

export interface ResponseError {
  message: string;
  statusCode: number;
}

export interface Loading {
  info: string;
  timeout: number;
}

export interface Action<T> {
  type: string;
  payload: T;
}

export interface User {
  user_name?: string;
  email_address?: string;
  // firstName?: string;
  // lastName?: string;
  age?: number;
  country?: string;
  city?: string;
  //phoneNumber?: string;
  __v?: number;
  _id?: string;
  password?: string;
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  avatar?: string;
  skills?: string;
  bio?: string;
  date_added?: Date;
}

export interface Auth {
  user: User;
  authenticated: boolean;
  loading?: Loading | boolean;
  errors?: Array<ResponseError> | boolean;
  loginUser: Function,
  loadUserData: Function | null
}

export interface AuthStatusPayload {
  token?: string | null,
  data?: User | null
}

export interface LoginUser{
  email_address: string;
  password: string;
}

export interface UserAuthenticated {
  token: string;
  authenticated: boolean;
}

export interface FriendStructure {
  relating_user: string;
  related_user: Array<User> | null;
  relationship: string;
  acceptance: boolean;
  date_added: number;
  addFriend: Function;
}


export enum relationship {
  acquaintance = 'acquaintance',
  close = 'close',
  professional = 'professional',
  none = ''
}