import { PromiseProvider } from 'mongoose';
import {Link} from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Footer from '../components/footer';
import NavBar from '../components/navbar';
import Axios from 'axios';
import jsCookie from 'js-cookie';
import ReactCrop from 'react-image-crop';
function SeeTotalContestants(props){

    
    const [datas, setDatas] = useState([])
    const getContestants = async ()=>{
        // console.log(mrUnique)
        
        
        const data = await Axios.post("/users/fetchallcontestants",{} )
        console.log("this is from unique cookie")
        console.log(data)
         setDatas(data)
    }
    useEffect(()=>{
        const contestants = getContestants()
        return ()=>{

        }
    }, [])
    

    const pageUnique = jsCookie.getJSON("pagecon")
    
    return (
        <div>
            <NavBar/>
            
            <div className={"container"}>
                <div className={"row justify-content-center"}>
                        {/* card starts here */}
                        
                    {/* card ends here */}
                    {/* media starts here
                    <div className={"media my-5 border border-info p-3"}>
                        <img className={"align-self-center img-fluid col-lg-3"} src={require("../images/medMojoLogo.png")}/>
                        <div className={"media-body"}>
                            <p>
                                <strong className={"d-block mb-3 text-info"}>FACE OF NATURAL SCIENCE CONTEST, MADONNA UNIVERSITY</strong>
                                <span className={"d-block mb-3"}><strong>Type:</strong> Pageant</span>
                                <span className={"d-block mb-3"}><strong>Time:</strong>02 months: 02 days: 23 hours: 40 minutes: 30 seconds</span>
                                <span className={"d-block mb-3"}><strong>Share Contestants</strong></span>
                                <p>
                                    <span className={"text-light bg-info h2 m-1 fab fa-facebook p-2 rounded"}></span>
                                    <span className={"fab bg-success h2 m-1 text-light fa-twitter p-2 rounded"}></span>

                                    <span className={"fab fa-whatsapp bg-success text-light h2 m-1 p-2 rounded"}></span>

                                    <span></span>

                                </p>

                            </p>
                        </div>
                    </div> */}
                    {/* media ends here */}
                    <p className={"h4"}></p>
                    <div className={"col-lg-12 "}>
                        <div className={"row justify-content-center"}>
                        {/* card starts here */}
                        {datas.data||datas.data==[]?datas.data.map(conts=>{
                        return(
                        <div onClick={e=>{props.history.push({pathname:"/api/approvepage/"+conts._id, state:{detail:conts.contestantemail, uniq:conts.contestIn}})}} className={"card col-lg-3  mt-5 m-1 pointit"}>
                            <img style={{width:300,height:300}} class={"col-lg-12 w-100 border rounded m-2 p-2"} src={conts.constestantpics}/>
                            <div className={"card-body"}>
                                <p className={"card-text list-group"}>
                                    <span className={"d-block list-group-item"}><strong>{conts.lname +" "+conts.fname} </strong></span>
                                    <span className={"d-block list-group-item"}>Candidates Number:<strong>{conts.contno}</strong></span>
                                    <span className={"d-block list-group-item"}>Vote Result: <strong>11.54%</strong></span>
                                    <span className={"d-block list-group-item"}>No of Votes:<strong>{conts.vote}</strong></span>
                                   {conts.verified?null: <center><button 
                                    onClick={e=>{props.history.push({pathname:"/api/approvepage/"+conts._id, state:{detail:conts.contestantemail}})}}
                                    className={"btn btn-success px-5"}>Approve</button></center>}
                                </p>
                            </div>
                        </div>
                         )}):<div className={"card"}>No Contestants yet Click to Register</div>} 
                        {/* cards end here */}

                        
                        </div>
                    </div>
                </div>
            </div>
            <center><Footer/></center>
        </div>
    )
}

export default SeeTotalContestants;