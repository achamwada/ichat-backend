export interface Request<T> {
    url: String,
    params: T
}

export interface Response<W>{
    data: W
}