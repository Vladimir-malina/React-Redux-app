import {combineReducers} from 'redux'

import postsList from './posts-list/reducer'
import userList from './user-list/reducer'
import todoList from './todo-list/reducer'
import userDetails from './user/reducer'

const rootReducer = combineReducers({
  postsList,
  userList,
  todoList,
  userDetails
})

export default rootReducer