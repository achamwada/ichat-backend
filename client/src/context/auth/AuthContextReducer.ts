import React from 'react'
import { Response, User, Auth, Action } from '../../models';

export default (initState: Auth, action: Action<null>) => {
    console.log('in reducer initState => ', initState)
    return initState;

}
