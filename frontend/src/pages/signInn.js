import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
import { set } from 'mongoose';
import { loggeddIn } from '../actions/signedInAction';

function Ipage(props){
    const dispatch = useDispatch()
    const loggedIn = useSelector(state=>state.loggedIn)
    const {loading,userInfo, error} = loggedIn
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    
    const submitHandler=(e)=>{
        e.preventDefault()
        dispatch(loggeddIn(email, password))
        props.history.push("/signin")
    }
   

    useEffect(()=>{
        if (userInfo){
            props.history.push('/userpanel')
            console.log(userInfo)
        }
        return ()=>{

        }
    }, [userInfo])
    return <div>
        
        {loading?<h1>loading...</h1>:null}
        {error?<ul>{error.map(wg=>{
          return <l1>{wg}</l1>
        })}</ul>:null}
    
      <div className={"container"}>
        <div className={"row justify-content-center"}>
          <div className={"col-lg-4 col-sm-12 border m-5 shadow rounded p-3"}>
          <center> <h1 className={'text-muted m-2'}> Sign In!</h1></center>
            <form onSubmit={submitHandler}>
            <fieldset className={"form-group"}>
              <input onChange={(e)=>setEmail(e.target.value)} type={"email"} id={"email"} name={"email"} className={"form-control"} placeholder={"Email"}/>
              <small className={"text-muted"}>
                Type in your Email
              </small>
            </fieldset>

            <fieldset className={"form-group"}>
              <input onChange={(e)=>setPassword(e.target.value)} type={"password"} name={"pwd"} id={"pwd"} className={"form-control"} placeholder={"Password"}/>
              <small className={"text-muted"}>
                Type in your Password
              </small>
            </fieldset>
            <center> <button type = {"submit"} className={"btn btn-info m-4"}>Log In</button></center><Link to={'/'}>create
            Account</Link>
            </form>
          </div>
        </div>
      </div>
    </div>
        
    }

export default Ipage;