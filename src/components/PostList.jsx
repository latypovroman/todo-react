import React from 'react';
import Post from './Post.jsx';
import '../styles/TransitionGroup.css';
import { CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts, handleRemovePost}) => {

  return (
    <div>
      <h1 className="todo__title">To Do List</h1>
        <TransitionGroup>
          {posts.map((post, index) =>
              <CSSTransition
                  key={post.id}
                  timeout={500}
                  classNames="todo"
              >
                  <Post handleRemovePost={handleRemovePost} number={index + 1} data={post} />
              </CSSTransition>
          )}
        </TransitionGroup>
    </div>
  );
};

export default PostList;
