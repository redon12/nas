
import React, { useState, useEffect } from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import { logOutAction } from './actions/signedOutAction';
// import { LOGOUT_SUCCESS } from './constants';



function NavBar(props){
    const dispatch = useDispatch()
    const loggedIn = useSelector(state=>state.loggedIn)
    const {userInfo} = loggedIn;
    let isLoggedOut = useSelector(state=>state.loggeddOut).load
    if (isLoggedOut ==true){
        isLoggedOut= false
        // dispatch(logOutAction({type:LOGOUT_SUCCESS}))
        // window.location.reload()
    }
   return( <div>
        <nav className={"sticky-top navbar navbar-expand-sm navbar-light bg-light text-dark "}>
        <div className={"container-fluid"}>
            <Link to={'/'} className={"text-success nav-brand h3 mr-5"}><img src={require("../images/medMojoLogo.svg")} className={"img-logo"}/><span className={"mb-0"}>TackyTech</span></Link>
            <button className={"navbar-toggler"} data-toggle={"collapse"} data-target={"#joy"}><span
                    className={"navbar-toggler-icon"}></span></button>
            <div className={"collapse navbar-collapse ml-1"} id={"joy"}>
                <ul className={"navbar-nav mr-auto"}>
                    <li className={"nav-item"}>
                        <Link to={"/"} className={"nav-link"}>Home</Link>
                    </li>
                   
                    
                   
                    
                    <li className={"nav-item"}>
                        <Link to={"/userpanel"} className={"nav-link"}>About</Link>
                    </li>
                   
                    <li className={"nav-item"}>
                        <Link to={"contactus"} className={"nav-link"}>Contact</Link>
                    </li>
                    
                    
                     
                    {/* <li className={"nav-item"}>
                        <Link to={"/doctorpanel"} className={"nav-link"}>FAQ</Link>
                    </li> */}


                </ul>
               
                <ul className={"navbar-nav"}>
                <li className={" nav-item"}>
                   {userInfo && !isLoggedOut? <Link to ={"/logout"} className={"fas fa-user nav-link"}>
                        Log Out
                    </Link>:<Link to ={"/register"} className={"fas fa-user nav-link"}>
                        Register
                    </Link>}
                </li>
                <li className={"nav-item"}>
                    {userInfo && !isLoggedOut? <Link to={"/userpanel"} className={"fab fa-firefox nav-link"}>{userInfo.data.name}</Link>:
                    <Link to={"/signin"} className={"fas fa-sign-in-alt nav-link"}>
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