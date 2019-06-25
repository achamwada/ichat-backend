import { createContext } from 'react';
import { Auth } from '../../models';

export const AuthContext = createContext<Auth>({token:'',authenticated: false,data: null});