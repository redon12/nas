import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../index.css"
import Footer from '../components/footer';
import NavBar from '../components/navbar';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg'
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { contestRegAction } from '../actions/displayContestAction';
import { usePaystackPayment } from 'react-paystack';
import cookie from 'js-cookie';
const openButton = ()=>{
    document.querySelector('.side-bar').classList.add('open')
}
const closeButton = ()=>{
    document.querySelector('.side-bar').classList.remove('open')
}

// Paystack api starts here------------------------------------------------
// const config = {
//     reference: (new Date()).getTime(),
//     email: "norbertmbafrank@gmail.com",
//     amount: 100,
//     publicKey: 'pk_live_8e0ffb521ebfa547a1f19580ebcfa4c1645e8457',
// };


// you can call this function anything
// const onSuccess = (reference) => {
  // Implementation for whatever you want to do with reference and after success call.
//   console.log(reference);
// };

// you can call this function anything
// const onClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
//   console.log('closed')
// }

// const PaystackHookExample = () => {
//     const initializePayment = usePaystackPayment(config);
//     return (
//       <div>
//           <button onClick={() => {
//               initializePayment(onSuccess, onClose)
//           }}>Paystack Hooks Implementation</button>
//       </div>
//     );
// };

// paystack api ends here-------------------------------------------------
const Blog = (props)=>{
    const {loading,displayInfo, error} = useSelector(state => state.displayContest)
    if(props.location.state == "prof"){
        props.history.push("/userpanel")
    }
    const dispatch = useDispatch()
    if(cookie.getJSON("reload")){
    const resl = cookie.getJSON("reload").reload
    cookie.set("reload", {reload:false})
    if(resl){
        window.location.reload()
    }

    }

    

    if (displayInfo){
        console.log("there is something in display")
    }else{
        console.log("this nothing in display")
    }
    // const fetchIt = ()=>{
    //     dispatch(contestRegAction())
    // }
    // fetchIt()

    useEffect(()=>{
        dispatch(contestRegAction())
        
        return ()=>{
            
        }
    }, [])


    const goToPage = (mrunique, cdeadline, imgs, cname)=>{
        props.history.push({
            pathname:"/api/showcontestants",
            search:"",
            state:{cdeadline ,cname,image:imgs, detail:mrunique}
        })
    }
    // useEffect(()=>{
    //     console.log("this piece of code was executed")        

    //     dispatch(contestRegAction())
        
    //         return ()=>{

    //         }
    //     },[contestRegAction])

    console.log("this follows")
    console.log(displayInfo)
    // const [listContests, setListContests] = useState([])
    // const fetchConts = async ()=>{
    //     let realData = []
    //     const data = await Axios.get("/users/fetchcontests")
    //     console.log("this follows")
    //     console.log(data)
    //     // await setListContests(data.data)
    // }

    // const data = fetchConts()
    // console.log(listContests + " this nigger was printed")
    // setListContests(data)
    
    return (
        <div>
            <NavBar/>

            {/* <PaystackHookExample/> */}
            <div className={"container"}>
                <div className={"row justify-content-center"}>
                    <div className={"col-lg-12"}>
                        <div className={"row justify-content-center"}>

                        {/* carousel starts here */}
                        <div id={"slider3"} className={"col-lg-8 mt-2 carousel slide mb-5"} data-ride={"carousel"}>
                            <ol className={"carousel-indicators"}>
                                <li className={"active"} data-target={"#slider3"}
                                    data-slide-to="0">
                                </li>
                                <li data-target={"#slider3"} 
                                    data-slide-to={"1"}>
                                </li>
                                <li data-target={"#slider3"}
                                    data-slide-to={"2"}> 
                                </li>
                               

                            </ol>
                            <div className={"carousel-inner"} role={"listbox"}>
                                <div className={"carousel-item active"}>
                                    <img style = {{width:600,height:400}} className={"d-block img-fluid"} 
                                        src={require("../images/jaycloud1.jpg")}/>
                                </div>

                                <div className={"carousel-item active"}>
                                    <img style = {{width:600,height:400}} className={"d-block img-fluid"} 
                                        src={require("../images/nasBannerWithArtist.jpg")}/>
                                </div>

                                <div className={"carousel-item active"}>
                                    <img style = {{width:600,height:400}} className={"d-block img-fluid"} 
                                        src={require("../images/nasWeekInvite.jpg")}/>
                                </div>
                                
                                
                                
                            </div>
                            <a className={"carousel-control-prev"} data-target={"#slider3"}
                                data-slide={"prev"}>
                                    <span className={"carousel-control-prev-icon"}>
                                    </span>
                                </a>

                                <a className={"carousel-control-next"} data-target={"#slider3"}
                                data-slide={"next"}>
                                    <span className={"carousel-control-next-icon"}>
                                    </span>
                                </a>
                        </div>
                        {/* carousel ends here */}
                        </div>
                        
                    <div className={"row justify-content-center my-3 p-2 border border-bottom-0 border-right-0 border-left-0"}>
                    
                    {displayInfo?displayInfo.data.map((conts)=>{
                        
                            {/* card starts here */}
                    return <div onClick={e=>goToPage(conts.cuniquename, conts.cdeadline, conts.cimage, conts.cname)} className={"pointit card border col-lg-4 my-5"}>
                    <img className={"self-align-center img-fluid p-2 m-2"} style={{width:400, height:300}} src={conts.cimage} />
                    <div className={"card-body"}>
                        <p className={"card-text"}>
                          <center><strong className={"card-header text-info h4"}>  {conts.cname}</strong></center>
                        </p>

                            <ul className={"list-group"}>
                                <li className={"list-group-item h6"}>
                                    Deadline - {conts.cdeadline}
                                </li>
                                <li className={"list-group-item h6"}>
                                    Vote - {conts.cvoteprice}NGN per vote
                                </li>
                            </ul>
                            <button className={"btn btn-info col-lg-12"}>View More</button>
                    </div>
                </div>
                {/* card ends here */}
                        
                    }):null}
                    
                     </div>
                    </div>
                    
                   
                </div>
                <p className={"h4 m-3 border p-5 py-5 shadow text-info"}>SOC Board Members</p>

                <div className={"row justify-content-center"}>
                    {/* begining of card */}
                        <div className={"pointit card border col-lg-6 m-1"}>
                        <img className={"image-fluid col-lg-12"} src={require("../images/LocChairmanKizito.jpg")} />
                        <div className={"card-body"}>
                            <p className={"card-text"}>

                               <center> <strong>Catechist Ndukwe Blaize Kizito</strong></center>
                            </p>

                                <ul className={"list-group"}>
                                    <li className={"list-group-item h6"}>
                                        Title - SOC Chairman
                                    </li>
                                    <li className={"list-group-item h6"}>
                                        Dept - Computer Science
                                    </li>
                                </ul>
                        </div>
                    </div>
                    {/* end of card */}

                     {/* begining of card */}
                     <div className={"pointit card border col-lg-6 m-1"}>
                        <img className={"image-fluid col-lg-12"} src={require("../images/LocWilliams.jpg")} />
                        <div className={"card-body"}>
                            <p className={"card-text"}>

                               <center> <strong>Wuzor Williams Chibuike</strong></center>
                                
                            </p>

                                <ul className={"list-group"}>
                                    <li className={"list-group-item h6"}>
                                        Title - Co-ordinator Official
                                    </li>
                                    <li className={"list-group-item h6"}>
                                        Dept - Computer Science
                                    </li>
                                </ul>
                        </div>
                    </div>
                    {/* end of card */}

                    </div>
            </div>

            <p className={"h4 m-3 border p-5 py-5 shadow text-info"}>Sponsors</p>


            <div className={"row justify-content-center"}>
                    {/* begining of card */}
                        <div className={"pointit card border col-lg-6 m-1"}>
                        <img className={"image-fluid "} src={require("../images/BIG.jpg")} />
                        <div className={"card-body"}>
                            <p className={"card-text"}>

                               <center> <strong>B.I.G.</strong></center>
                                
                            </p>

                                <ul className={"list-group"}>
                                    <li className={"list-group-item h6"}>
                                        Title - Grand Sponsor
                                    </li>
                                    <li className={"list-group-item h6"}>
                                        Dept : Computer Science
                                    </li>
                                    <li className={"list-group-item h6"}>
                                        Level : Final Year
                                    </li>
                                </ul>
                        </div>
                    </div>
                    {/* end of card */}

                     {/* begining of card */}
                     <div className={"pointit card border col-lg-6 m-1"}>
                        <img className={"image-fluid col-lg-12"} src={require("../images/KizitoSponsor.jpg")} />
                        <div className={"card-body"}>
                            <p className={"card-text"}>

                               <center> <strong>Kizito Okafor</strong></center>
                                
                            </p>

                                <ul className={"list-group"}>
                                    <li className={"list-group-item h6"}>
                                        Title : Grand Sponsor
                                    </li>
                                    <li className={"list-group-item h6"}>
                                        Dept : Optometry
                                    </li>
                                    <li className={"list-group-item h6"}>
                                        Level : 400
                                    </li>
                                </ul>
                        </div>
                    </div>
                    {/* end of card */}

                    </div>
            
                    <p className={"h4 m-3 border p-5 py-5 shadow text-info"}>Artists</p>

            
            <div className={"row justify-content-center"}>
        {/* begining of card */}
            <div className={"pointit card border col-lg-6 m-1"}>
            <img className={"image-fluid "} src={require("../images/jaycloud1.jpg")} />
            <div className={"card-body"}>
                <p className={"card-text"}>

                <center> <strong>JayCloud</strong></center>
                    
                </p>

                    <ul className={"list-group"}>
                        <li className={"list-group-item h6"}>
                            Title : Top Madonna Artist
                        </li>
                        <li className={"list-group-item h6"}>
                            Dept : Computer Science
                        </li>
                        <li className={"list-group-item h6"}>
                            Level : 200
                        </li>
                    </ul>
            </div>
        </div>
        {/* end of card */}

         {/* begining of card */}
         <div className={"pointit card border col-lg-6 m-1"}>
            <img className={"image-fluid col-lg-12"} src={require("../images/YJ2.jpg")} />
            <div className={"card-body"}>
                <p className={"card-text"}>

                <center> <strong>YJ</strong></center>
                    
                </p>

                    <ul className={"list-group"}>
                        <li className={"list-group-item h6"}>
                            Title : Top Madonna Artist
                        </li>
                        <li className={"list-group-item h6"}>
                            Dept : Computer Science
                        </li>
                        <li className={"list-group-item h6"}>
                            Level : Final Year
                        </li>
                    </ul>
            </div>
        </div>
        {/* end of card */}

        </div>

       <center><Footer/></center> 
        </div>
    )
}

export default Blog;

