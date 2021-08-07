import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Post(props) {
  const postId = useParams();
  const [postList, setPostList] = useState([]);
  // const posts = JSON.stringify(postList);
  const posts = Object.keys(postList).map((key) => postList[key]);

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
    <div>
      <button onClick={showData}>Show</button>
    </div>
  );
}
