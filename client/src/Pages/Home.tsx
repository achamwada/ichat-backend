import React, { useContext } from 'react';
import { AuthContext } from '../context/';
import Header from '../Pages/layouts/Header';
import Footer from '../Pages/layouts/Footer';

const Home: React.FC = () => {
  const auth = useContext(AuthContext);

  const { token, data, authenticated } = auth;
  return (
    <React.Fragment>
      <Header />
      test {JSON.stringify({ token, data, authenticated })}
      <Footer />
    </React.Fragment>
  );
};

export default Home;
