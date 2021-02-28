import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import NavBar from '../components/navbar';
import jsCookie from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import {setPriceAction} from '../actions/setPriceAction'

function ApprovePage(props){
        const [email, setEmail] = useState(props.location.state.detail)
        const [payeeEmail, setPayeeEmail] = useState("")
        const [fullname, setFullname] = useState("")
        const [datas, setDatas] = useState({})
        const [VoteInfo, setVoteInfo] = useState('')
        const [noVotes, setNoVotes] = useState(['', 0])
        const [price, setPrice] = useState(0)
        const dispatch = useDispatch()
        const [alerts, setAlert] = useState('')
        const {loading, priceInfo, error} = useSelector(state=>state.pricey)
        const [alertInfo, setAlertInfo] = useState('')
        const [votePrice, setVotePrice] = useState('')
        const [numVote, setNumVote] = useState('')
        const [cEmail, setCEmail] = useState('')
        const [phone, setPhone] = useState('')


        const setItPrice = async (e)=>{
            e.preventDefault()
            setNoVotes([Number(e.target.value), Number(e.target.value)*50] )
            setPrice(Number(noVotes) * 50)
            setVotePrice(50)

        }

        useEffect(()=>{
            setPrice(price)
            return ()=>{}
        },[price])
        const fetchContInfo = async () =>{
            
            jsCookie.set("userCont", {emails:props.location.state.detail})
            const ems = jsCookie.getJSON("userCont").emails
            setEmail(ems)
            
            const data = await Axios.post("/users/fetchcontestantra",{email, uniq:props.location.state.uniq} )

            console.log("this shows the email:")
            console.log(email)
            setDatas(data.data)
        }

        useEffect(()=>{
            fetchContInfo()
            return ()=>{

            }
        }, [])
        const castVotes = async (vote)=>{
            const data = await Axios.post("/users/castvote", {alerts,vote,email,uniq:props.location.state.uniq})
            setVoteInfo(data)
        }
        console.log(datas)

        const submitPayment = async (e)=>{
            console.log("we got in")
            

            
            e.preventDefault()
            
            const data = await Axios.post("/users/payments",
             {votePrice,noVotes , email,
                 fullname, alertInfo, cEmail,
                  uniq:props.location.state.uniq, phone,

                    })
            console.log(data)
            console.log("this function was executed")

            
            
        }
    return (
        <div>
            <NavBar/>
            <div className={"container"}>
                <div className={"row justify-content-center"}>
                    <p className={"h4"}></p>
                    <div className={"col-lg-12 "}>
                        <div className={"row justify-content-center"}>
                           
                        
                        <div className={"card col-lg-6 shadow mt-2 m-1"}>
                            <img className={"col-lg-6 w-100 p-2 m-2 rounded border"} src={datas.constestantpics}/>
                            <div className={"card-body"}>
                                <p><strong className={"d-block mb-1"}>
                                    Vote Form
                                </strong>
                                Ensure that the Contestant is who you actually want to vote. No refund or reversal of vote if you choose
                                a wrong Contestant.</p>
                           
                                
                            </div>
                        </div>
                        {/* cards end here */}

                        {/* card starts here */}
                        
                        <div className={"card col-lg-6 shadow mt-5 m-1"}>
                           
                            <div className={"card-body"}>
                               
                                <p className={"card-text "}>
                                    <span className={"d-block m-2"}><strong>{datas.fname} {datas.lname} - FACE OF NATURAL SCIENCE</strong></span>
                                    <span className={"d-block m-2"}>Candidates Number:<strong>001</strong></span>

                                    <center className={"border border-top-0 border-right-0 border-left-0"}><strong>Voting Details</strong></center>
                                    <span className={"d-block m-2"}>Vote Result: <strong>11.54%</strong></span>
                                    <span className={"d-block m-2"}>No of Votes:<strong>{datas.vote}</strong></span>
                                </p>
                            </div>
                        </div>
                        {/* cards end here */}


                        
                        </div>
                    </div>
                </div>
            </div>
           <center> <Footer/></center>
        </div>
    )
}

export default ApprovePage;