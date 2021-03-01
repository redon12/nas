import Axios from 'axios';
import { fileLoader } from 'ejs';
import  React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { contyRegAction } from '../actions/contyRegAction';
import { registerAction } from '../actions/registerAction';

const RegContestant = (props)=>{
    const {loading, userInfo, error} = useSelector(state=>state.loggedIn)
  const dispatch = useDispatch()
    const [profPix, setProfPix] = useState('')
    const [cPix, setCPix] = useState('true');
    const [contestId, setContestId] = useState(props.location.state.detail)
    const [payment, setPayment] = useState('')

    
    const submitHandler = async (e)=>{
      console.log("submit was clicked")
      e.preventDefault()
      if (cPix == "true"){
        console.log(userInfo.data.dob)
      dispatch(contyRegAction({fname:userInfo.data.fname, lname:userInfo.data.lname, email:userInfo.data.email,
         dept:userInfo.data.dept,
        level:userInfo.data.level, faculty:userInfo.data.faculty, DOB:userInfo.data.dob,payment,
         phone:userInfo.data.phone, pics:userInfo.data.pics,contestIn:contestId}))
        console.log("executed inside if-statement")}
        props.history.push("/userpanel")
        console.log("executed inside else-statement")
      
    }

       return ( userInfo?<div>
          <div className={"container-fluid"}>
            <div className={"row justify-content-center"}>
              <div className={"col-lg-4 col-sm-12 border m-5 shadow rounded"}>
                 <center> <h3 className={'text-muted m-2'}>
                   <span className={"fa fa-user text-info p-3 d-block"}></span>
                   <strong className={""}>Register Contestant!</strong>
                   <span className={"h6 fas fa-info text-info"}> Contest Registration Fee is 5000 NGN</span>
                    </h3>

                 {error?<p className={"alert alert-danger"}>{error}</p>:null}</center>
                 <form onSubmit={submitHandler}>
                

                <fieldset className={"form-group shadow p-2"}>
                
                <label className={"text-dark h6 "}> <input required onChange={e=>setCPix(e.target.value)} type={"checkbox"} value={"true"} name ={"DOB"} className={"mx-2"} placeholder={"se your profile picture"} required/>
                  Your Account Details will be used for this Registration       
                  <small className={"text-muted d-block mx-3"}>You can visit your userpanel later to change info's</small>
                    </label>
                </fieldset>

                <fieldset className={"form-group"}>
                  <ul className={"list-group"}>
                  <center className={"border border-info p-2 m-2 text-info blue-shadow "}><span className={" fas fa-info p-3 ultimate-round bg-info text-light m-1"}></span>Make a deposit to any of the Bank account below, Payment would be verified in a short while, vote validated and added.</center>
                    
                    <li className={"list-group-item"}>
                      Account name:<span className={"text-info"}>Frank Norbert Mba</span>
                    </li>
                    <li className={"list-group-item"}>
                      Bank:<span className={"text-info"}>Guaranty Trust Bank</span>
                    </li>
                    <li className={"list-group-item"}>
                      Account No.:<span className={"text-info"}>0454552828</span>
                    </li>
                  </ul>
                </fieldset>

                <fieldset className={"form-group"}>
                  <textarea onChange={e=>setPayment(e.target.value)} className={"form-control small"} placeholder={"Paste your Proof of payment here: Debit Alert Sent to your phone"} required>

                  </textarea>
                </fieldset>
                

                

                {/* <fieldset className={"form-group"}>
                  <label className={"input-control"}>
                  <input onChange={e=>setImage(e.target.value)} name ={"pImage"} type={"file"} className={"form-control-file"} placeholder={"Upload profile picture"} required/>
                  </label>
                  <small className={"text-muted"}>
                    Upload profile picture
                  </small>
                </fieldset> */}

                <p className={"shadow p-2 small"}>Clicking on submit you agree to our <Link to={"/terms"}> Terms {"&"} Conditions.</Link></p>
               <center> <button type = {"submit"} className={"btn btn-info m-4"}>Submit: Reg fee is 5000 NGN</button></center>
               </form>
              </div>
            </div>
          </div>
        </div>:<div>{props.history.push({pathname:"/signin", state:{detail:"You have to Login! to Register"}})}</div>
    )
}

export default RegContestant