import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faEnvelope,
         faPhone,
         faBuilding,
         faLocationArrow } from '@fortawesome/free-solid-svg-icons'

import { userDetailsAlbums,
         userDetailsTodos,
         userDetailsPosts,
         userTodoUncompleted,
         userTodoCompleted } from './actions'

import { userListFetchData } from '../user-list/actions'
import Tabs from './components/user-details-tabs'
import User from './components/user'
import './styles.scss'

const UserPage = () => {

  const dispatch = useDispatch()
  const {id} = useParams() 
  const users = useSelector(state => state.userList)

  const user = users.find(usr => usr.id === Number(id))
  let userData

  if (user) {
    userData = (
      <>
        <h2>{user.name}</h2>
        <div className = 'user__prop'>
          <FontAwesomeIcon icon = {faEnvelope} />
          <div className = 'user__prop_text'>
            <p>{user.email}</p>
            <p className = 'prop__name'>email</p>
          </div>
        </div>
        <div className = 'user__prop'>
          <FontAwesomeIcon icon = {faPhone} />
          <div className = 'user__prop_text'>
            <p>{user.phone}</p>
            <p className = 'prop__name'>phone</p>
          </div>
        </div>
        <div className = 'user__prop'>
          <FontAwesomeIcon icon = {faBuilding} />
          <div className = 'user__prop_text'>
            <p>{user.company.name}</p>
            <p className = 'prop__name'>company</p>
          </div>
        </div>
        <div className = 'user__prop'>
          <FontAwesomeIcon icon = {faLocationArrow} />
          <div className = 'user__prop_text'>
            <p>{user.address.city}, {user.address.street}</p>
            <p>{user.address.zipcode}</p>
            <p className = 'prop__name'>address</p>
          </div>
        </div> 
      </>
    )
  } else {
    dispatch(userListFetchData())
  }

  const albums = useSelector(state => state.userDetails.albums)
  const todos = useSelector(state => state.userDetails.todos)
  const posts = useSelector(state => state.userDetails.posts)
  

  useEffect(() => {
    dispatch(userDetailsAlbums(id))
    dispatch(userDetailsTodos(id))
    dispatch(userDetailsPosts(id))
  },[ id ])

  const handleComplete = (completed, id) => {
    console.log(completed, id)
    if (completed) {
      dispatch(userTodoUncompleted(id))
    } else if (!completed) {
      dispatch(userTodoCompleted(id))
    }
  }
  
  return (
    <>
      <User userData = {userData}/>
      <Tabs todos = {todos} albums = {albums} posts = {posts} handleFunc = {handleComplete}/>
    </>
  )
}


export default UserPage