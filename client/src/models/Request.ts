export interface Request<T> {
    url: string;
    method: string,
    payload?: T,
    responseType?: string,
    token?: string
}

export interface Response<W>{
    data: W
}