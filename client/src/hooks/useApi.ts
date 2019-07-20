import { useEffect, useState } from 'react';
import axios from 'axios';
import { Request, Loading, ResponseError, ReqMethods, User, Response } from '../models/'

export const useApi = <T, U>(req: Request<T>, res?: U, loading?: Loading, err?: ResponseError): { results: U | null, isLoading: Loading | boolean, isError: Array<ResponseError> | boolean } => {

    axios.defaults.headers.common["x-auth-token"] = req.token ? req.token : null;
    const [results, setResults] = useState<U | null>(null);
    const [isLoading, setLoading] = useState<Loading | boolean>(false);
    const [isError, setError] = useState<Array<ResponseError> | boolean>(false);

    useEffect(() => {

        try {
            if (!results) {

                const fetchData = async () => {
                    setLoading(true);
                    setError(false);

                    const response = await axios({
                        method: ReqMethods[req.method as keyof typeof ReqMethods],
                        url: req.url,
                        data: req.payload
                    });

                    const data: U = await response.data;
                    setResults(data);


                }

                fetchData();
                setLoading(false);

            }

        } catch (err) {
            setLoading(false);
            setError(true);
            console.log("ERROR HERE")

        }


    }, []);

    return { results, isLoading, isError }



}
