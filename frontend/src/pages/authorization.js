import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
import { set } from 'mongoose';
import { loggeddIn } from '../actions/signedInAction';
import Axios from 'axios';
import { fileLoader } from 'ejs';
import { authorize } from 'passport';

function Authorization(props){
    const [datas, setDatas] = useState('')
    const [vote, setVote] = useState('')
    const [uniq, setUniq] = useState('')
    const [cEmail, setCEmail] = useState('')
    const [id, setId] = useState('')
    console.log(props.location.state.id)
    const fetchMsgs = async ()=>{
        console.log("this was launched from the datas hook")

        const data = await Axios.post("/users/onefetchmsgs", {id:props.location.state.id})
        setDatas(data.data)
        setVote(data.data.noVotes[0])
        setUniq(data.data.uniq)
        setCEmail(data.data.email)
        setId(data.data._id)


        console.log(data)
    }

    const castVotes = async ()=>{
        console.log("this part executed")
        const votex = await Axios.post("/users/castvote", {id, uniq, vote, email:cEmail})
        alert(votex.data.msg)
    }
    console.log(datas)
    console.log(vote)
   

    useEffect(()=>{
        fetchMsgs()
        return ()=>{

        }
    }, [])
    return(<div>
       
    
      <div className={"container"}>
      <center><h1 className={"text-info h3"}>All Payment Request</h1></center>


        <div className={"row justify-content-center mt-5"}>
            

    
            {/* start of Message card */}
            

            
             {datas?<div key={datas._id} className={"shadow card m-1 col-lg-6"}>
                        <div className={"card-header"}>
                            12 oct, 2012
                        </div>
                        <div className={"card-body"}>
                            <p className={"text-info"}>userpanel
                                <ul className={"list-group"}>
                                <li className={"list-group-item"}>
                                        _id:
                                        <fieldset on className={"form-group"}>
                                       <textarea className={"form-control"} value={datas._id} disabled>{datas._id}</textarea>
                                       </fieldset> 
                                    </li >
                                    <li className={"list-group-item"}>
                                       Full Name: 
                                       <fieldset className={"form-group"}>
                                       <textarea className={"form-control"} disabled>{datas.fullname}</textarea>
                                       </fieldset>
                                    </li>
                                    <li className={"list-group-item"}>
                                        Email of Participant:
                                        <fieldset className={"form-group"}>
                                       <textarea className={"form-control"} value={cEmail} disabled></textarea>
                                       </fieldset> 
                                    </li >
                                    <li className={"list-group-item"}>
                                        contestID:
                                        <fieldset className={"form-group"}>
                                       <textarea className={"form-control"} value={uniq} disabled></textarea>
                                       </fieldset> 
                                    </li >
                                    <li className={"list-group-item"}>
                                        Payment Details: 
                                        <fieldset className={"form-group"}>
                                       <textarea className={"form-control"} disabled>{datas.alertInfo}</textarea>
                                       </fieldset> 
                                    </li>
                                    <li className={"list-group-item"}>
                                        Number of Vote Casted: userpanel
                                        <fieldset className={"form-group"}>
                                       <textarea onChange={e=>setVote(e.target.value)} className={"form-control"} value={vote}></textarea>
                                       </fieldset> 
                                    </li>
                                    
                                    <li className={"list-group-item"}>
                                        Total Price of vote 
                                        <fieldset className={"form-group"}>
                                       <textarea className={"form-control"} disabled>{datas.noVotes[1] + "NGN"}</textarea>
                                       </fieldset> 
                                    </li>
                                    <li className={"list-group-item"}>
                                        Email of Voter: 
                                        <fieldset className={"formuserpanel-group"}>
                                       <textarea className={"form-control"} disabled>{datas.cEmail}</textarea>
                                       </fieldset> 
                                    </li>

                                    <li className={"list-group-item"}>
                                        phone Number of Voter: 
                                        <fieldset className={"form-group"}>
                                       <textarea className={"form-control"} disabled>{datas.phone}</textarea>
                                       </fieldset> 
                                    </li>
                                </ul>
                            </p>
                            <fieldset className={"form-group"}>
                            {datas.authorized == true ?null:
                               <button onClick={e=>{castVotes()}} className={"btn btn-info"}>Authorize</button>} 
                            </fieldset>
                    </div>
                </div>:null}

        </div>
      
      </div>

    </div>)
        
    }
    

export default Authorization;