import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { timeout } from 'q';

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
    data: U,
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

export const useApi = <T, U>(req: Request<T>, res?: Response<U>, loading?: Loading, err?: ResponseError) => {

    axios.defaults.headers.common["x-auth-token"] = req.token ? req.token : null;
    const [data, setData] = useState<Response<U> | null>(null);
    const [isLoading, setLoading] = useState<Loading | false | true>(false);
    const [isError, setError] = useState<ResponseError | false | true>(false);

    useEffect(() => {

        try {
            if (!res) {

                const fetchData = async () => {
                    setLoading(true);
                    setError(false);

                    const response = await axios({
                        method: ReqMethods[req.method as keyof typeof ReqMethods],
                        url: req.url,
                        data: req.payload
                    });

                    const responseObj: Response<U> = await response.data;
                    setData(responseObj);

                }

                fetchData();
                setLoading(false);

            }

        } catch (err) {
            console.log(err)
            setLoading(false);
            setError(true);

        }


    }, [req.url]);

    return { data, isLoading, isError }



}