import React, {Component, useState} from 'react';
import {Link} from 'react-router-dom';
import { registerAction } from '../actions/registerAction';
import { useDispatch } from 'react-redux';

const SignUpPage=(props)=>{
  const dispatch = useDispatch()
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [fname, setFname] = useState('');
    const [phone, setPhone] = useState('');
    const [Password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const submitHandler = (e)=>{
      e.preventDefault()
      dispatch(registerAction({lname:lname,email:email,fname:fname, pwd:Password, phone:phone}))
      
    }
    return (
        <div>
          <div className={"container-fluid"}>
            <div className={"row justify-content-center"}>
              <div className={"col-lg-4 col-sm-12 border m-5 shadow rounded"}>
                 <center> <h1 className={'text-muted m-2'}> Register!</h1></center>
                 <form onSubmit={submitHandler}>
                <fieldset className={"form-group"}>
                  <input onChange={e=>setFname(e.target.value)} type={"text"} name ={"fname"} className={"form-control"} placeholder={"First Name"}/>
                  <small className={"text-muted"}>
                    Type in your First Name
                  </small>
                </fieldset>

                <fieldset className={"form-group"}>
                  <input onChange={e=>setLname(e.target.value)} name ={"lname"} type={"text"} className={"form-control"} placeholder={"Last Name"}/>
                  <small className={"text-muted"}>
                    Type in your Last Name
                  </small>
                </fieldset>

                <fieldset className={"form-group"}>
                  <input onChange={e=>setEmail(e.target.value)} name ={"email"} type={"text"} className={"form-control"} placeholder={"Email"}/>
                  <small className={"text-muted"}>
                    Type in your Email
                  </small>
                </fieldset>

                <fieldset className={"input-group"}>
                  <label className={"input-control"}>
                  <input onChange={e=>setPhone(e.target.value)} name ={"phone"} type={"text"} className={"form-control"} placeholder={"Enter Phone Number"}/>
                  </label>
                  <small className={"text-muted"}>
                    Enter Nigerian Phone Number
                  </small>
                </fieldset>

                <fieldset className={"form-group"}>
                  <input onChange={e=>setPassword(e.target.value)} name ={"password"} type={"text"} className={"form-control"} placeholder={"Password"}/>
                  <small className={"text-muted"}>
                    Type in Password
                  </small>
                </fieldset>

                <fieldset className={"form-group"}>
                  <input onChange={e=>setRePassword(e.target.value)} name ={"rePassword"} type={"text"} className={"form-control"} placeholder={"Re-Enter Password"}/>
                  <small className={"text-muted"}>
                    Re-Enter Password
                  </small>
                </fieldset>

               <center> <button type = {"submit"} className={"btn btn-info m-4"}>Submit</button></center>
               </form>
              </div>
            </div>
          </div>
        </div>
    )
}

export default SignUpPage