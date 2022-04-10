import React, {useState} from 'react';
import PostList from './components/PostList.jsx';
import FormAddPost from './components/AddPostForm.jsx';
import './styles/App.css';

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: "JS", description: "Is a language"},
    {id: 2, title: "HTML", description: "Is a language"},
    {id: 3, title: "CSS", description: "Is a language"}
  ])

  const handlePost = (newPost) => {
    setPosts([newPost, ...posts])
  }

  const handleRemovePost = (postForDelete) => {
    setPosts(posts.filter((post) => {
      return post.id !== postForDelete.id
    }))
  }



  return (
    <div className="App">
      <FormAddPost handlePost={handlePost} />
      <PostList posts={posts} handleRemovePost={handleRemovePost}/>
    </div>
  );
}

export default App;
