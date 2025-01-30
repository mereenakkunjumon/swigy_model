import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import {Provider} from "react-redux";
import Appstore from '../utils/Appstore';



const Landing=()=> {
  return (
    
    <Provider store={Appstore}>
    <div >
      <Header/>
      <Outlet/>
    </div>
    </Provider>
  );
};

export default Landing;
