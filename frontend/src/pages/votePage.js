import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import NavBar from '../components/navbar';
import jsCookie from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import {setPriceAction} from '../actions/setPriceAction'

function VotePage(props){
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
                            {/* card starts here */}
                    <div className={"col-sm-12 col-lg-12 card my-5 border border-info p-3"}>
                        <center><img className={"align-self-start img-fluid col-lg-3 col-sm-12"} src={require("../images/medMojoLogo.png")}/></center>
                        <div className={"card-body col-sm-12"}>
                            <center>
                            <p>
                                <strong className={"d-block mb-3 text-info"}>FACE OF NATURAL SCIENCE CONTEST, MADONNA UNIVERSITY</strong>
                                <span className={"d-block mb-3"}><strong>Type:</strong> Face</span>
                                <span className={"d-block mb-3"}><strong>Time:</strong>02 months: 02 days: 23 hours: 40 minutes: 30 seconds</span>
                                <span className={"d-block mb-3"}><strong>Contest Registration is Ongoing </strong><Link to={"/regcontestant"}>Register For Contest Now!</Link></span>
                                
                                <span className={"d-block mb-3"}><strong>Share Contestants</strong></span>
                                <p>
                                    <span className={"text-light bg-info h2 m-1 fab fa-facebook p-2 rounded"}></span>
                                    <span className={"fab bg-info h2 m-1 text-light fa-twitter p-2 rounded"}></span>

                                    <span className={"fab fa-whatsapp bg-success text-light h2 m-1 p-2 rounded"}></span>

                                    <span></span>

                                </p>

                            </p>
                            </center>
                        </div>
                    </div>
                    {/* card ends here */}
                        {/* card starts here */}
                        
                        <div className={"card col-lg-6 shadow mt-2 m-1"}>
                            <img className={"col-lg-6 w-100 p-2 m-2 rounded border"} src={datas.constestantpics}/>
                            <div className={"card-body"}>
                                <p><strong className={"d-block mb-1"}>
                                    Vote Form
                                </strong>
                                Ensure that the Contestant is who you actually want to vote. No refund or reversal of vote if you choose
                                a wrong Contestant.</p>
                                <form onSubmit={submitPayment}>
                                    <fieldset className={"form-group"}>
                                    <input onChange={e=>setItPrice(e)} className={"form-control"} value={noVotes[0]}
                                    placeholder={"Enter the total number of votes you want"} type={"number"} required />
                                    </fieldset>
                                    
                                    <fieldset className={"form-group"}>
                                    <input onChange={e=>setFullname(e.target.value)} className={"form-control"} placeholder={"Enter Your full name"} type={"text"} required />
                                    </fieldset>

                                    <fieldset className={"form-group"}>
                                    <input onChange={e=>setCEmail(e.target.value)} className={"form-control"} placeholder={"Enter a valid email for your receipt"} type={"text"} required/>
                                    </fieldset>

                                    <fieldset className={"form-group"}>
                                    <input onChange={e=>setPhone(e.target.value)} className={"form-control"} placeholder={"Enter your phone Number"} type={"text"} required />
                                    </fieldset>

                                    <center className={"border border-top-0 border-right-0 border-left-0"}>EACH VOTE COST 50NGN:  <strong>YOU PAY {noVotes[1]}NGN  FOR A TOTAL VOTE: {noVotes[0]} </strong></center>
                                    <center className={"border border-info p-2 m-2 text-info blue-shadow"}><span className={"fas fa-info p-3 ultimate-round bg-info text-light m-1"}></span>Make a deposit to any of the Bank account below, Payment would be verified in a short while, vote validated and added.</center>
                                    <fieldset className={"form-group"}>
                                    <select>
                                        <option>Guaranty Trust Bank</option>
                                        <option>First Bank</option>

                                        
                                    </select>
                                    <fieldset className={"form-group"}>
                                        <textarea onChange={e=>setAlertInfo(e.target.value)} cols={4} rows={5} className={"form-control"} placeholder={"paste payment info here REf:2432424242222"}></textarea>
                                    </fieldset>
                                    </fieldset>
                                    <fieldset className={"form-group"}>
                                        <input className={"form-control"} value={"Acct No: 0454552828"} disabled/>
                                        <input className={"form-control"} value={"Acct Name: NAS"} disabled/>

                                    </fieldset>
                                    <fieldset className={"form-group"}>
                                    <button onClick={e=>alert("Vote submitted successfully")} type={"submit"} className={"btn btn-primary "} data-toggle={"modal"} data-target={"#exampleModal"}
                                        data-whatever={"@getbootstrap"}>Upload Payment {"&"} Vote</button>
                                        {/* modal start here */}
                                    {/* <button onClick={e=>castVotes(3)} type={"submit"} className={"btn btn-primary "} data-toggle={"modal"} data-target={"#exampleModal"}
                                        data-whatever={"@getbootstrap"}>Upload Payment {"&"} Vote</button>
                                        <small className={"text-info d-block"}><span className={"fas fa-info mx-1"}></span><strong><span className={"text-info"}>click this button if you have made Payment already</span></strong></small>
                                         
                                    <div className={"modal col-sm-12"} id={"exampleModal"} tabindex={"-1"} role={"dialog"} aria-labelledby={"exampleModalLabel"}
                                    aria-hidden={"true"}>
                                    <div className={"modal-dialog"} role={"document"}>
                                    <div className={"modal-content"}>
                                        <div className={"modal-header"}>
                                        <h5 className={"modal-title"} id={"exampleModalLabel"}>You are to Submit a Proof of Payment {noVotes[1]}NGN</h5>
                                        <button type={"button"} className={"close"} data-dismiss={"modal"} aria-label={"Close"}>
                                            <span aria-hidden={"true"}>&times;</span>
                                        </button>
                                        </div>

                                        <form action={"/users/feedback"} method={"post"}>
                                        <div className={"modal-body col-sm- 12"}>
                                        
                                            <div className={"form-group"}>
                                            <label for={"email"}>Your Email: </label>
                                            <input className={"form-control"} type={"text"} name={"email"}/>
                                            </div>
                                            <div className={"form-group"}>
                                            <label for={"message-text"} className={"col-form-label"}>Transaction or Debit Alert:</label>
                                            <textarea rows= {6} name={"message"} className={"form-control"} id={"message-text"}></textarea>
                                            </div>
                                        
                                        </div>
                                        <div className={"modal-footer"}> */}
                                        {/* <button type={"button"} className={"btn btn-danger"} data-dismiss={"modal"}>Close</button> */}
                                        {/* <button type={"submit"} className={"btn btn-primary"}>Finalize</button>
                                        </div>

                                    
                                    </form>
                                    </div>
                                </div>
                                </div> */}
                            {/* modals end here */}

                                    </fieldset>
                                    </form>
                           
                                
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

export default VotePage;