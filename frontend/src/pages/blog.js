import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import NavBar from '../components/navbar';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg'
const openButton = ()=>{
    document.querySelector('.side-bar').classList.add('open')
}
const closeButton = ()=>{
    document.querySelector('.side-bar').classList.remove('open')
}
const blog = ()=>{
    return (
        <div>
            <NavBar/>

            <div className={"container"}>
                <div className={"row  mb-5"}>
                <div className ={"col-lg-8"}>

                    <div className={"card  mb-2"}>
                    <div className={"card-header"}><span className={"text-bold"}>posted by Franklin Norbert</span></div>
                    <p className={"h3 p-3 card-title text-success"}>New Era Hospital the Next Modern Hospital, Check out what they Have!</p>
                        {/* <img className={"blog-image d-inline"} src={image1}/> */}
                        <div className={"card-body"}>
                        <p className={"card-text"}>The world is turning into something else we want to make it better</p>
                        
                        </div>
                        <div className={"card-footer"}>
                            <span className={"text-muted ml-2"}>2 days ago</span>
                            <span className={"fas fa-comment text-success m-1"}>12</span> 
                            <button className={"btn btn-info ml-auto float-right"}>Read more</button>
                        </div>

                    </div>

                    <div className={"card  mb-2"}>
                    <div className={"card-header"}><span className={"text-bold"}>posted by Franklin Norbert</span></div>
                    <p className={"h3 p-3 card-title text-success"}>FG plans to give all workers Health insurance</p>
                        {/* <img className={"blog-image d-inline"} src={image1}/> */}
                        <div className={"card-body"}>
                        <p className={"card-text"}>FG decides to give all workers a free Health insurance scheme because of sky rocketing
                        health crisis in the country</p>
                        
                        </div>
                        <div className={"card-footer"}>
                            <span className={"text-muted ml-2"}>2 months ago</span>
                            <span className={"fas fa-comment text-success m-1"}>0</span> 
                            <button className={"btn btn-info float-right"}>Read more</button>
                        </div>

                    </div>

                    </div>
                    
                    <div className={"col-lg-4"}>
                        <div className={"card"}>
                            <div className={'card-header text-success'}>
                                Recent Posts
                            </div>
                            <ul className={'list-group'}>
                                <li className={'list-group-item'}>FG okays calling off doctors strike </li>
                                <li className={'list-group-item'}>Ministry of health in support of NHis free health insurance scheme</li>
                                <li className={'list-group-item'}>Plateau hospital to bring in some Over seas foreign equipments</li>
                                <li className={'list-group-item'}>Chief ojo in support of the crazy Enugu frenzy</li>
                                <li className={'list-group-item'}>Hospitals now Reuniting may weathers scheme</li>
                            </ul>

                        </div>
                    </div>
                </div>
        </div>
       <center><Footer/></center> 
        </div>
    )
}

export default blog;

