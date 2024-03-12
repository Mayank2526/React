import React from 'react';
import { useParams } from 'react-router-dom';

function PostDetails({ data }) {
  const { postId } = useParams();
  const post = data.find(item => item.id.toString() === postId);

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div>
      <h2>Post Details</h2>
      <p><strong>Id:</strong> {post.id}</p>
      <p><strong>Email:</strong> {post.email}</p>
      <p><strong>Name:</strong> {post.name}</p>
      <p><strong>Body:</strong> {post.body}</p>
    </div>
  );
}

export default PostDetails;