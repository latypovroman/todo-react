import React from 'react';

const Post = ({data}) => {
  return (
    <div className="post">
      <div className="post__content">
        <h1 className="post__title">{data.id}. {data.title}</h1>
        <p className="post__text">
          {data.text}
        </p>
      </div>
      <div className="post__buttons">
        <button>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Post;
