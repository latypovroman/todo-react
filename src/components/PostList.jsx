import React from 'react';
import Post from './Post.jsx';
import '../styles/TransitionGroup.css';
import { CSSTransition, TransitionGroup } from "react-transition-group";

const PostList = ({ posts, handleRemovePost, filter }) => {

  const noPostsNotifying = () => {
    return filter
        ? <p className="todo__placeholder">Cant find such task</p>
        : <p className="todo__placeholder">You dont have any tasks for now. Use form to create one.</p>
  }

  return (
    <div>
      <h1 className="todo__title">To Do List</h1>
      {posts.length === 0 && noPostsNotifying()}
          <TransitionGroup>
            {posts.map((post, index) =>
                <CSSTransition
                    key={post.id}
                    timeout={500}
                    classNames="todo"
                >
                  <Post handleRemovePost={handleRemovePost} number={index + 1} data={post}/>
                </CSSTransition>
            )}
          </TransitionGroup>
    </div>
  );
};

export default PostList;
