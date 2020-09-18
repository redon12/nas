import React from 'react';
import { Link } from 'react-router-dom';
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

            <div className={"container"}>
                <div className={"row  mb-5"}>
                <div className ={"col-lg-8"}>
                    <div className={"card  mb-2"}>
                    <div className={"card-header"}><span className={"text-bold"}>posted by Franklin Norbert</span></div>
                    <p className={"h3 p-3 card-title text-info"}>New Era Hospital the Next Modern Hospital, Check out what they Have!</p>
                        {/* <img className={"blog-image d-inline"} src={image1}/> */}
                        <div className={"card-body"}>
                        <p className={"card-text"}>The world is turning into something else we want to make it better</p>
                        
                        </div>
                        <div className={"card-footer"}>
                            <span className={"text-muted ml-2"}>2 days ago</span>
                            <span className={"fas fa-comment text-info m-1"}>12</span> 
                        </div>

                    </div>

                    <div className={"card col-lg-8 mb-2"}>
                    <p className={"h3 d-inline text-info"}>FG to deploy New Health Policy on health Insurance</p>
                        {/* <img className={"blog-image d-inline"} src={image2}/> */}
                        <p>The world is turning into something else we want to make it better</p>
                        <span className={"fas fa-comment text-info m-1"}>6</span>
                        
                    </div>
                    </div>
                </div>
        </div>
        </div>
    )
}

export default blog;

