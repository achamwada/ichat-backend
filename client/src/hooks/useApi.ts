import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Request, Response, Loading, ResponseError, ReqMethods } from '../models/'

export const useApi = <T, U>(req: Request<T>, res?: Response<U>, loading?: Loading, err?: ResponseError) /* : {results: Response<U>, isLoading: Loading, isError: ResponseError }*/ => {

    axios.defaults.headers.common["x-auth-token"] = req.token ? req.token : null;
    const [results, setResults] = useState<Response<U> | null>(null);
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

                    const {data} = await response.data;
                    console.log('data',data);
                    setResults(data);


                }

                fetchData();
                setLoading(false);

            }

        } catch (err) {
            setLoading(false);
            setError(true);

        }


    }, []);

    return { results, isLoading, isError }



}