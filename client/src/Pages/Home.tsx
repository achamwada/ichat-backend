import React, {useContext} from 'react';
import { AuthContext } from '../context/';
import Header from '../Pages/layouts/Header';
import Footer from '../Pages/layouts/Footer';

const Home: React.FC = () => {
    const auth = useContext(AuthContext);
    
    const { token, user } = auth;
    console.log({ token, user } );
    return (
        <React.Fragment>
            <Header/>
            test
            <Footer/>
        </React.Fragment>
    )
}

export default Home;