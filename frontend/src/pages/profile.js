import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PromiseProvider } from 'mongoose';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../components/navbar';
import Footer from '../components/footer'
import { fileLoader } from 'ejs';
import Axios from 'axios';
import { loggeddIn } from '../actions/signedInAction';
import Cookie from 'js-cookie'

const openButton = ()=>{
    document.querySelector('.side-bar').classList.add('open')
}
const closeButton = ()=>{
    document.querySelector('.side-bar').classList.remove('open')
}
const Profile = (props)=>{

    const dispatch = useDispatch()
    const loggedIn = useSelector(state=>state.loggedIn)
    const {userInfo} = loggedIn; 
    const [img, setImg] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [oldPassword,setOldPassword] = useState('')
    const [warning, setWarning] = useState('')
    const [confirmNewPassword,setConfirmNewPassword] = useState('')
    const [loading, setLoads] = useState(false)
    
    

    // useEffect(()=>{
    //     setWarning("")
    //     return ()=>{

    //     }
    // },[warning])
   
    
    const [uploadedFiles, setUploadedFiles] = useState(null)
    const SubmitPics = async (e) =>{
        e.preventDefault()
        const formData = new FormData()
        formData.append("file", img)
        formData.append("email", userInfo.data.email)
        // console.log(img)
        console.log(userInfo)
        setLoads(true)
        const image = await Axios.post("/users/uploadimage",formData )
        setLoads(false)
        setUploadedFiles(image.data.uploadFile)
        dispatch(loggeddIn(userInfo.data.email, userInfo.data.pwd))

        alert(image.data.msg)
        Cookie.set("prof", {prof:true})
        props.history.push({pathname:"/api/userpanel", state:"prof"})

        
        console.log(image)
    }
    const ChangePassword = async (e)=>{
        e.preventDefault()
        if (newPassword == confirmNewPassword){
            const data = await Axios.post("/users/changepassword", {newPassword, oldPassword,email:userInfo.email} )
            console.log(data)
            alert(data.data.msg)
            
        }else{
            setWarning("Passwords do not Match")
        }
        
    }
    return (
        userInfo?<div>
            <NavBar/>
            <img onClick={openButton} src={require("../images/medMojoLogo.svg")} className={" bg-light p-1 img-logo side-open-button1 fab fa-firefox display-4 text-success m-3"}/>
               <div className={"beeper-container"}> <div className={" side-open-button beeper  display-4 text-success m-3"}></div></div>
            <div className="side-bar bg-light shadow-lg">
                <span className={"side-close-button text-success"} onClick={closeButton}>x</span>
            <div className={"border"}> <span className={"fas fa-user h1 m-3 text-success"}></span><span className={"text-sucess"}>{userInfo.data.name}</span></div>
                        <Link className={"border border-left-0 border-top-0 border-right-0 m-1 text-dark p-2"} to="/api/appointment"> Home</Link>
                    
                    
                        <Link className={"border border-top-0 border-left-0 border-right-0 m-1 text-dark p-2"} to="/api/appointment"> See Ongoing contest</Link>
                    
                        <Link className={"border border-top-0 border-right-0 border-left-0 m-1 text-dark p-2"} to="/api/appointment"> See your contests</Link>
                   
            </div>

            <div className={"container"}>
                <div className={"row justify-content-center"}>

                    {/* picture page starts here */}
                    <div className={"card  p-1 col-lg-6 border my-2 shadow mb-3"}>
                    {/* upload profile pic starts here */}
                    {uploadedFiles?<img className={"col-lg-6"} src={uploadedFiles}/>:null}
                    <form onSubmit={SubmitPics} className={"card mb-4"}>
                        <center><strong className={"text-info"}>Upload Your Profile Picture</strong></center>
                        <fieldset className={"form-group m-3"}>
                            <center><input required className={"form-control-file"}
                             onChange={e=>setImg(e.target.files[0])} type={"file"}/></center>
                            <small className={"text-muted"}>Upload Pictures</small>
                        </fieldset>

                        <fieldset className={"form-group m-3"}>
                           {loading?<button type={"submit"} className={"btn btn-info col-lg-12"}disabled>loading...</button>:<button type={"submit"} className={"btn btn-info col-lg-12"}>Upload Profile Picture</button>} 
                        </fieldset>
                    </form>

                    <hr></hr>
                    {/* Upload profile pix ends here */}
                        <div className={"card"}>
                            <div className={"card-header text-info"}>
                               <strong> <center>Change Password</center></strong>
                            </div>
                            <div className={"card-body"}>
                       <form onSubmit={ChangePassword}>
                           <fieldset className={"form-group"}>
                           <input required onChange={e=>setOldPassword(e.target.value)} className={"form-control"} placeholder={"Old Password"} type={"text"} />
                           </fieldset> 

                           <fieldset className={"form-group"}>
                           <input required onChange={e=>setNewPassword(e.target.value)} className={"form-control"} placeholder={"New Password"} type={"text"} value={newPassword}/>
                           </fieldset>

                           <fieldset className={"form-group"}>
                           <input required onChange={e=>{setConfirmNewPassword(e.target.value);
                            if(newPassword != confirmNewPassword){setWarning("Passwords do not Match")}
                            else{setWarning(null);
                           
                           }}} className={"form-control"} placeholder={"Confirm New Password"} type={"text"} value={confirmNewPassword}/>
                           <small className={"text-danger"}>{warning}</small>
                           </fieldset>

                           <fieldset className={"form-group"}>
                           <button className={"btn btn-info col-lg-12"} type={"text"} value={""}>
                               Change Password
                               </button>
                           </fieldset>
                       </form>
                       </div>
                            </div>

                       
                    </div>

                   
            </div>
        </div>
       <center><Footer/></center> 
        </div>:<div>{props.history.push('/')}</div>
    )
}

export default Profile;