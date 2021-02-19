import Axios from 'axios';
import  React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contyRegAction } from '../actions/contyRegAction';
import { registerAction } from '../actions/registerAction';

const RegContestant = (props)=>{
    const {loading, userInfo, error} = useSelector(state=>state.loggedIn)
  const dispatch = useDispatch()
    const [profPix, setProfPix] = useState('')
    const [cPix, setCPix] = useState('');
    const [contestId, setContestId] = useState(props.location.state.detail)
    
    const submitHandler = async (e)=>{
      console.log("submit was clicked")
      e.preventDefault()
      if (cPix == "true"){
        console.log(userInfo.data.dob)
      dispatch(contyRegAction({fname:userInfo.data.fname, lname:userInfo.data.lname, email:userInfo.data.email,
         dept:userInfo.data.dept,
        level:userInfo.data.level, faculty:userInfo.data.faculty, DOB:userInfo.data.dob,
         phone:userInfo.data.phone, pics:userInfo.data.pics,contestIn:contestId}))}
      else{
        let data = await Axios.post("/users/regcontestant",{
          fname:userInfo.data.fname,
           lname:userInfo.data.lname,
           email:userInfo.data.contestantemail,
          dept:userInfo.data.contestantdept,
         level:userInfo.data.contestantlevel,
          faculty:userInfo.data.contestantfaculty,
         DOBs:userInfo.data.contestantDOB,
          phone:userInfo.data.contestantphone, 
          pics:profPix,
          contestIn:props.location.state.detail})}
      
    }

       return ( userInfo?<div>
            {contestId?contestId:"nothing herr"}
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
                

                <fieldset className={"form-group"}>
                
                  <input onChange={e=>setCPix(e.target.value)} type={"checkbox"} value={"true"} name ={"DOB"} className={""} placeholder={"se your profile picture"} required/>
                  <label className={"text-dark p-2"}>
                    Use Your Profile picture for Contest         </label>
                </fieldset>
                

                

                {/* <fieldset className={"form-group"}>
                  <label className={"input-control"}>
                  <input onChange={e=>setImage(e.target.value)} name ={"pImage"} type={"file"} className={"form-control-file"} placeholder={"Upload profile picture"} required/>
                  </label>
                  <small className={"text-muted"}>
                    Upload profile picture
                  </small>
                </fieldset> */}

                

               <center> <button type = {"submit"} className={"btn btn-info m-4"}>Submit: Reg fee is 5000 NGN</button></center>
               </form>
              </div>
            </div>
          </div>
        </div>:<div>{props.history.push({pathname:"/signin", state:{detail:"You have to Login! to Register"}})}</div>
    )
}

export default RegContestant