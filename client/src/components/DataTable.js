import Axios from "axios";
import React, { useEffect, useState } from "react";

export default function DataTable(props) {
  const { post } = props;

  const deleteNote = (id) => {
    window.location.reload();
    // <-- declare id parameter
    Axios.delete(`http://localhost:3002/api/delete/${id}`)
      .then((res) => {
        console.log("deleted", res);
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <tr key={post.id}>
      <th scope="row">{post.id}</th>
      <td scope="row">{post.user_name}</td>
      <td scope="row">{post.title}</td>
      <td scope="row">
        {post.post_text.length > 300
          ? post.post_text.substring(0, 300) + " ..."
          : post.post_text}
      </td>
      <td scope="row">
        <a className="btn btn-success p-1 me-1" href={`/post/${post.id}`}>
          {" "}
          <i className="far fa-edit"></i>{" "}
        </a>
        <button
          className="btn btn-danger p-1"
          onClick={() => deleteNote(post.id)}
        >
          {" "}
          <i className="fas fa-trash"></i>
        </button>
      </td>
    </tr>
  );
}
