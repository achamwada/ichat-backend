import React, { createContext } from 'react';
import { Auth } from '../models';

export const AuthContext = createContext<Partial<Auth>>({});