// PostDetail.jsx

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentSection from './CommentSection'; // Import the CommentSection component

function PostDetails({ data }) {
  const { postId } = useParams();
  const post = data.find(item => item.id.toString() === postId);
  const [comments, setComments] = useState([]); // State for storing comments

  if (!post) {
    return <p>Post not found</p>;
  }

  // Function to add a new comment to the comments state
  const addComment = newComment => {
    setComments([...comments, newComment]);
  };

  return (
    <div>
      <h2>Post Details</h2>
      <p><strong>Id:</strong> {post.id}</p>
      <p><strong>Email:</strong> {post.email}</p>
      <p><strong>Name:</strong> {post.name}</p>
      <p><strong>Body:</strong> {post.body}</p>
      {/* Include the CommentSection component */}
      <CommentSection addComment={addComment} />
      {/* Render the list of comments */}
      <div>
        <h3>Comments</h3>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PostDetails;
