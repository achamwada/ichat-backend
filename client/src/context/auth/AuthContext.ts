import { createContext } from 'react';
import { Auth } from '../../models';

export const AuthContext = createContext<Auth>({authenticated: false, loadUser: null, loadUserData: null});