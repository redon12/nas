import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import jsCookie from "js-cookie";
import Axios from 'axios';


const CreateNewPost = (props)=>{

    const [rowse, setRowse] = useState(6)
    const [colse, setColse] = useState(5)
    const [title , setTitle] = useState('')
    const [imageLink, setImageLink] = useState()
    const [post, setPost] = useState('')
    const imagess = [];
    jsCookie.set("ImageLinks", {images:[]})
    const setImages = async (props)=>{
        console.log(props)
        const getImgLink = await Axios.post("/users/uploadimage", {props})
        console.log(getImgLink)
        imagess.push(imageLink)
        jsCookie.set("ImageLinks", {images:imagess})
    }

    return (
        <div className={"container"}>
            <div className={"mt-5"}>
                <Link to={"/"}> &lt; back to home</Link>
            </div>
            <div className={"row justify-content-center"}>
                <div className={"col-lg-6 col-sm-12 my-5"}>
                {/* <span className={"btn btn-info"} onClick={e=>setRowse(rowse + 1)}>Reduce Post content size</span>
                <span className={"btn btn-info"} onClick={e=>setRowse(colse - 1)}>Increase post content size</span> */}

                    <div className={"h3"}><center>Create New Post</center></div>
                    <fieldset className={"form-group"}>
                        <input onChange={e=>setTitle(e.target.value)} className={"form-control"} type={"text"} placeholder={"Post Title"} />
                    </fieldset>

                    <fieldset className={"form-group"}>
                        <input onChange ={e=>setImages(e.target.files)} className={"form-control"} type={"file"} placeholder={"your image"} />
                    </fieldset>

                    <fieldset className={"form-group"}>
                        <ul className={"list-group"}>
                            {imagess.map((link)=>{
                                return <li className={"list-group-item"}>{link}</li>
                            })}
                        </ul>
                    </fieldset>


                    <fieldset className={"form-group"}>
                        <textarea onChange={e=>{setPost(e.target.value)}} cols={colse} rows={rowse} className={"form-control"} placeholder={"Post content"} >

                        </textarea>
                    </fieldset>

                    <fieldset className={"form-group col-lg-12"}>
                        <input value={"Submit Post"} className={"form-control btn btn-outline-info"} type={"submit"} />
                    </fieldset>

                    
                </div>
            </div>
        </div>
    )
}

export default CreateNewPost;