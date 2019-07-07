import { useEffect, useState } from 'react';

export interface Request<T> {
    url: string;
    method: string,
    payload?: T,
    responseType?:string,
}

export interface Response<U> {
    data: U;
    isLoading: boolean;
    isError: boolean;
}

 const useApi = <T, U>(request: Request<T>, response?: U) => {

    const [data, setData] = useState<U | null>(null);
    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(false);
        try {
            if (!response) {
                const fetchData = async () => {
                    const rawReq = await fetch(request.url);
                    const responseData = await rawReq.json();
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

export default useApi;

