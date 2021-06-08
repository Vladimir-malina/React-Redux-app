import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

const Navigation = () => {
  return(
    <div className = 'navigation'>
      <Link to = '/posts-list'><span className = 'nav__span'>Posts list</span></Link>
      <Link to = '/user-list'><span className = 'nav__span'>User list</span></Link>
      <Link to = '/todo-list'><span className = 'nav__span'>Todo list</span></Link>
    </div>  
    )
}

export default Navigation