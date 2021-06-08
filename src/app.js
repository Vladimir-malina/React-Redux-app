import React from 'react';
import {BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from './navigation/navigation'
import PostsListPage from './posts-list/posts-list-page'
import TodoListPage from './todo-list/todo-list-page'
import UserListPage from './user-list/user-list-page'
import UserPage from './user/user-page'


const App  = () => {

  return(
    <Router>
      <div className='content'>
        <Navigation/>
        <Route path = '/' exact render = {() => <h2>Welcome</h2>}/>
        <Route path = '/posts-list' component = {PostsListPage} />
        <Route path = '/user-list' exact component = {UserListPage}/>
        <Route path = '/todo-list' component = {TodoListPage}/>
        <Route path = '/user-list/:id' component = {UserPage}/>
      </div>
    </Router> 
  )
}

export default App