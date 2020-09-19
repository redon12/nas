import React from 'react';
import { Link } from 'react-router-dom';

const openButton = ()=>{
    document.querySelector('.side-bar').classList.add('open')
}
const closeButton = ()=>{
    document.querySelector('.side-bar').classList.remove('open')
}
const HospitalPanel = (props)=>{
    return (
        <div><span onClick={openButton} className={" side-open-button1 fab fa-firefox display-4 text-info m-3"}></span>
                <div className={" side-open-button  display-4 text-info m-3 fas fa-dot-circle"}></div>
            <div className="side-bar bg-info ">
                <span className={"side-close-button text-light"} onClick={closeButton}>X</span>
                       <div> <span className={"fas fa-user h1 m-3 text-light"}></span><span className={"text-light"}>Cassandra Robinson</span></div>
                        <Link className={" m-1 text-white p-2"} to="/appointment"> Appointments</Link>
                    
                    
                        <Link className={" m-1 text-white p-2"} to="/appointment"> Schedules</Link>
                    
                        <Link className={"  m-1 text-white p-2"} to="/appointment"> Result Database</Link>
                   
            </div>

            <div className={"container"}>
                <div className={"row justify-content-center"}>
                    <div className={"col-lg-12"}>
                        <span className={'border display-4 p-3 fas fa-user m-3 text-info'}></span>
                        <span className={"display-4 m-3 text-info  border-bottom-1"}>New Era hospital</span>  
                        
                    </div>
                    
                    <div onClick={e=>props.history.push("allappointments")} className={"card col-lg-3 m-1 pointit"}>
                        <div className={"card-body"}>
                            <p className={'text-center h4 text-info'}>
                            <span className={"fas fa-plus-circle m-1"}></span>See all Appointments
                            </p>
                        </div>
                </div>

                <div onClick={e=>props.history.push("")} className={"card col-lg-3 m-1 pointit"}>
                        <div className={"card-body"}>
                            <p className={'text-center h4 text-info'}>
                                <span className={"fas fa-blog m-1"}></span> Upload Diagnosis
                            </p>
                        </div>

                    </div>
                    <div onClick={e=>props.history.push("/seealldocuments")} className={"card col-lg-3 m-1 pointit"}>
                        <div className={"card-body"}>
                            <p className={'text-center h4 text-info'}>
                                <span className={"fas fa-blog m-1"}></span>See uploaded documents
                            </p>
                        </div>

                    </div>
                   

                <div onClick={e=>props.history.push("")} className={"card col-lg-3 m-1 pointit"}>
                        <div className={"card-body"}>
                            <p className={'text-center h4 text-info'}>
                               <span className={'fas fa-users-cog'}></span> Account Settings
                            </p>
                        </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default HospitalPanel;