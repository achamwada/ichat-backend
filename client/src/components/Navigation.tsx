import React, { useContext } from 'react';
import {AuthContext} from '../context/auth/AuthContext';

const Navigation: React.FC = props => {

    const { } = useContext(AuthContext);
    return (
        <div>
            Navigation
        </div>
    )
}

export default Navigation
