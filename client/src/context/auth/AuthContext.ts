import { createContext } from 'react';
import { Auth } from '../../models';

export const AuthContext = createContext<Auth>({user: { email_address: '', user_name: '' }, authenticated: false, loadUser: null, loadUserData: null});