import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpg';
import image6 from '../images/image6.jpg';
import image7 from '../images/image7.jpg';
import { useEffect } from 'react';




const Home = (props)=>{
const [password, setPassword] = useState('')
  useEffect(()=>{
    return ()=>{

    }
  },[])
    return (
    
        <div>
            <div className={"container-fluid mt-5"}>
        <div id={"carouselExampleControls"} className={"carousel slide"} data-ride={"carousel"}>
            <div className={"carousel-inner"}>
                <div className={"carousel-item active"}>
                    <img src={image1} className={"d-block w-100"} alt={"..."}/>
                </div>
                <div className={"carousel-item"}>
                    <img src={image2} className={"d-block w-100"} alt={"..."}/>
                </div>
                <div className={"carousel-item"}>
                    <img src={image3} className={"d-block w-100"} alt={"..."}/>
                </div>
                <div className={"carousel-item"}>
                    <img src={image4} className={"d-block w-100"} alt={"..."}/>
                </div>
                <div className={"carousel-item"}>
                    <img src={image5} className={"d-block w-100"} alt={"..."}/>
                </div>
            </div>
            
        </div>
    </div>

    <div className={"mx-1 card-deck mt-5"}>
        <div className={"card bg-info"}>
          <div className={"card-body"}>
            <h5 className={"card-title"}>Medical Laboratory Test</h5>
            <p className={"card-text"}>Search our Database of Medical Laboratories and Book
                                    a Lab test Now! to know your Health Status, you might be Havin
                                    a life Threatening Micro organism lurking to attack
                                    when your imune is down</p>
            <p className={"card-text"}><p className={"bg-light py-2 rounded-pill text-center "}><Link to={"/"}> Book a Lab test Now</Link></p></p>
            
          </div>
        </div>
        

        <div className={"card"}>
          <div className={"card-body"}>
            <h3 className={"card-title"}>Insure Your health</h3>
            <p className={"card-text"}>See Patients Health records to determine what the should and should not 
                                    take, and also to take precaution on Drug prescriptions, due to Allergies
                                    of some sort, got to patients portal Now to be updated on what they need
                                    to survive</p>
            <p className={"card-text"}><p className={"bg-info py-2 rounded-pill text-center"}>visit The Patient Portal</p></p>
          </div>
        </div>
        <div className={"card bg-info"}>
          <div className={"card-body"}>
            <h5 className={"card-title"}>See A Doctor</h5>
            <p className={"card-text"}>You can search available Hospitals to see doctors that meet your Specification
                                Regarding your health status, we can Link you on a chat, Video chat, or Volp call 
                                depending on the mode of communication you want, meet a doctor now!.</p>
            <p className={"card-text"}><p className={"bg-light py-2 rounded-pill text-center "}>Click To see a Doctor</p></p>
          </div>
        </div>

      </div>
        </div>
    )
}

export default Home;