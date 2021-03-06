import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
import { set } from 'mongoose';
import { loggeddIn } from '../actions/signedInAction';
import Axios from 'axios';
import { fileLoader } from 'ejs';

function SeeAllMessages(props){
    const [datas, setDatas] = useState('')

    const fetchMsgs = async ()=>{
        const data = await Axios.get("/users/fetchmsgs")
        setDatas(data)

        console.log(data)
    }

    
    console.log("this was lauched from the datas hook")
    console.log(datas)
   

    useEffect(()=>{
        fetchMsgs()
        return ()=>{

        }
    }, [])

    const gyrateTo = (id)=>{
        props.history.push({
            pathname:"/api/authorization",
            state:{id:id}
        })
    }
    return(<div>
       
    
      <div className={"container"}>
      <center><h1 className={"text-info h3"}>All Payment Request</h1></center>

        <div className={"row justify-content-center"}>
            

    
            {/* start of Message card */}
            {datas?datas.data.map((mrD)=>{

            
            return <div key={mrD._id} className={"shadow card m-1 col-lg-3"}>
                        <div className={"card-header"}>
                            12 oct, 2012
                        </div>
                        <div className={"card-body"}>
                            <p className={"text-info"}>
                                <ul className={"list-group"}>
                                <li className={"list-group-item"}>
                                        _id:
                                        <fieldset on className={"form-group"}>
                                       <textarea className={"form-control"} value={mrD._id} disabled>{mrD._id}</textarea>
                                       </fieldset> 
                                    </li >
                                    <li className={"list-group-item"}>
                                       Full Name: 
                                       <fieldset className={"form-group"}>
                                       <textarea className={"form-control"} disabled>{mrD.fullname}</textarea>
                                       </fieldset>
                                    </li>
                                    {/* <li className={"list-group-item"}>
                                        Email of Participant:
                                        <fieldset className={"form-group"}>
                                       <textarea className={"form-control"} disabled>{mrD.email}</textarea>
                                       </fieldset> 
                                    </li > */}
                                    {/* <li className={"list-group-item"}>
                                        contestID:
                                        <fieldset className={"form-group"}>
                                       <textarea className={"form-control"} disabled>{mrD.uniq}</textarea>
                                       </fieldset> 
                                    </li > */}
                                    {/* <li className={"list-group-item"}>
                                        Payment Details: 
                                        <fieldset className={"form-group"}>
                                       <textarea className={"form-control"} disabled>{mrD.alertInfo}</textarea>
                                       </fieldset> 
                                    </li> */}
                                    {/* <li className={"list-group-item"}>
                                        Number of Vote Casted: 
                                        <fieldset className={"form-group"}>
                                       <textarea className={"form-control"} >{mrD.noVotes[0]}</textarea>
                                       </fieldset> 
                                    </li> */}
                                    <li className={"list-group-item"}>
                                        Total Price of vote 
                                        <fieldset className={"form-group"}>
                                       <textarea className={"form-control"} disabled>{mrD.noVotes[1] + "NGN"}</textarea>
                                       </fieldset> 
                                    </li>
                                    {/* <li className={"list-group-item"}>
                                        Email of Voter: 
                                        <fieldset className={"form-group"}>
                                       <textarea className={"form-control"} disabled>{mrD.cEmail}</textarea>
                                       </fieldset> 
                                    </li> */}

                                    {/* <li className={"list-group-item"}>
                                        phone Number of Voter: 
                                        <fieldset className={"form-group"}>
                                       <textarea className={"form-control"} disabled>{mrD.phone}</textarea>
                                       </fieldset> 
                                    </li> */}
                                </ul>
                            </p>
                            <fieldset className={"form-group"}>
                               {mrD.authorized == true ?null:
                               <button onClick={e=>{gyrateTo(mrD._id)}} className={"btn btn-info"}>Authorize</button>} 
                            </fieldset>
                    </div>
                </div>


                }):null}
        </div>
      
      </div>

    </div>)
        
    }
    

export default SeeAllMessages;