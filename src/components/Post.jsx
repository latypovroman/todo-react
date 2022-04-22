import React from 'react';
import MyButton from './UI/button/SubmitButton.jsx';

const Post = ({data, number, handleRemovePost}) => {

  const handleDeleteClick = () => {
    handleRemovePost(data)
  }

  return (
    <div className="post">
      <div className="post__content">
        <h1 className="post__title">{number}. {data.title}</h1>
        <p className="post__text">
          {data.description}
        </p>
      </div>
      <div className="post__buttons">
        <MyButton onClick={handleDeleteClick}>
          Delete
        </MyButton>
      </div>
    </div>
  );
};

export default Post;
