import React, {useState} from 'react';
import Post from './components/Post.jsx';
import './styles/App.css';

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: "JS", text: "Is a language"},
    {id: 2, title: "JHTML", text: "Is a language"},
    {id: 3, title: "CSS", text: "Is a language"}
  ])

  return (
    <div className="App">
      {posts.map((post) => {
        return <Post data={post} key={post.id} />
      })}
    </div>
  );
}

export default App;
