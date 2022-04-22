import React, {useState} from 'react';
import FormAddPost from "./AddPostForm";
import PostList from "./PostList";
import '../styles/Main.css';

const Main = () => {

  const [posts, setPosts] = useState([
    {id: 1, title: "JS", description: "Is a language"},
    {id: 2, title: "HTML", description: "Is a language"},
    {id: 3, title: "CSS", description: "Is a language"}
  ])

  const handleRemovePost = (postForDelete) => {
    setPosts(posts.filter((post) => {
      return post.id !== postForDelete.id
    }))
  }

  const handlePost = (newPost) => {
    setPosts([newPost, ...posts])
  }

  return (
    <main className="todo">
      <FormAddPost handlePost={handlePost} />
      <PostList posts={posts} handleRemovePost={handleRemovePost}/>
    </main>
  );
};

export default Main;
