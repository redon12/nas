import { PromiseProvider } from 'mongoose';
import {Link} from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Footer from '../components/footer';
import NavBar from '../components/navbar';
import Axios from 'axios';
import jsCookie from 'js-cookie';
import ReactCrop from 'react-image-crop';
function ShowContestantsPage(props){

    const [totalVote, setTotalVote] = useState(0)
    const [datas, setDatas] = useState([])
    const getContestants = async (mrUnique)=>{
        // console.log(mrUnique)
        if (mrUnique){
        jsCookie.set("pagecon",{mrUnique})
        }
        const pageUnique = jsCookie.getJSON("pagecon")
        const data = await Axios.post("/users/fetchcontestants",{uniq:pageUnique.mrUnique} )
        console.log("this is from unique cookie")
        console.log(data)
        console.log(pageUnique.mrUnique)
         setDatas(data)
         
    }
    
    useEffect(()=>{
        const contestants = getContestants(props.location.state.detail)
        return ()=>{

        }
    }, [])
    const [datis, setDatis] = useState('')
    const [days, setDays] = useState('')
    const [hours, setHours] =  useState('')
    const [minutes, setMinutes] = useState('')
    const [seconds, setSeconds] = useState('')
    const dateDef = ()=>{
        let deadline = new Date(props.location.state.cdeadline+"T12:00:00")
        let d = new Date()
        let timas = deadline - d

        let days = timas/(1000*60*60*24)
        let hours = (timas % (1000*60*60*24)) / (1000*60*60)
        let minutes = ((timas %(1000*60*60*24)) % (1000 * 60 * 60)) / (1000* 60)
        let seconds = (((timas %(1000*60*60*24)) % (1000 * 60 * 60)) % (1000* 60)) /(1000)
        setDays(Math.floor(days))
        setHours(Math.floor(hours))
        setMinutes(Math.floor(minutes))
        setSeconds(Math.floor(seconds))
        
        setDatis(d.toLocaleTimeString())
    }

    setInterval(dateDef, 1000)

    const pageUnique = jsCookie.getJSON("pagecon")
    // let tots = 0

    // for (let count=0; count < datas.length; count++){
    //     tots = tots + Number(datas.data.vote[count])
        // console.log(tots)
    //  }
    //  setTotalVote(tots)
    
    return (
        <div>
            <NavBar/>
            
            <div className={"container"}>
                <div className={"row justify-content-center"}>
                        {/* card starts here */}
                        <div className={"col-sm-12 col-lg-12 card my-5 border border-info p-3"}>
                        <center><img className={"align-self-start img-fluid col-lg-12 col-sm-12"} src={props.location.state.image}/></center>
                        <div className={"card-body col-sm-12"}>



                            <center>
                            <p>
                                <strong className={"d-block mb-3 text-info"}>{props.location.state.cname}, MADONNA UNIVERSITY</strong>
                                <span className={"d-block mb-3"}><strong>Type:</strong> Face</span>
                                <span className={"d-block mb-3 h4"}><strong className={"text-info"}>Deadline:</strong> {days} days: {hours} hours: {minutes} minutes: {seconds} seconds</span>
                                <span className={"d-block mb-3"}><strong>Contest Registration is Ongoing </strong>
                                <Link to={{pathname:"/api/regcontestant", state:{detail:props.location.state.detail}}}>Register For Contest Now!</Link></span>
                                
                                <span className={"d-block mb-3"}><strong>Share Contestants</strong></span>
                                <p>
                                    <span className={"text-light bg-info h2 m-1 fab fa-facebook-f p-2 rounded"}></span>
                                    <span className={"fab bg-info h2 m-1 text-light fa-twitter p-2 rounded"}></span>

                                    <span className={"fab fa-whatsapp bg-success text-light h2 m-1 p-2 rounded"}></span>

                                    <span></span>

                                </p>

                            </p>
                            </center>
                        </div>
                    </div>
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
                        {datas.data||datas.data==[]?datas.data.contestants.map(conts=>{
                            

                        return(
                           conts.verified? <div onClick={e=>{props.history.push({pathname:"/api/votepage/"+conts._id, state:{detail:conts.contestantemail, uniq:conts.contestIn}})}} className={"card col-lg-3  mt-5 m-1 pointit"}>
                            <div className={"d-block"}><img class={"col-lg-12 border rounded m-2 p-2"} src={conts.constestantpics}/></div>
                            <div className={"card-body"}>
                                <p className={"card-text list-group"}>
                                    <span className={"d-block list-group-item"}><strong>{conts.lname +" "+conts.fname} </strong></span>
                                    <span className={"d-block list-group-item"}>Candidates Number:<strong>{conts.contno}</strong></span>
                                    <span className={"d-block list-group-item"}>Vote Result: <strong>Pending..</strong></span>
                                    <span className={"d-block list-group-item"}>No of Votes:<strong>{conts.vote}</strong></span>
                                    <span className={"d-block list-group-item"}>Total Votes:<strong>{totalVote}</strong></span>

                                    <center><button
                                    onClick={e=>{props.history.push({pathname:"/api/votepage/${conts._id}", state:{detail:conts.contestantemail}})}}
                                    className={"btn btn-info px-5 m-2"}>Vote</button></center>
                                </p>
                            </div>
                        </div>:null
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

export default ShowContestantsPage;