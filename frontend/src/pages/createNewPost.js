import React, { useState } from "react";
import { Link } from "react-router-dom";
import jsCookie from "js-cookie";
import Axios from "axios";
import { SubmitPostAction } from "../actions/submitPostAction";
import { useDispatch } from "react-redux";

const CreateNewPost = (props) => {
  const dispatch = useDispatch()
  const [rowse, setRowse] = useState(6);
  const [colse, setColse] = useState(5);
  const [title, setTitle] = useState("");
  const [imageLink, setImageLink] = useState();
  const [post, setPost] = useState("");
  const [imagess, setImagess] = useState({ images: [] });
  let [imagese, setImagese] = useState([]);
  // jsCookie.set("ImageLinks", {images:[]})
  const formData = new FormData();
  jsCookie.set("ImageLinks", { images: [] });
  const setImages = async (props) => {
    console.log(props);
    formData.append("files", props);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    const getImgLink = await Axios.post("/users/uploadimage", formData, config);
    // console.log(getImgLink.data.uploadFile)
    imagess.images.push(getImgLink.data.uploadFile);

    console.log(imagess);
    setImagess(imagess);
    jsCookie.set("ImageLinks", imagess);
  };
  const showImageLinks = async (e) => {
    setImagese(jsCookie.getJSON("ImageLinks").images);
    //
  };

  const imageSumbmitHandler = async (e) => {
    console.log(e);
    const data = Axios.post("/users/uploadimage", e);
    console.log(data);
  };

  const SubmitHandlers = async (e) => {
    // e.preventDefault();
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    dispatch(SubmitPostAction(title, post))
  };

  return (
    <div className={"container"}>
      <div className={"mt-5"}>
        <Link to={"/"}> &lt; back to home</Link>
      </div>
      <div className={"row justify-content-center"}>
        <div className={"col-lg-6 col-sm-12 my-5"}>
          {/* <span className={"btn btn-info"} onClick={e=>setRowse(rowse + 1)}>Reduce Post content size</span>
                <span className={"btn btn-info"} onClick={e=>setRowse(colse - 1)}>Increase post content size</span> */}

          <div className={"h3"}>
            <center>Create New Post</center>
          </div>
          <fieldset className={"form-group"}>
              <input
                name={"prof"}
                onChange={(e) => setImages(e.target.files[0])}
                className={"form-control"}
                type={"file"}
                placeholder={"your image"}
              />
            </fieldset>
          <form onSubmit={SubmitHandlers}>
            <fieldset className={"form-group"}>
              <input
                onChange={(e) => setTitle(e.target.value)}
                className={"form-control"}
                type={"text"}
                placeholder={"Post Title"}
              />
            </fieldset>

            

            <fieldset className={"form-group"}>
              <button
                className={"btn btn-info"}
                onClick={(e) => showImageLinks()}
              >
                Show Image links
              </button>
              <ul className={"list-group"}>
                {imagese.map((link) => {
                  return (
                    <li className={"list-group-item"}>
                      {"localhost:5000/users/imagess/" + link}
                    </li>
                  );
                })}
              </ul>
            </fieldset>

            <fieldset className={"form-group"}>
              <textarea
                onChange={(e) => {
                  setPost(e.target.value);
                }}
                cols={colse}
                rows={rowse}
                className={"form-control"}
                placeholder={"Post content"}
              ></textarea>
            </fieldset>

            <fieldset className={"form-group col-lg-12"}>
              <button type={"submit"}
                
              >Submit</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateNewPost;
