import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
import { set } from 'mongoose';
import { loggeddIn } from '../actions/signedInAction';

function RecoveryCode(props){
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
    return(<div>
        <div className={"container"}>
            <div className={"row justify-content-center m-5"}>
                <div className={"col-lg-6"}>
                <center className={"h5 card-header"}> Recovery Code</center>

                    <fieldset className={"form-group"}>
                        <input placeholder={"six(6) digit code"} className={"form-control"} />
                        <small className={"text-muted"}>
                            type in your six digit Recovery Code sent to your email
                        </small>

                       
                    </fieldset>

                    <fieldset className={"form-group"}>
                        <button onClick={e=>props.history.push("/api/recoverypassword")} className={"btn btn-info"}>
                            Send Reset code
                        </button>
                    </fieldset>
                </div>
            </div>
       </div>
    
      
    </div>)
        
    }
    

export default RecoveryCode;