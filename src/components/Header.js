import React from 'react';
import { useState } from "react";
import {LOGO_URL} from "../utils/constants";
import { Link } from 'react-router-dom';
import useOnlinestatus from '../utils/useOnlinestatus';
import { useSelector } from 'react-redux';

const Header = ()=>{
    const[btnname,setbtnname]=useState("login");
    const onlinestatus=useOnlinestatus();
    const btnhandler=()=>{
       btnname==="login"?setbtnname("logout"):setbtnname("login")
    }

const cartItems=useSelector((store)=>store.cart.items);
// console.log(cartItems);
    return(
    <div className="header">
        <div className="logo">
            <img className="logoo" src={LOGO_URL} alt="logo"/>
        </div>
        <div className="nav">
        <ul>
            <li>onlinestatus:{onlinestatus?"active":"inactive"}</li>
            <li>
              <Link to="/">home</Link></li>
            <li><Link to="/about">about</Link></li>
            <li><Link to="/contact">contact us</Link></li>
           <li> <Link to="/grocery">grocery</Link></li>
           <li><Link to="/cart">cart({cartItems.length} items)</Link></li>
            <button onClick={btnhandler}>
        {btnname}
            </button>
        </ul>
        </div>
    </div>
    )
}

export default Header;