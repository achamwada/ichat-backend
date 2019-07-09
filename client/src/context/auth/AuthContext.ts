import React, { createContext } from 'react';
import { Auth, User } from '../../models';

export const AuthContext = createContext<Auth>({token:'',authenticated: false,data: null});