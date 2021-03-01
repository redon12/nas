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
                        <Link className={"border border-left-0 border-top-0 border-right-0 m-1 text-dark p-2"} to="/"> Home</Link>
                    
                    
                        <Link className={"border border-top-0 border-left-0 border-right-0 m-1 text-dark p-2"} to="/"> See Ongoing contest</Link>
                      {userInfo.data.isAdmin?  <Link className={"border border-top-0 border-left-0 border-right-0 m-1 text-dark p-2"} to="/admin"> AdminPanel</Link>:null}

                    
                   
            </div>

            <div className={"container"}>
                <div className={"row justify-content-center"}>

                    {/* picture page starts here */}
                    <div className={"col-lg-12 border my-2 shadow"}>
                       <center> <span className={'border display-4 p-2 m-3 text-success col-sm-12'}>
                          {userInfo.data.pics!=""? <img onClick={openButton} src={userInfo.data.pics} 
                           className={" bg-light p-1 img-logo-prof rounded border text-success m-3"}/>:<span className={"fas fa-user display-1"}></span>}
                           </span></center>
                        <div className={"h4 m-3 text-info  border-bottom-1 media"}>
                            <div className={"media-body list-group"}>
                                
                               <span className={"d-block list-group-item"}>Name: <strong>{userInfo.data.fname} {userInfo.data.lname}</strong></span>
                                <span className={"d-block list-group-item"}>Your Contests: <strong className={"h6"}>Face of Natural Science, Face of Madonna</strong></span>
                                <span className={"d-block list-group-item"}>Department: <strong >{userInfo.data.dept}</strong></span>
                                <span className={"d-block list-group-item"}>Level: <strong >{userInfo.data.level}</strong></span>
                                <span className={"d-block list-group-item"}>Faculty: <strong >{userInfo.data.faculty}</strong></span>
                                


                            </div>

                        </div>
                    </div>
                    {/* Picture page ends here */}
                        
                    <div onClick={e=>props.history.push("/profile")} className={"card pointit col-lg-3 m-1"}>
                        <div className={"card-body"}>
                            <p className={'text-center h4 text-info m-2'}>
                            <span className={"fas fa-hospital-alt m-1"}>  </span> Profile
                            </p>
                        </div>

                    </div>
                    <div onClick={e=>props.history.push("/")} className={"card pointit col-lg-3 m-1"}>
                        <div className={"card-body"}>
                            <p className={'text-center text-info h4'}>
                            <span className={"fas fa-microscope m-1"}></span> See Ongoing Contests
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