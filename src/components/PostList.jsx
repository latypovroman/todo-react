import React from 'react';
import Post from './Post.jsx';

const PostList = ({posts, handleRemovePost}) => {

  return (
    <div>
      <h1 className="todo__title">To Do List</h1>
      {posts.map((post, index) => {
        return <Post handleRemovePost={handleRemovePost} number={index + 1} data={post} key={post.id} />
      })}
    </div>
  );
};

export default PostList;
