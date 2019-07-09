export enum ReqMethods {
    POST = 'POST',
    GET = 'GET',
    PUT = 'PUT',
    DELETE = 'DELETE'
}

export interface Request<T> {
    url: string;
    method: string,
    payload?: T,
    responseType?: string,
    token: string
}

export interface Response<U> {
    data?: U,
    status?: number,
    errors?: Array<ResponseError>,

}

export interface ResponseError {
    message: string,
    statusCode: number,
}

export interface Loading {
    info: string,
    timeout: number
}

export interface ActionCreator<T>{
    action: string,
    payload?: T

}

export interface User {
    user_name: string,
    email_address: string,
    firstName?: string,
    lastName?: string,
    age?: number,
    country?: string,
    city?: string,
    phoneNumber?: string,

};

export interface Auth {
    token: string,
    user: User,
    loading?: Loading,
    error?: Array<ResponseError>
}