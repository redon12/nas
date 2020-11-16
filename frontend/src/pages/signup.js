import React, {Component, useState} from 'react';
import {Link} from 'react-router-dom';
import { registerAction } from '../actions/registerAction';
import { useDispatch, useSelector } from 'react-redux';


const SignUpPage=(props)=>{
  const {loading, regInfo, error} = useSelector(state=>state.register)
  const dispatch = useDispatch()
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [fname, setFname] = useState('');
    // const [phone, setPhone] = useState('');
    const [image, setImage] = useState('');
    const [Password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const submitHandler = (e)=>{
      e.preventDefault()
      dispatch(registerAction({lname:lname,email:email,fname:fname, pwd:Password,repwd:rePassword}))
      if (regInfo){
      props.history.push("/signin")
      }
    }
    return (
        <div>
          <div className={"container-fluid"}>
            <div className={"row justify-content-center"}>
              <div className={"col-lg-4 col-sm-12 border m-5 shadow rounded"}>
                 <center> <h1 className={'text-muted m-2'}> Register!</h1>
                 {error?<p className={"alert alert-danger"}>{error}</p>:null}</center>
                 <form onSubmit={submitHandler}>
                <fieldset className={"form-group"}>
                  <input onChange={e=>setFname(e.target.value)} type={"text"} name ={"fname"} className={"form-control"} placeholder={"First Name"} required/>
                  <small className={"text-muted"}>
                    Type in your First Name
                  </small>
                </fieldset>

                <fieldset className={"form-group"}>
                  <input onChange={e=>setLname(e.target.value)} name ={"lname"} type={"text"} className={"form-control"} placeholder={"Last Name"} required/>
                  <small className={"text-muted"}>
                    Type in your Last Name
                  </small>
                </fieldset>

                <fieldset className={"form-group"}>
                  <input onChange={e=>setEmail(e.target.value)} name ={"email"} type={"text"} className={"form-control"} placeholder={"Email"} required/>
                  <small className={"text-muted"}>
                    Type in your Email
                  </small>
                </fieldset>

                {/* <fieldset className={"form-group"}>
                  <label className={"input-control"}>
                  <input onChange={e=>setImage(e.target.value)} name ={"pImage"} type={"file"} className={"form-control-file"} placeholder={"Upload profile picture"} required/>
                  </label>
                  <small className={"text-muted"}>
                    Upload profile picture
                  </small>
                </fieldset> */}

                <fieldset className={"form-group"}>
                  <input onChange={e=>setPassword(e.target.value)} name ={"password"} type={"text"} className={"form-control"} placeholder={"Password"} required/>
                  <small className={"text-muted"}>
                    Type in Password
                  </small>
                </fieldset>

                <fieldset className={"form-group"}>
                  <input onChange={e=>setRePassword(e.target.value)} name ={"rePassword"} type={"text"} className={"form-control"} placeholder={"Re-Enter Password"} required/>
                  <small className={"text-muted"}>
                    Re-Enter Password {Password != rePassword?<small className="text-danger">Passwords do not match</small>:''}
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