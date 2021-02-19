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

    const dispatch = useDispatch()

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
            pathname:"/showcontestants",
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
                                    data-slide-to="0"></li>
                                <li data-target={"#slider3"} 
                                    data-slide-to={"1"}>
                                </li>
                                <li data-target={"#slider3"}
                                    data-slide-to={"2"}> 
                                </li>
                                <li data-target={"#slider3"}
                                    data-slide-to={"3"}> 
                                </li>
                                <li data-target={"#slider3"}
                                    data-slide-to={"4"}> 
                                </li>
                                <li data-target={"#slider3"}
                                    data-slide-to={"5"}> 
                                </li>
                                <li data-target={"#slider3"}
                                    data-slide-to={"6"}> 
                                </li>

                            </ol>
                            <div className={"carousel-inner"} role={"listbox"}>
                                <div className={"carousel-item active"}>
                                    <img className={"d-block img-fluid"} 
                                        src={require("../images/img5.jpg")}/>
                                </div>

                                <div className={"carousel-item active"}>
                                    <img className={"d-block img-fluid"} 
                                        src={require("../images/img4.jpg")}/>
                                </div>

                                <div className={"carousel-item active"}>
                                    <img className={"d-block img-fluid"} 
                                        src={require("../images/img3.jpg")}/>
                                </div>
                                
                                <div className={"carousel-item active"}>
                                    <img className={"d-block img-fluid"} 
                                        src={require("../images/img2.jpg")}/>
                                </div>

                                <div className={"carousel-item active"}>
                                    <img className={"d-block img-fluid"} 
                                        src={require("../images/img1.jpg")}/>
                                </div>

                                <div className={"carousel-item"}>
                                    <img className={"d-block img-fluid"} 
                                        src={require("../images/img6.jpg")}/>
                                </div>

                                <div className={"carousel-item"}>
                                    <img className={"d-block img-fluid"} 
                                        src={require("../images/img7.jpg")}/>
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
                                    Deadline :{conts.cdeadline}
                                </li>
                                <li className={"list-group-item h6"}>
                                    Vote : {conts.cvoteprice}NGN per vote
                                </li>
                            </ul>
                    </div>
                </div>
                {/* card ends here */}
                        
                    }):null}
                    
                     </div>
                    </div>
                    
                        <p className={"h4 m-1 border p-5 py-5 shadow"}>Ongoing contest</p>
                   
                </div>
                <div className={"row justify-content-center"}>
                        <div className={"pointit card border col-lg-12 m-1"}>
                        <img style={{width:200, height:100}} src={require("../images/medMojoLogo.png")} />
                        <div className={"card-body"}>
                            <p className={"card-text"}>

                                Face of Natural Science
                            </p>

                                <ul className={"list-group"}>
                                    <li className={"list-group-item h6"}>
                                        Deadline : 12<sup>th</sup> march, 2021
                                    </li>
                                    <li className={"list-group-item h6"}>
                                        Vote : N50 per vote
                                    </li>
                                </ul>
                        </div>
                    </div>
                    {/* end of card */}

                    </div>
            </div>
       <center><Footer/></center> 
        </div>
    )
}

export default Blog;

