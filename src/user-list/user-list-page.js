import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { userListFetchData } from './actions';
import UserList from './components/user-list';

const UserListPage = () => {
  
  const dispatch = useDispatch();
  const users = useSelector(state => state.userList)
  
  useEffect(() => {
    !users.length && dispatch(userListFetchData())
  }, [dispatch, users.length]) 

  return(
    <UserList users = {users}/>
  )
}

export default UserListPage