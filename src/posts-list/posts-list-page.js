import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, useRouteMatch } from 'react-router-dom';

import {postsListFetchData} from './actions'
import  AddPost from './components/add-post';
import  PostsList from './components/post-list';
import './styles.scss'

 
const PostsListPage = () => {
  const {url, path} = useRouteMatch()

  const [posts, setPosts] = useState([])
  const dispatch = useDispatch();

  const fetchPosts = useSelector(state => state.postsList.fetchPosts)
  const addPosts = useSelector(state => state.postsList.addPosts)

  useEffect(() => {
    !fetchPosts.length && dispatch(postsListFetchData())
  }, [ dispatch, fetchPosts.length ])
  
  useEffect(() => {
    setPosts([...fetchPosts, ...addPosts])
  }, [addPosts, fetchPosts])

  return(
    <>
      <PostsList posts = {posts}/>
      <Link to = {`${url}/add-post`} className = 'add-post'>
        Add Post
      </Link>
      <Route path = {`${path}/add-post`} component = {AddPost}/>
    </>  
  )
  
}

export default PostsListPage