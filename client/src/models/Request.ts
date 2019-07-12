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
  user_name: string;
  email_address: string;
  firstName?: string;
  lastName?: string;
  age?: number;
  country?: string;
  city?: string;
  phoneNumber?: string;
  __v?: number;
  _id?: string;
}

export interface Auth {
  token: string | null;
  authenticated: boolean;
  data: User | null;
  isLoading?: Loading | boolean;
  isError?: Array<ResponseError> | boolean;
}

export interface AuthStatusPayload {
  token: string | null,
  data?: User | null
}