import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
import { set } from 'mongoose';
import { loggeddIn } from '../actions/signedInAction';

function ForgottenPassword(props){
    const dispatch = useDispatch()
    const loggedIn = useSelector(state=>state.loggedIn)
    const {loading, userInfo, error} = loggedIn
    // const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const selected = true
    if (userInfo){
      console.log("i entered here")
      props.history.push("/api/userpanel")}
    const submitHandler=(e)=>{
        e.preventDefault()
        dispatch(loggeddIn(email))
       
    }
   

    useEffect(()=>{
        if (userInfo){
            // props.history.push('/api/userpanel')
            console.log(userInfo)
        }
        return ()=>{

        }
    }, [userInfo])
    return(<div>
        <div className={"container"}>
            <div><Link to={"/"}>{"<<"}back to home</Link></div>
            <div className={"row justify-content-center m-5"}>
                <div className={"col-lg-6"}>
                <center className={"h5 text-info card-header"}> Forgotten Password</center>

                    <fieldset className={"form-group"}>
                        <input onChange={e=>setEmail(e.target.value)} type={"email"} placeholder={"Your Email"} className={"form-control"} />
                        <small className={"text-muted"}>
                            type in your email
                        </small>

                       
                    </fieldset>

                    <fieldset className={"form-group"}>
                        
                        <button onClick={e=>props.history.push("/api/recoverycode")} className={"btn btn-info"}>
                            Send Reset code
                        </button>
                    </fieldset>
                </div>
            </div>
       </div>
    
      
    </div>)
        
    }
    

export default ForgottenPassword;