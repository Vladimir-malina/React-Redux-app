import React, { useState } from 'react'
import '../styles.scss'
import PostList from '../../posts-list/components/post-list'

const Tabs = ({todos, albums, posts, handleFunc}) => {

  const [activeTab, setActiveTab] = useState(1)

  const toggleTab = (index) => {
    setActiveTab(index)
  }
  
  return (
    <div className = 'tabs'>
      <div className = 'tabs__pane'>
        <button 
          className = {activeTab === 1 ? 'tab tab_active' : 'tab'}
          onClick= {() => toggleTab(1)}>
          Albums
        </button>
        <button 
          className = {activeTab === 2 ? 'tab tab_active' : 'tab'}
          onClick = {() => toggleTab(2)} >
          Todos
        </button>
        <button 
          className = {activeTab === 3 ? 'tab tab_active' : 'tab'}
          onClick = {() => toggleTab(3)}>
          Posts
        </button>
      </div>


      <div className = 'tabs__content'>
        <div className = {activeTab === 1 ? 'tab__content tab__content_active' : 'tab__content'}>
          <h2>Albums</h2>
          <ul>
            {albums.map(album => {
              return (
                <li key = {album.id}>
                  {album.title}
                </li>
              )
            })}
          </ul>
        </div>

        <div className = {activeTab === 2 ? 'tab__content tab__content_active' : 'tab__content'}>
          <h2>Todo List</h2>
          <ul>
            {todos.map(todo => {
              return (
                <li key = {todo.id}
                className = 'user-todo-item'
                onClick = {() => handleFunc(todo.completed, todo.id)}>
                  <div className = {todo.completed ? 'user-todo__mark user-todo__mark_done' : 'user-todo__mark'}></div>
                  <div className = {todo.completed ? 'user-todo user-todo_done' : 'user-todo'}>{todo.title}</div>    
                </li>
             )})}
          </ul>
        </div>

        <div className = {activeTab === 3 ? 'tab__content tab__content_active' : 'tab__content'}>
          <PostList posts = {posts}/>
        </div>
      </div>
    </div>
  )
}

export default Tabs