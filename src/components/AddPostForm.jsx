import React, {useState} from 'react';
import SubmitButton from './UI/button/SubmitButton.jsx';
import MyInput from './UI/input/MyInput.jsx';

const FormAddPost = ({handlePost}) => {

  const [post, setPost] = useState({
    title: '',
    description: ''
  });

  const handleChangeTitle = (evt) => {
    setPost({
      ...post,
      title: evt.target.value
    })
  }

  const handleChangeDescription = (evt) => {
    setPost({
      ...post,
      description: evt.target.value
    })
  }

  const addNewPost = (evt) => {
    evt.preventDefault();

    const newPost = {
      id: Date.now(),
      ...post
    };
    handlePost(newPost);
    setPost({
      title: '',
      description: ''
    });
  }

  return (
  <form className="todo__form">
    <MyInput value={post.title} onChange={handleChangeTitle} type="text" placeholder="Task name"></MyInput>
    <MyInput value={post.description} onChange={handleChangeDescription} type="textarea" placeholder="Task description"></MyInput>
    <SubmitButton onClick={addNewPost}>Create TO DO</SubmitButton>
  </form>
  );
};

export default FormAddPost;
