import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';


const PostRead = () => {
  // 쿼리스트링
  // const [searchParams] = useSearchParams();
  // console.log(searchParams.get("id"))

  // URL 파라미터
  const { id } = useParams()
  
  
  // Post 게시글 1개 조회하기
  const [post, setPost] = useState({})
  const {postTitle, postContent} = post;

  useEffect(() => {
    const getPost = async () => {
      const response = await fetch(`http://localhost:10000/posts/api/post/${id}`, {
        method : "GET",
    })
      const post = response.json()
      return post
    }
    getPost().then(setPost).catch(console.error)
  }, [])

  return (
    <div>
      <p>제목 : {postTitle}</p>
      <p>내용 : {postContent}</p>
      <Link to={`/update/${id}`}><button>수정</button></Link>
      <Link to={`/remove/${id}`}><button>삭제</button></Link>
    </div>
  );
};

export default PostRead;