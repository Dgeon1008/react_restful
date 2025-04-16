import React, { useEffect, useState } from 'react';

const PostContainer = () => {
  const postId = 1;
  const [post, setPost] = useState({})
  const {postTitle, postContent} = post;

  useEffect(() => {
    const getPost = async() => {
      const response = await fetch(`http://localhost:10000/posts/api/post/${postId}`)
      const post = await response.json()
      return post
    }

    // getPost().then(console.log).catch(console.error)
    getPost().then(setPost).catch(console.error)
  }, [])

  return (
    <div>
      <p>제목 : {postTitle}</p>
      <p>내용 : {postContent}</p>
    </div>
  );
};

export default PostContainer;