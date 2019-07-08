import React, {useContext} from 'react';
import { AuthContext } from '../context/';

const Home: React.FC = () => {
    const auth = useContext(AuthContext);
    
    const { token, user } = auth;
    console.log({ token, user } );
    return (
        <React.Fragment>
            test
        </React.Fragment>
    )
}

export default Home;