import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom';

const UserList = ({users}) => {
  const { url } = useRouteMatch()

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => {
          return ( 
          <li key = {user.id}>
            <Link to = {`${url}/${user.id}`} >  
              {user.username}
            </Link>
          </li>
        )})}
      </ul>
    </div>
  )
}

export default UserList