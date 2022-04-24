import React, {useEffect, useMemo, useState} from 'react';
import FormAddPost from "./AddPostForm";
import PostList from "./PostList";
import '../styles/Main.css';
import MySelect from "./UI/select/MySelect";
import Filter from "./Filter";

const Main = () => {

  const [posts, setPosts] = useState([
    {id: 1, title: "JS", description: "Is a language"},
    {id: 2, title: "HTML", description: "Is a language"},
    {id: 3, title: "CSS", description: "Is a language"}
  ]);
  const [sort, setSort] = useState('');
  const [filter, setFilter] = useState('');



  const getSortedPosts = useMemo(() => {
    const sortedPosts = [...posts].sort((a, b) => {
      if (sort === "id") {
        return a[sort] - b[sort]
      } else if (sort) {
        return a[sort].localeCompare(b[sort])
      }
    })

      if (!sort) {
        return posts
      } else {
        return sortedPosts
      }
  }, [sort, posts])

  const getFilteredSortedPosts = useMemo(() => {
    return getSortedPosts.filter((post) => {
      return post.title.toLowerCase().includes(filter) || post.description.toLowerCase().includes(filter)
    })
  }, [getSortedPosts, filter])


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
      <div>
        <MySelect value={sort} handleChangeSort={sortPosts} />
      </div>
      <Filter value={filter} handleFilterChange={filterPosts}/>
      {getFilteredSortedPosts.length !== 0
        ? <PostList posts={getFilteredSortedPosts} handleRemovePost={handleRemovePost}/>
        : filter ? <p className="todo__placeholder">Cant find such task</p>
                 : <p className="todo__placeholder">You dont have any tasks for now. Use form to create one.</p>
      }
    </main>
  );
};

export default Main;
