import React from 'react';
import { Link } from 'react-router-dom';
import { PromiseProvider } from 'mongoose';
import { useSelector } from 'react-redux';
import NavBar from '../components/navbar';
import Footer from '../components/footer'

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
        userInfo?<div>
            <NavBar/>
            <img onClick={openButton} src={require("../images/medMojoLogo.svg")} className={" bg-light p-1 img-logo side-open-button1 fab fa-firefox display-4 text-success m-3"}/>
               <div className={"beeper-container"}> <div className={" side-open-button beeper  display-4 text-success m-3"}></div></div>
            <div className="side-bar bg-light shadow-lg">
                <span className={"side-close-button text-success"} onClick={closeButton}>x</span>
    <div className={"border"}> <span className={"fas fa-user h1 m-3 text-success"}></span><span className={"text-sucess"}>{userInfo.data.name}</span></div>
                        <Link className={"border border-left-0 border-top-0 border-right-0 m-1 text-dark p-2"} to="/appointment"> Book A Laboratory Appointment</Link>
                    
                    
                        <Link className={"border border-top-0 border-left-0 border-right-0 m-1 text-dark p-2"} to="/appointment"> Schedules</Link>
                    
                        <Link className={"border border-top-0 border-right-0 border-left-0 m-1 text-dark p-2"} to="/appointment"> Result Database</Link>
                   
            </div>

            <div className={"container"}>
                <div className={"row justify-content-center"}>
                    <div className={"col-lg-12 border my-2 shadow"}>
                       <center> <span className={'border display-4 p-2 m-3 text-success col-sm-12'}><img onClick={openButton} src={require("../images/baby-1531060_1280 (copy).jpg")} className={" bg-light p-1 img-logo-prof fab fa-firefox display-4 text-success m-3"}/></span></center>
                        <span className={"h4 m-3 text-success  border-bottom-1"}>{userInfo.data.email}</span>
                    </div>
                    <div onClick={e=>props.history.push("/labbook")} className={"card pointit col-lg-3 m-1"}>
                        <div className={"card-body"}>
                            <p className={'text-center h4 text-success m-2'}>
                            <span className={"fas fa-hospital-alt m-1"}>  </span>Book a Lab Test
                            </p>
                        </div>

                    </div>
                    <div onClick={e=>props.history.push("/bookhospitalappointment")} className={"card pointit col-lg-3 m-1"}>
                        <div className={"card-body"}>
                            <p className={'text-center text-success h4'}>
                            <span className={"fas fa-microscope m-1"}></span>  Book a Hospital Appointment
                            </p>
                        </div>
                    </div>

                    <div onClick={e=>props.history.push("/seebookedappointment")} className={"card pointit col-lg-3 m-1"}>
                        <div className={"card-body"}>
                            <p className={'text-center h4 text-success'}>
                            <span className={"fas fa-plus-circle m-1"}></span>See List of Booked Appointments
                            </p>
                        </div>
                </div>

                <div onClick={e=>props.history.push("/blog")} className={"card pointit col-lg-3 m-1"}>
                        <div className={"card-body"}>
                            <p className={'text-center h4 text-success'}>
                                <span className={"fas fa-blog m-1"}></span> Visit The Blog
                            </p>
                        </div>

                    </div>
                    {/* <div onClick={e=>props.history.push("/bookhospitalappointment")} className={"card pointit col-lg-3 m-1"}>
                        <div className={"card-body"}>
                            <p className={'text-center text-success h4'}>
                            <span className={"fas fa-laptop-medical m-1"}></span>See Lab Test Results
                            </p>
                        </div>
                    </div> */}

                    <div onClick={e=>props.history.push("/bookhospitalappointment")} className={"card pointit col-lg-3 m-1"}>
                        <div className={"card-body"}>
                            <p className={'text-center text-success h4'}>
                            <span className={"fas fa-layer-group m-1"}></span> Book Insurance
                            </p>
                        </div>
                </div>

                <div onClick={e=>props.history.push("/bookhospitalappointment")} className={"card pointit col-lg-3 m-1"}>
                        <div className={"card-body"}>
                            <p className={'text-center h4 text-success'}>
                               <span className={'fas fa-users-cog'}></span> Account Settings
                            </p>
                        </div>
                </div>
                <div onClick={e=>props.history.push("/uploaddiagnosis")} className={"card pointit col-lg-3 m-1"}>
                        <div className={"card-body"}>
                            <p className={'text-center h4 text-success'}>
                               <span className={'fas fa-users-cog'}></span> Upload Lab Test Result
                            </p>
                        </div>
                </div>
            </div>
        </div>
       <center><Footer/></center> 
        </div>:<div>{props.history.push('/')}</div>
    )
}

export default UserPanel;