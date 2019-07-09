import  { useEffect, useState } from 'react';
import axios from 'axios';
import { Request, Loading, ResponseError, ReqMethods, User, Response } from '../models/'

export const useApi = <T, U>(req: Request<T>, res?: U,  loading?: Loading, err?: ResponseError) /* : {results: Response<U>, isLoading: Loading, isError: ResponseError }*/ => {

    axios.defaults.headers.common["x-auth-token"] = req.token ? req.token : null;
    const [results, setResults] = useState<Response<User>>({user: {user_name: "test", email_address: "SDGHDGH@gmail.com"}});
    //const [results, setResults] = useState<U | null>(null);
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

                    const data: Response<User> = await response.data;
                    console.log('data => ',data);
                    setResults({user: {user_name: "alex", email_address: "alex@gmail.com"}});


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