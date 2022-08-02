import React, { useState} from 'react';
import FormAddPost from "./AddPostForm";
import PostList from "./PostList";
import '../styles/Main.css';
import FilterBar from "./FilterBar";
import {usePosts} from "../hooks/usePosts";

const Main = () => {

  const [posts, setPosts] = useState([
    {id: 1, title: "JS", description: "Is a language"},
    {id: 2, title: "HTML", description: "Is a language"},
    {id: 3, title: "CSS", description: "Is a language"}
  ]);
  const [sort, setSort] = useState('');
  const [filter, setFilter] = useState('');
  const getFilteredSortedPosts = usePosts(posts, sort, filter);

  const handleRemovePost = (postForDelete) => {
    setPosts(posts.filter((post) => {
      return post.id !== postForDelete.id
    }))
  }

  const handlePost = (newPost) => {
    setPosts([newPost, ...posts])
  }

  const sortPosts = (sort) => {
    setSort(sort)
  }

  const filterPosts = (filter) => {
    filter = filter.toLowerCase();
    setFilter(filter);
  }


  return (
    <main className="todo">
      <FormAddPost handlePost={handlePost} />
      <FilterBar
        sort={sort}
        sortPosts={sortPosts}
        filter={filter}
        filterPosts={filterPosts}
      />
      {getFilteredSortedPosts.length !== 0
        ? <PostList posts={getFilteredSortedPosts} handleRemovePost={handleRemovePost}/>
        : filter ? <p className="todo__placeholder">Cant find such task</p>
                 : <p className="todo__placeholder">You dont have any tasks for now. Use form to create one.</p>
      }
    </main>
  );
};

export default Main;
