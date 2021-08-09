import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Post(props) {
  const postId = useParams();
  const [postList, setPostList] = useState([]);
  // const posts = JSON.stringify(postList);
  const posts = Object.keys(postList).map((key) => postList[key]);

  const post = JSON.stringify(posts);

  console.log("post", posts);

  useEffect(() => {
    Axios.get("http://localhost:3002/api/get").then((data) => {
      setPostList(data.data);
    });
  }, []);
  const showData = () => {
    console.log("data", JSON.stringify(postList));
  };
  return (
    <div className="container mt-4">
      <div className="button d-flex justify-content-around">
        <a href="/" className="btn btn-danger mb-4">
          Back
        </a>
        <button className="btn btn-primary mb-4" onClick={showData}>
          Show
        </button>
      </div>
      <div className="card">
        <li>{post}</li>
      </div>
    </div>
  );
}
