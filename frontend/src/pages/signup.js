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
      if (regInfo){
      props.history.push("/signin")
      alert("registration was successful")
      }
    }
    return (

        <div>
          <div className={"container-fluid"}>
            <div className={"row justify-content-center"}>
              {loading?<div className={"posit loading-container"}><div className={"loading"}/></div>:<div className={"col-lg-4 col-sm-12 border m-5 shadow rounded"}>
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
                  <input onChange={e=>setContestantPhone(e.target.value)} name ={"phone"} value={contestantphone} type={"phone"} className={"form-control"} placeholder={"phone"} required/>
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
                  <input onChange={e=>setContestantDOB(e.target.value)} value={contestantDOB} name ={"email"} type={"date"} className={"form-control"} placeholder={"DOB"} required/>
                  <small className={"text-muted"}>
                    Your Date of Birth
                  </small>
                </fieldset>

                <fieldset className={"form-group"}>
                  <select onChange={e=>setContestantDept(e.target.value)} value={contestantdept} name ={"email"} type={"text"} className={"form-control"} placeholder={"Faculty"} required>
                  <option>Select department</option>
                    
                    <option>Computer Science</option>
                    <option>MicroBiology</option>
                    <option>BioChemistry</option>
                    <option>Nursing Science</option>
                    <option>Industrial Chemistry</option>
                    <option>Optometry</option>
                    <option>Public Health</option>
                    <option>Anatomy</option>
                    <option>Physiology</option>
                    <option>Medical Laboratory Science</option>

                    <option>Pharmacy</option>
                    <option>Medicine</option>


                    
                    </select>
                  <small className={"text-muted"}>
                    your department
                  </small>
                </fieldset>

                <fieldset className={"form-group"}>
                  <select onChange={e=>setContestantLevel(e.target.value)} value={contestantlevel} name ={"email"} type={"text"} className={"form-control"} placeholder={"Faculty"} required>
                  <option>Select Level</option>
                    <option>100</option>
                    <option>200</option>
                    <option>300</option>
                    <option>400</option>
                    <option>500</option>
                    <option>600</option>



                    
                    </select>
                  <small className={"text-muted"}>
                    Your Level
                  </small>
                </fieldset>

                <fieldset className={"form-group"}>
                  <select onChange={e=>setContestantFaculty(e.target.value)} value={contestantfaculty} name ={"email"} type={"text"} className={"form-control"} placeholder={"Faculty"} required>
                  <option>Select Faculty</option>
                    
                    <option>Natural Science</option>
                    <option>Health Science</option>
                    <option>Pharmacy</option>
                    <option>Medicine</option>


                    
                    </select>
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
                {regInfo?props.history.push({path:"/signin", state:{msg:"Your Registration was Successful"}}):null}
                <fieldset className={"form-group"}>
                  <input onChange={e=>setRePassword(e.target.value)} name ={"rePassword"} type={"password"} className={"form-control"} placeholder={"Re-Enter Password"} required/>
                  <small className={"text-muted"}>
                    Re-Enter Password {Password != rePassword?<small className="text-danger">Passwords do not match</small>:''}
                  </small>
                </fieldset>

               <center> <button type = {"submit"} className={"btn btn-info m-4"}>{loading?<div className={"posit loading-container"}><div className={"loading"}/></div>:<span>{"Submit"}</span>}</button></center>
                <Link className={"d-block"} to={'/signin'}>Already have an Account Sign in</Link>

               </form>
              </div>}
            </div>
          </div>
        </div>
    )
}

export default SignUpPage