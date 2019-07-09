import React, {useContext} from 'react';
import { AuthContext } from '../context/';
import Header from '../Pages/layouts/Header';
import Footer from '../Pages/layouts/Footer';

const Home: React.FC = () => {
    const auth = useContext(AuthContext);
    
    const { token, data, authenticated } = auth;
    //console.log({ token, authenticated, data } );
    return (
        // <AuthContext.Consumer>
        //     { (token, authenticated, data) => {
        //         if(token){
        //             return <React.Fragment>
        //             <Header/>
        //             test
        //             <Footer/>
        //         </React.Fragment>

        //         }
        //     }}
        // </AuthContext.Consumer>

        <React.Fragment>
                    <Header/>
                    test
                    {document.write(JSON.stringify(data))}
                    <Footer/>
                </React.Fragment>
    )
}

export default Home;