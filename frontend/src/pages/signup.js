import React, {Component, useState} from 'react';
import {Link} from 'react-router-dom';
import { registerAction } from '../actions/registerAction';
import { useDispatch, useSelector } from 'react-redux';


const SignUpPage=(props)=>{
  const {loading, regInfo, error} = useSelector(state=>state.register)
  const dispatch = useDispatch()
    const [lname, setLname] = useState('');
    const [fname, setFname] = useState('');
    const [contestantpics, setContestantPics] = useState('');
    const [Password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [contestantemail, setContestantEmail] = useState('');
    const [contestantlevel, setContestantLevel] = useState('');
    const [contestantdept, setContestantDept] = useState('');
    const [contestantfaculty, setContestantFaculty] = useState('');
    const [contestantDOB, setContestantDOB] = useState('')
    const [contestantphone, setContestantPhone] = useState('');
    
    const submitHandler = (e)=>{
      e.preventDefault()
      dispatch(registerAction({lname,contestantemail,
      fname, pwd:Password,contestantfaculty,contestantphone,contestantpics,
        repwd:rePassword, contestantlevel, contestantdept,contestantDOB}))
      // if (regInfo){
      // props.history.push("/signin")
      // }
    }
    return (
        <div>
          <div className={"container-fluid"}>
            <div className={"row justify-content-center"}>
              <div className={"col-lg-4 col-sm-12 border m-5 shadow rounded"}>
                 <center> <h3 className={'text-muted m-2'}>
                   <span className={"fa fa-user text-info p-3 d-block"}></span>
                   <strong className={""}> Contestant Registration!</strong>
                    </h3>
                 {error?<p className={"alert alert-danger"}>{error}</p>:null}</center>
                 <form onSubmit={submitHandler}>
                <fieldset className={"form-group"}>
                  <input onChange={e=>setFname(e.target.value)} type={"text"} name ={"fname"} className={"form-control"} placeholder={"First Name"} required/>
                  <small className={"text-muted fas fa-info p-2"}>
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
                  <input onChange={e=>setContestantEmail(e.target.value)} name ={"email"} type={"email"} className={"form-control"} placeholder={"Email"} required/>
                  <small className={"text-muted"}>
                    Type in your Email
                  </small>
                </fieldset>

                <fieldset className={"form-group"}>
                  <input onChange={e=>setContestantPhone(e.target.value)} name ={"phone"} type={"phone"} className={"form-control"} placeholder={"phone"} required/>
                  <small className={"text-muted"}>
                    Phone Number
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
                  <input onChange={e=>setContestantDOB(e.target.value)} name ={"email"} type={"date"} className={"form-control"} placeholder={"DOB"} required/>
                  <small className={"text-muted"}>
                    Your Date of Birth
                  </small>
                </fieldset>

                <fieldset className={"form-group"}>
                  <input onChange={e=>setContestantDept(e.target.value)} name ={"email"} type={"text"} className={"form-control"} placeholder={"Department"} required/>
                  <small className={"text-muted"}>
                    your department
                  </small>
                </fieldset>

                <fieldset className={"form-group"}>
                  <input onChange={e=>setContestantLevel(e.target.value)} name ={"email"} type={"text"} className={"form-control"} placeholder={"Level"} required/>
                  <small className={"text-muted"}>
                    Your Level
                  </small>
                </fieldset>

                <fieldset className={"form-group"}>
                  <input onChange={e=>setContestantFaculty(e.target.value)} name ={"email"} type={"text"} className={"form-control"} placeholder={"Faculty"} required/>
                  <small className={"text-muted"}>
                    Your Faculty
                  </small>
                </fieldset>

                <fieldset className={"form-group"}>
                  <input onChange={e=>setPassword(e.target.value)} name ={"password"} type={"password"} className={"form-control"} placeholder={"Password"} required/>
                  <small className={"text-muted"}>
                    Type in Password
                  </small>
                </fieldset>

                <fieldset className={"form-group"}>
                  <input onChange={e=>setRePassword(e.target.value)} name ={"rePassword"} type={"password"} className={"form-control"} placeholder={"Re-Enter Password"} required/>
                  <small className={"text-muted"}>
                    Re-Enter Password {Password != rePassword?<small className="text-danger">Passwords do not match</small>:''}
                  </small>
                </fieldset>

               <center> <button type = {"submit"} className={"btn btn-info m-4"}>Submit</button></center>
                <Link className={"d-block"} to={'/signin'}>Already have an Account Sign in</Link>

               </form>
              </div>
            </div>
          </div>
        </div>
    )
}

export default SignUpPage