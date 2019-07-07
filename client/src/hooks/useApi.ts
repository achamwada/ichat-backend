/*import React, { useEffect, useState } from 'react';
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
}*/

/*export const useApi = <T, U>(token = null, req: Request<T>, res?: Response<U>, loading?: Loading, err?: ResponseError) => {
    axios.defaults.baseURL = 'http://localhost:5000/api';
    axios.defaults.headers.common["x-auth-token"] = token
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
                        //method: ReqMethods[req.method as keyof typeof ReqMethods],
                        method: 'GET',
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


import { useEffect, useState } from 'react';

export interface Request<T> {
    url: string;
    payload?: T
}

export interface Response<U> {
    data: U;
    isLoading: boolean;
    isError: boolean;
}*/

/* export const useApi = <T, U>(request: Request<T>, response?: U) => {

    const [data, setData] = useState<U | null>(null);
    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        setError(false);
        try {
            if (!response) {
                const fetchData = async () => {
                    // const rawReq = await fetch(request.url);
                    // const responseData = await rawReq.json();
                    //method: ReqMethods[req.method as keyof typeof ReqMethods],
                    axios.defaults.headers.common["x-auth-token"] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWQxMTJmOTdhZTQzNmMwN2E3ZDk3NmFlIiwiaWF0IjoxNTYyNTAwMzg5LCJleHAiOjE1NjI1MzYzODl9.oQoov-nP64kfc68TdJErs55S4IFgmrJd3QJQJKxmmho";
                    axios.defaults.headers.get["Content-Type"] = "application/json";
                    const rawReq = await axios({
                        
                        method: 'GET',
                        url: request.url,
                        data: request.payload
                    });

                    const responseData = await rawReq.data;

                    setData(responseData);
                }
                fetchData();
                setLoading(false);
                

            }

        } catch (error) {
            setError(true)

        }

    }, [request.url, response]);

    return { data, isLoading, isError}

}

export default useApi;*/





import { useEffect, useState } from 'react';
import axios from 'axios';
export interface Request<T> {
    url: string;
    payload?: T
}

export interface Response<U> {
    data: U;
    isLoading: boolean;
    isError: boolean;
}

 export const useApi = <T, U>(request: Request<T>, response?: U) => {

    const [data, setData] = useState<U | null>(null);
    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState(false);
    //return { data, isLoading, isError}

    useEffect(() => {
        setLoading(true);
        setError(false);
        try {
            if (!response) {
                    const fetchData = async () => {
                        // const rawReq = await fetch(request.url);
                        // const responseData = await rawReq.json();
                        //method: ReqMethods[req.method as keyof typeof ReqMethods],
                        axios.defaults.headers.common["x-auth-token"] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWQxMTJmOTdhZTQzNmMwN2E3ZDk3NmFlIiwiaWF0IjoxNTYyNTAwMzg5LCJleHAiOjE1NjI1MzYzODl9.oQoov-nP64kfc68TdJErs55S4IFgmrJd3QJQJKxmmho";
                        axios.defaults.headers.get["Content-Type"] = "application/json";
                        const rawReq = await axios.get(request.url, request.payload);
    
                        const responseData = await rawReq.data;
    
                        setData(responseData);
                    }
                    fetchData();
                    setLoading(false);

            }

        } catch (error) {
            setError(true)

        }

    }, []);

    return { data, isLoading, isError}

}

