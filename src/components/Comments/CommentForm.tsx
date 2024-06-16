import React, { useState } from 'react';

const CommentForm: React.FC = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [comment, setComment] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          data-testid="comment-input"
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button data-testid="submit-button" type="submit">Submit</button>
      </form>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommentForm;
