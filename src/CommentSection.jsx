import React, { useState } from 'react';

function CommentSection({ addComment }) {
  const [commentText, setCommentText] = useState('');

  const handleCommentChange = event => {
    setCommentText(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (commentText.trim() !== '') {
      addComment(commentText);
      setCommentText('');
    }
  };

  return (
    <div>
      <h3>Add a Comment</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          value={commentText}
          onChange={handleCommentChange}
          placeholder="Type your comment here..."
          rows="4"
          cols="50"
        ></textarea>
        <br />
        <button type="submit">Submit Comment</button>
      </form>
    </div>
  );
}

export default CommentSection;