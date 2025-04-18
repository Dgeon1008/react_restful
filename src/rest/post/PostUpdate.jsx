import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';

const PostUpdate = () => {

  const { id } = useParams()
  const [post, setPost] = useState({})
  const [isUpdate, setIsUpdate] = useState(false)

  const {register, handleSubmit, getValues, reset, formState: { isSubmitting, isSubmitted, errors }} = useForm({mode:"onChange"})
  
  useEffect(() => {
    const getPost = async () => {
      const response = await fetch(`http://localhost:10000/posts/api/post/${id}`, {
        method : "GET",
      })
      const post = response.json()
      return post
    }
    console.log(post)

    getPost().then((post) => {
      const {postTitle, postContent} = post;
      // // 초기값
      reset({
        postTitle,
        postContent
      })
      setPost(post)
    }).catch(console.error)

  }, [isUpdate])

  return (
    <form onSubmit={handleSubmit(async (data) => {

      const {postTitle, postContent} = data;
      const postVO = {id, postTitle, postContent}

      await fetch(`http://localhost:10000/posts/api/post/${id}`, {
        method : "PUT",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(postVO)
      }).then((res) => {
        if(!res.ok) throw new Error(`에러`)
        setIsUpdate(!isUpdate)
      }).catch(console.error)


    })}>
      <label>
        <p>제목</p>
        <input 
          type="text" placeholder="수정할 제목을 입력하세요."
          {...register("postTitle", {
            required : true,
          })}
        />
        {errors && errors?.postTitle?.type === "required" && (
          <p>제목을 입력하세요</p>
        )}
      </label>

      <label>
        <p>내용</p>
        <input 
          type="text" placeholder="수정할 제목을 입력하세요."
          {...register("postContent", {
            required : true,
          })}
        />
        {errors && errors?.postContent?.type === "required" && (
          <p>내용을 입력하세요</p>
        )}
      </label>
      <div>
        <button disabled={isSubmitting}>정보 수정</button>
        <Link to={`/post/read/${id}`}><button>뒤로 가기</button></Link>
      </div>

    </form>      

  );
};

export default PostUpdate;