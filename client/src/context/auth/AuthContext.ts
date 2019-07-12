import { createContext } from 'react';
import { Auth } from '../../models';

export const AuthContext = createContext<Auth>({user: null, authenticated: false, loadUser: null, loadUserData: null});