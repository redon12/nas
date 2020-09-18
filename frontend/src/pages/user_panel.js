import React from 'react';
import { Link } from 'react-router-dom';
import { PromiseProvider } from 'mongoose';
import { useSelector } from 'react-redux';

const openButton = ()=>{
    document.querySelector('.side-bar').classList.add('open')
}
const closeButton = ()=>{
    document.querySelector('.side-bar').classList.remove('open')
}
const UserPanel = (props)=>{

    const loggedIn = useSelector(state=>state.loggedIn)
    const {userInfo} = loggedIn; 
    return (
        userInfo?<div><span onClick={openButton} className={" side-open-button1 fab fa-firefox display-4 text-info m-3"}></span>
                <div className={" side-open-button  display-4 text-info m-3 fas fa-dot-circle"}></div>
            <div className="side-bar bg-info shadow-lg">
                <span className={"side-close-button text-light"} onClick={closeButton}>x</span>
    <div> <span className={"fas fa-user h1 m-3 text-light"}></span><span className={"text-light"}>{userInfo.data.name}</span></div>
                        <Link className={" m-1 text-white p-2"} to="/appointment"> Book A Laboratory Appointment</Link>
                    
                    
                        <Link className={" m-1 text-white p-2"} to="/appointment"> Schedules</Link>
                    
                        <Link className={"  m-1 text-white p-2"} to="/appointment"> Result Database</Link>
                   
            </div>

            <div className={"container"}>
                <div className={"row justify-content-center"}>
                    <div className={"col-lg-12"}>
                        <span className={'border display-4 p-3 fas fa-user m-3 text-info'}></span>
                        <span className={"display-4 m-3 text-info  border-bottom-1"}>{userInfo.data.email}</span>
                        <span className={"display-4 m-3 text-info"}>Age:43</span>
                    </div>
                    <div className={"card col-lg-3 m-1"}>
                        <div className={"card-body"}>
                            <p className={'text-center h4 text-info m-2'}>
                            <span className={"fas fa-hospital-alt m-1"}>  </span>Book a Lab Test
                            </p>
                        </div>

                    </div>
                    <div className={"card col-lg-3 m-1"}>
                        <div className={"card-body"}>
                            <p className={'text-center text-info h4'}>
                            <span className={"fas fa-microscope m-1"}></span>  Book a Hospital Appointment
                            </p>
                        </div>
                    </div>

                    <div className={"card col-lg-3 m-1"}>
                        <div className={"card-body"}>
                            <p className={'text-center h4 text-info'}>
                            <span className={"fas fa-plus-circle m-1"}></span>See List of Booked Appointments
                            </p>
                        </div>
                </div>

                <div className={"card col-lg-3 m-1"}>
                        <div className={"card-body"}>
                            <p className={'text-center h4 text-info'}>
                                <span className={"fas fa-blog m-1"}></span> Visit The Blog
                            </p>
                        </div>

                    </div>
                    <div className={"card col-lg-3 m-1"}>
                        <div className={"card-body"}>
                            <p className={'text-center text-info h4'}>
                            <span className={"fas fa-laptop-medical m-1"}></span>See Lab Test Results
                            </p>
                        </div>
                    </div>

                    <div className={"card col-lg-3 m-1"}>
                        <div className={"card-body"}>
                            <p className={'text-center text-info h4'}>
                            <span className={"fas fa-layer-group m-1"}></span> Book Insurance
                            </p>
                        </div>
                </div>

                <div className={"card col-lg-3 m-1"}>
                        <div className={"card-body"}>
                            <p className={'text-center h4 text-info'}>
                               <span className={'fas fa-users-cog'}></span> Account Settings
                            </p>
                        </div>
                </div>
                <div className={"card col-lg-3 m-1"}>
                        <div className={"card-body"}>
                            <p className={'text-center h4 text-info'}>
                               <span className={'fas fa-users-cog'}></span> Upload Lab Test Result
                            </p>
                        </div>
                </div>
            </div>
        </div>
        </div>:props.history.push('/')
    )
}

export default UserPanel;