import React, { useEffect, useState, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import './App.css';
import { AuthContext } from './context';
import Home from './Pages/Home';
import { useApi } from './hooks/';
import { Auth } from './models/'

const App: React.FC = () => {
  const [token, setToken ] = useState();
  //const [userDetails, setUserDetails] = useState();

  //useEffect(()=>{
    //setToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWQxMTJmOTdhZTQzNmMwN2E3ZDk3NmFlIiwiaWF0IjoxNTYyNTAwMDA5LCJleHAiOjE1NjI1MzYwMDl9.ta00jdV9Wipb1p9WdXVY45qprmM9Y66FSVefhwefcpE")
     const { data, isLoading, isError } = useApi<any, Auth>({
      url: '/api/user'
    });

    console.log({ data, isLoading, isError } );
  //}, [])
     
    //  return (
    //    <Fragment>
    //      {'data'}
    //    </Fragment>
    //  )
  

    // const request = {
    //   url: "http://localhost:5000/api/user",
    //   method: 'GET'
    // };
  
    //const { data, isLoading, isError } = useApi<any, Array<any>>(request);
    //console.log(data);

    // useEffect(()=> {

    //   const fetchData = async () => {
    //     try{

    //       const data = await fetch("/api/user");

    //       console.log(data);
      

    //     }catch(err){
    //       console.log(err)
    //     }
    //   }

    //   fetchData()

     //}, [])

  

  return (
    <AuthContext.Provider value={{ token }}>
      test
    </AuthContext.Provider>
  );
};

export default App;
