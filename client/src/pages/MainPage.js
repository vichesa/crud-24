import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import DataTable from "../components/DataTable";

export default function MainPage() {
  const [postList, setPostList] = useState([]);
  console.log("data", postList);

  useEffect(() => {
    Axios.get("http://localhost:3002/api/get").then((data) => {
      setPostList(data.data);
    });
  }, []);

  return (
    <div className="container">
      <div className="MainPage">
        <h2>Yolana CRUD Blog</h2>
        <div className="PostContainer text-start mt-4">
          <a href="/createpost" className="text-start">
            <button className="btn btn-success mb-2">Add Post</button>
          </a>
          <div className="Post">
            <table className="table">
              <thead>
                <tr className="table-primary">
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Title</th>
                  <th scope="col">Post</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {postList.map((post) => (
                  <DataTable key={post.id} post={post}></DataTable>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
