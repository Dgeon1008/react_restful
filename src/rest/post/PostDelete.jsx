import React from 'react';
import { useParams } from 'react-router-dom';

const PostDelete = () => {

  const { id } = useParams()

  const remove = async () => {
    if(window.confirm("정말로 삭제하시겠습니까?")){
      await fetch(`http://localhost:10000/posts/api/post/${id}`, {
        method : "DELETE"
      })
      .then((res) => {
        if(!res.ok) throw new Error("게시글 삭제 중 알 수 없는 오류 발생")
        // 메인으로
        window.location.href = "/post"
      })
      .catch("알 수 없는 오류")
    }
  }

  return (
    <div>
      <button onClick={remove}>게시글 삭제</button>
    </div>
  );
};

export default PostDelete;