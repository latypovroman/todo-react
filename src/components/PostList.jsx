import React from 'react';
import Post from './Post.jsx';

const PostList = ({posts, handleRemovePost}) => {

  return (
    <div>
      <h1>To Do List</h1>
      {posts.map((post, index) => {
        return <Post handleRemovePost={handleRemovePost} index={index + 1} data={post} key={post.id} />
      })}
    </div>
  );
};

export default PostList;
