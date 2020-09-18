import React, { useState, useEffect } from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import signInPage from './pages/signInPage';
import Home from './pages/Home';
import signUpPage from './pages/signup';
import "./index.css";
import userPanel from './pages/user_panel';
import doctorPanel from './pages/Hospital_Panel';
import blog from './pages/blog';
import { useSelector, useDispatch } from 'react-redux';
import opage from './pages/signInn';
import { loggedReducer } from './reducers/signReducer';
import { loggeddIn } from './actions/signedInAction';
import LogOut from './pages/logOut';
import { logOutAction } from './actions/signedOutAction';
import { PromiseProvider } from 'mongoose';
import AdminPanel from './pages/adminPanel';
import LabTestBookPage from './pages/user_panel_page/LabTestBookPage';
import HospitalAppointmentPage from './pages/user_panel_page/appointmentPage';
import HospitalPanel from './pages/Hospital_Panel';




const App = ()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        
                
            const handleInvalidToken = e => {
                if (e.key === 'accessToken' && e.oldValue&& !e.newValue){
                    logOutAction()
                }
            }
            window.addEventListener('storage',handleInvalidToken)

            return function cleanup(){
                window.removeEventListener('storage', handleInvalidToken)
            }
        return ()=>{

        }
    },[logOutAction])
    
    const loggedIn = useSelector(state=>state.loggedIn)
    const {userInfo} = loggedIn;
    return (
        // djdj
       
    <div>
        
        
       <nav className={"sticky-top navbar navbar-expand-sm navbar-light bg-light text-dark "}>
        <div className={"container-fluid"}>
            <Link to={"index.html"} className={"nav-brand h3 mr-5"}><span className={"fab fa-firefox h3 mr-2"} ></span>Healtherman</Link>
            <button className={"navbar-toggler"} data-toggle={"collapse"} data-target={"#joy"}><span
                    className={"navbar-toggler-icon"}></span></button>
            <div className={"collapse navbar-collapse ml-1"} id={"joy"}>
                <ul className={"navbar-nav mr-auto"}>
                    <li className={"nav-item"}>
                        <Link to={""} className={"nav-link"}>Home</Link>
                    </li>
                    <li className={"nav-item"}>
                        <Link to={"/blog"} className={"nav-link"}>Blog</Link>
                    </li>
                    <li className={"nav-item dropdown "}>
                        <Link to={""} className={"nav-link"}>Health Insurance</Link>
                    </li>
                    <li className={"nav-item dropdown"}>
                        <Link to={""} className={"dropdown-toggle nav-link"} data-toggle={"dropdown"}>Book Appointments</Link>
                        <div className={"dropdown-menu"}>
                            <Link to={"#"} className={"dropdown-item"}>Video Chat with a doctor</Link>
                            <Link to={"#"} className={"dropdown-item"}>Visit a Hospital</Link>
                            <Link to={"#"} className={"dropdown-item"}>Call a Doctor</Link>
                            </div>
                    </li>
                    <li className={"nav-item"}>
                        <Link to={"/userpanel"} className={"nav-link"}>About</Link>
                    </li>
                    <li className={"nav-item"}>
                        <Link to={""} className={"nav-link"}>Book a Test </Link>
                    </li>
                    <li className={"nav-item"}>
                        <Link to={""} className={"nav-link"}>Contact</Link>
                    </li>
                    
                    
                     
                    <li className={"nav-item"}>
                        <Link to={"/doctorpanel"} className={"nav-link"}>FAQ</Link>
                    </li>


                </ul>
               
                <ul className={"navbar-nav"}>
                <li className={" nav-item"}>
                   {userInfo? <Link to ={"/logout"} className={"fas fa-user nav-link"}>
                        Log Out
                    </Link>:<Link to ={"/register"} className={"fas fa-user nav-link"}>
                        Register
                    </Link>}
                </li>
                <li className={"nav-item"}>
                    {userInfo? <Link to={"/userpanel"} className={"fab fa-firefox nav-link"}>{userInfo.data.name}</Link>:
                    <Link to={"/signin"} className={"fas fa-sign-in-alt nav-link"}>
                    Sign-In
                </Link> }
                    
                </li>
                    </ul>
            </div>

        </div>
    </nav>
    
    <Route path={"/"}  exact={true} component={Home}/>
    <Route path={"/signin"} exact={true}  component={opage}/>
    <Route path={"/register"}   component={signUpPage}/>
    <Route path={"/userpanel"}   component={userPanel}/>
    <Route path={"/doctorpanel"}   component={doctorPanel}/>
    <Route path={"/blog"}   component={blog}/>
    <Route path={"/logout"}   component={LogOut}/>
    <Route path={"/admin"}   component={AdminPanel}/>
    <Route path={"/hospital"}   component={HospitalPanel}/>
    <Route path={"/labbook"}   component={LabTestBookPage}/>
    <Route path={"/hospitalappointment"}   component={HospitalAppointmentPage}/>
        
       
         

      
    
    <footer className={"footer text-center display-5 my-5"}>Copyright&copy; 2020 Healtherman PLC</footer>
    </div>
        
    )
    }
export default App