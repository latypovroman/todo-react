import React, { useState} from 'react';
import FormAddPost from "./AddPostForm";
import PostList from "./PostList";
import '../styles/Main.css';
import FilterBar from "./FilterBar";
import {usePosts} from "../hooks/usePosts";
import Loader from "./UI/Loader/Loader";

const Main = () => {

  const [posts, setPosts] = useState([
    {id: 1, title: "JS", description: "Is a language"},
    {id: 2, title: "HTML", description: "Is a language"},
    {id: 3, title: "CSS", description: "Is a language"}
  ]);
  const [sort, setSort] = useState('');
  const [filter, setFilter] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const getFilteredSortedPosts = usePosts(posts, sort, filter);

  React.useEffect(() => {
    setIsLoading(false);
  }, [])

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
      { isLoading
          ? <Loader/>
          : <PostList posts={getFilteredSortedPosts} handleRemovePost={handleRemovePost} filter={filter}/>
      }
    </main>
  );
};

export default Main;
