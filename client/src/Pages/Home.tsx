import React, {useContext} from 'react';
import { AuthContext } from '../context/';

const Home: React.FC = () => {
    const auth = useContext(AuthContext);
    return (
        <AuthContext.Consumer>
            {
                ({token}) => {
                    if(token){
                        return token;
                    }else{
                        return 'Error'
                    }
                }
            }

        </AuthContext.Consumer>
    )
}

export default Home
