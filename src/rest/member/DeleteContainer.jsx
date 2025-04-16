import React from 'react';
import { useForm } from 'react-hook-form';


const DeleteContainer = () => {

  const {register, handleSubmit, getValues, formState: { isSubmitting, isSubmitted, errors }} = useForm({mode:"onChange"})

  return (
    <form onSubmit={handleSubmit(async (data) => {

      console.log(data)
      const id = 1;

      fetch(`http://localhost:10000/members/api/remove/${id}`, {
        method : "DELETE",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(id)
      })


    })}>

    <button disabled={isSubmitting}>회원 탈퇴</button>
    </form>

  );
};

export default DeleteContainer;