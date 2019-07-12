import axios from 'axios'
export const setRequestToken = (): void =>{
    if(localStorage.getItem('auth-token')){
        axios.defaults.headers['x-auth-token'] = `bearer ${localStorage.getItem('auth-token')}`
    }
}

export const getRequestToken = (): string | null =>{
    if(localStorage.getItem('auth-token')){
        return localStorage.getItem('auth-token')
    }
    return null;
}