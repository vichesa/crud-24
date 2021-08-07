import React from "react";

export default function DataTable(props) {
  const { post } = props;
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
        <a href={`/post/${post.id}`}>Edit</a>
      </td>
    </tr>
  );
}
