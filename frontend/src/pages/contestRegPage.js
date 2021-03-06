import  React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contestRegAction } from '../actions/contestRegAction';
import { registerAction } from '../actions/registerAction';

const ContestReg = (props)=>{
    const {loading, regInfo, error} = useSelector(state=>state.regContest)
  const dispatch = useDispatch()
    const [cname, setCname] = useState('')
    const [cimage, setCimage] = useState('')
    const [cvoteprice, setCprice] = useState('')
    const [cdeadline, setCdeadline] = useState('')
    // const [phone, setPhone] = useState('');
    
    const submitHandler = (e)=>{
      console.log("submit was clicked")
      e.preventDefault()
      
      dispatch(contestRegAction({cimage, cvoteprice, cdeadline, cname}))
      if (regInfo){
      props.history.push("/api/admin")
      }
    }
    return (
        <div>
            
          <div className={"container-fluid"}>
            <div className={"row justify-content-center"}>
              <div className={"col-lg-4 col-sm-12 border m-5 shadow rounded"}>
                 <center> <h3 className={'text-muted m-2'}>
                   <span className={"fa fa-user text-info p-3 d-block"}></span>
                   <strong className={""}> Contest Creation!</strong>
                    </h3>
                 {error?<p className={"alert alert-danger"}>{error}</p>:null}</center>
                 <form onSubmit={submitHandler}>
                <fieldset className={"form-group"}>
                  <input onChange={e=>setCname(e.target.value)} type={"text"} name ={"cname"} className={"form-control"} placeholder={"Contest Name"} required/>
                  <small className={"text-muted fas fa-info p-2"}>
                    Contest Name
                  </small>
                </fieldset>

                

                <fieldset className={"form-group"}>
                  <select onChange={(e)=>{setCprice(e.target.value)}} className={"form-control"}>
                    <option>Choose vote Price</option>
                    <option>50</option>
                    <option>100</option>
                    <option>200</option>
                    <option>500</option>
                    <option>1000</option>
                    
                  </select>
                  <small className={"text-muted fas fa-info p-2"}>
                    Price per Vote for Contest
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
                  <input onChange={e=>setCimage(e.target.files[0])} name ={"cimage"} type={"file"} className={"form-control-file"} required/>
                  <small className={"text-muted fas fa-info p-2"}>
                    
                    Upload Contest Banner
                  </small>
                </fieldset>

                <fieldset className={"form-group"}>
                  <input onChange={e=>setCdeadline(e.target.value)} name ={"rePassword"} type={"date"} className={"form-control"} placeholder={"Re-Enter Password"} required/>
                  <small className={"text-muted fas fa-info p-2"}>
                    Set Deadline for Contest </small>
                  
                </fieldset>

               <center> <button type = {"submit"} className={"btn btn-info m-4"}>Submit</button></center>
               </form>
              </div>
            </div>
          </div>
        </div>
    )
}

export default ContestReg