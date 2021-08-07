import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../App.css";
import { useHistory } from "react-router-dom";

function CreatePost(props) {
  const [userName, setUserName] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  let history = useHistory();

  const submitPost = () => {
    history.push("/");
    Axios.post("http://localhost:3002/api/create", {
      userName: userName,
      title: title,
      text: text,
    });
  };

  return (
    <div className="container">
      <div className="CreatePost">
        <div className="card">
          <div className="card-header">
            <h4>Add Post Form</h4>
          </div>
          <a href="/" className="mt-4 text-start">
            <button className="btn btn-danger small ms-2">Back</button>
          </a>
          <div className="card-body">
            <div className="mb-3 row">
              <label
                htmlFor="username"
                className=" text-start col-sm-2 col-form-label"
              >
                Username :
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label
                htmlFor="title"
                className=" text-start col-sm-2 col-form-label"
              >
                Title :
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label
                htmlFor="post"
                className="text-start col-sm-2 col-form-label"
              >
                Post :
              </label>
              <div className="col-sm-10">
                <textarea
                  className="form-control"
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                ></textarea>
              </div>
            </div>
            <button className="btn btn-primary" onClick={submitPost}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
