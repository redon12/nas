
import React, { useState, useEffect } from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import  "../index.css";
// import { logOutAction } from './actions/signedOutAction';
// import { LOGOUT_SUCCESS } from './constants';



function NavBar(props){
    const dispatch = useDispatch()
    const loggedIn = useSelector(state=>state.loggedIn)
    const {userInfo} = loggedIn;
    let navbarTextColor = "text-light";
    let isLoggedOut = useSelector(state=>state.loggeddOut).load
    if (isLoggedOut ==true){
        isLoggedOut= false

        // dispatch(logOutAction({type:LOGOUT_SUCCESS}))
        // window.location.reload()
    }
    if(userInfo){
    console.log(userInfo.data)}
   return( <div>
        <nav className={"nav-grad sticky-top navbar navbar-expand-sm navbar-dark bg-light text-dark "}>
        <div className={"container-fluid sticky-top"}>
            <Link to={'/'} className={"text-light nav-brand h3 mr-5"}><img src={require("../images/medMojoLogo.svg")} className={"img-logo"}/><span className={"mb-0 text-light"}>NAS</span></Link>
            <button className={"navbar-toggler text-light"} data-toggle={"collapse"} data-target={"#joy"}><span
                    className={"navbar-toggler-icon text-light"}></span></button>
            <div className={"collapse navbar-collapse ml-1"} id={"joy"}>
                <ul className={"navbar-nav mr-auto"}>
                    <li className={"nav-item"}>

                        <Link to={"/"} className={"nav-link "+navbarTextColor}>Home</Link>
                    </li>
                   
                    
                   
                    
                    <li className={"nav-item"}>
                        <Link to={"/userpanel"} className={"nav-link "+navbarTextColor}>About</Link>
                    </li>
                   
                    
                    
                     
                    {/* <li className={"nav-item"}>
                        <Link to={"/doctorpanel"} className={"nav-link"}>FAQ</Link>
                    </li> */}


                </ul>
               
                <ul className={"navbar-nav"}>
                <li className={" nav-item"}>
                   {userInfo && !isLoggedOut? <Link to ={"/logout"} className={"px-1 fas fa-user nav-link "+navbarTextColor}>
                        Log Out
                    </Link>:<Link to ={"/register"} className={"px-1 fas fa-user nav-link "+navbarTextColor}>
                        Register
                    </Link>}
                </li>
                <li className={"nav-item"}>
                    {userInfo && !isLoggedOut? <Link to={"/userpanel"} className={"fab fa-firefox nav-link px-1"+navbarTextColor}>{userInfo.data.fname}</Link>:
                    <Link to={"/signin"} className={"px-1 fas fa-sign-in-alt nav-link "+navbarTextColor}>
                    Sign-In
                </Link> }
                    
                </li>
                    </ul>
            </div>

        </div>
    </nav>
    </div>)

}

export default NavBar;