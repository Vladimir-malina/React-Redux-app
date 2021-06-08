import React from 'react';
import { useForm } from 'react-hook-form'
import { addPostFetch } from '../actions'
import { useDispatch } from 'react-redux'

const AddPost = () => {

  const dispatch = useDispatch()
  const {register, handleSubmit} = useForm()

  const onSubmit = (data) => {
    dispatch(addPostFetch(data))
  }

  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className = 'add-post__header'>Add your post</h2>
      <div>
        <input type='text' placeholder='title' {...register('title')}></input>
      </div> 
      <br/> 
      <div>
        <textarea type='text' placeholder='your post' {...register('body')} rows='8'></textarea>
      </div>
      <div>
        <input type='number' placeholder='your id' {...register('userId', {valueAsNumber:true})}></input>
      </div>
      <br/>
      <div>
        <input type='submit'></input>
      </div>
    </form>
  )
}

export default AddPost
