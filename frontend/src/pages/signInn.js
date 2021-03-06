import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
import { set } from 'mongoose';
import { loggeddIn } from '../actions/signedInAction';

function Ipage(props){
    const dispatch = useDispatch()
    const loggedIn = useSelector(state=>state.loggedIn)
    const {loading, userInfo, error} = loggedIn
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const selected = true
    if (userInfo){
      console.log("i entered here")
      props.history.push("/api/userpanel")}
    const submitHandler=(e)=>{
        e.preventDefault()
        dispatch(loggeddIn(email, password))
       
    }
   

    useEffect(()=>{
        if (userInfo){
            // props.history.push('/api/userpanel')
            console.log(userInfo)
        }
        return ()=>{

        }
    }, [userInfo])
    return(userInfo?<div>{props.history.push("/api/userpanel")}</div>: <div>
       
    
      <div className={"container"}>
        <div className={"row justify-content-center"}>
        {loading?<div className={"posit loading-container"}><div className={"loading"}/></div>:

          <div className={"col-lg-4 col-sm-12 col-md-12 border m-5 shadow rounded p-3"}>
          <center> <h1 className={'text-muted m-2'}> Sign In!</h1>
           
        {loading?<div className={"loading-container"}><div className={"loading"}/></div>:null}
        {error?<p className={"alert alert-danger"}>{error}</p>:null}
        {props.location.state?<p className={"alert alert-info"}>{props.location.state.msg}</p>:null}
        {props.location.state?<p className={"alert alert-info"}>{props.location.state.detail}</p>:null}
        {console.log(error)}</center>

            <form onSubmit={submitHandler}>
            <fieldset className={"form-group"}>
              <input onChange={(e)=>setEmail(e.target.value)} type={"email"} id={"email"} name={"email"} className={"form-control"} placeholder={"Email"}/>
              <small className={"text-muted"}>
                Type in your Email
              </small>
            </fieldset>
            
            {/* <div className={"beeper-container"}><div className={"beeper"}></div><div className={"fab fa-firefox h3 messenger"}></div></div> */}

            <fieldset className={"form-group"}>
              <input onChange={(e)=>setPassword(e.target.value)} type={"password"} name={"pwd"} id={"pwd"} className={"form-control"} placeholder={"Password"}/>
              <small className={"text-muted"}>
                Type in your Password
              </small>
            </fieldset>
            <Link className={"d-block"} to={'/forgottenpassword'}>Forgotten Password</Link>

            <center> <button type = {"submit"} className={"btn btn-info m-4"}>Log In</button></center> Don't have an account? <Link to={'/register'}>Register</Link>
            </form>
          </div>
}
        </div>
  
      </div>
    </div>)
        
    }
    

export default Ipage;