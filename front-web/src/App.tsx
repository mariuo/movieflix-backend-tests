import React from 'react';
import './app.scss';
import Routes from './Routes';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () =>{
    return(
      <>
        <ToastContainer />
        <Routes />
      </>
      )
  }

export default App;