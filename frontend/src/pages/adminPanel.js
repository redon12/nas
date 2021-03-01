import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NavBar from '../components/navbar';

const openButton = ()=>{
    document.querySelector('.side-bar').classList.add('open')
}
const closeButton = ()=>{
    document.querySelector('.side-bar').classList.remove('open')
}
const AdminPanel = (props)=>{
    const infos = useSelector(state=>state.loggedIn)
    const {userInfo} = infos
    return (
        userInfo?<div>
            <NavBar/>
            <img onClick={openButton} src={require("../images/medMojoLogo.svg")} className={" bg-light p-1 img-logo side-open-button1 fab fa-firefox display-4 text-success m-3"}/>
               <div className={"beeper-container"}> <div className={" side-open-button beeper  display-4 text-success m-3"}></div></div>
            <div className="side-bar bg-light shadow-lg">
                <span className={"side-close-button text-success"} onClick={closeButton}>x</span>
            <div className={"border"}> <span className={"fas fa-user h1 m-3 text-success"}></span><span className={"text-sucess"}>{userInfo.data.name}</span></div>
                        <Link className={"border border-left-0 border-top-0 border-right-0 m-1 text-dark p-2"} to="/"> Home</Link>
                    
                    
                        <Link className={"border border-top-0 border-left-0 border-right-0 m-1 text-dark p-2"} to="/"> See Ongoing contest</Link>
                      {userInfo.data.isAdmin?  <Link className={"border border-top-0 border-left-0 border-right-0 m-1 text-dark p-2"} to="/admin"> AdminPanel</Link>:null}

                    
                   
            </div>
            
            <span onClick={openButton} className={" side-open-button1 fab fa-firefox display-4 text-success m-3"}></span>
                <div className={" side-open-button  display-4 text-success m-3 fas fa-dot-circle"}></div>
            <div className="side-bar bg-info">
                <span className={"side-close-button text-light"} onClick={closeButton}>X</span>
                       <div> <span className={"fas fa-user h1 m-3 text-light"}></span><span className={"text-light"}>Cassandra Robinson</span></div>
                        <Link className={" m-1 text-white p-2"} to="/appointment"> Appointments</Link>
                    
                    
                        <Link className={" m-1 text-white p-2"} to="/appointment"> Schedules</Link>
                    
                        <Link className={"  m-1 text-white p-2"} to="/appointment"> Result Database</Link>
                   
            </div>

            <div className={"container"}>
                <div className={"row justify-content-center"}>
                    <div className={"col-lg-12"}>
                        <span className={'border display-4 p-3 fas fa-user m-3 text-success'}></span>
                        <span className={"display-4 m-3 text-success  border-bottom-1"}>Admin Panel</span>
                        
                    </div>
                    <div onClick={e=>props.history.push("/contestcreation")} className={"card col-lg-3 m-1 pointit"}>
                        <div className={"card-body"}>
                            <p className={'text-center h4 text-success m-2'}>
                            <span className={"fas fa-hospital-alt m-1"}>  </span>Create Contest
                            </p>
                        </div>

                    </div>
                    <div onClick={e=>props.history.push('/seeallmessages')} className={"card col-lg-3 m-1 pointit"}>
                        <div className={"card-body"}>
                            <p className={'text-center text-success h4'}>
                            <span className={"fas fa-microscope m-1"}></span> Message Log
                            </p>
                        </div>
                    </div>

                    <div onClick={e=>props.history.push('/seetotalcontestants')} className={"card col-lg-3 m-1 pointit"}>
                        <div className={"card-body"}>
                            <p className={'text-center text-success h4'}>
                            <span className={"fas fa-microscope m-1"}></span> Contestant Log
                            </p>
                        </div>
                    </div>

                
            </div>
        </div>
        </div>:null
    )
}

export default AdminPanel;