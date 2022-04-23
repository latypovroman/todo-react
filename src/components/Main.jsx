import React, {useState} from 'react';
import FormAddPost from "./AddPostForm";
import PostList from "./PostList";
import '../styles/Main.css';
import MySelect from "./UI/select/MySelect";

const Main = () => {

  const [posts, setPosts] = useState([
    {id: 1, title: "JS", description: "Is a language"},
    {id: 2, title: "HTML", description: "Is a language"},
    {id: 3, title: "CSS", description: "Is a language"}
  ]);
  const [sort, setSort] = useState('');

  const handleRemovePost = (postForDelete) => {
    setPosts(posts.filter((post) => {
      return post.id !== postForDelete.id
    }))
  }

  const handlePost = (newPost) => {
    setPosts([newPost, ...posts])
  }

  const sortPosts = (sort) => {
    setSort(sort);
    setPosts([...posts].sort((a, b) => {
      if (sort === "id") {
        return a[sort] - b[sort]
      } else {
        return a[sort].localeCompare(b[sort])
      }
    }))
  }

  return (
    <main className="todo">
      <FormAddPost handlePost={handlePost} />
      <div>
        <MySelect value={sort} handleChangeSort={sortPosts} />
      </div>
      {posts.length !== 0
        ? <PostList posts={posts} handleRemovePost={handleRemovePost}/>
        : <p className="todo__placeholder">You dont have any tasks for now. Use form to create one.</p>
      }
    </main>
  );
};

export default Main;
