import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todoListFetchData, todoListItemUncompleted,todoListItemCompleted } from './actions';
import TodoList from './components/todo-list';

const TodoListPage = () => {
   
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todoList.todos )
  
  useEffect (() => {
    !todos.length && dispatch(todoListFetchData())
  }, [dispatch, todos.length])
  
  const handleComplete = (completed, id) => {
    if (completed) {
      dispatch(todoListItemUncompleted(id))
    } else if (!completed) {
      dispatch(todoListItemCompleted(id))
    }
  }

  return(
    <TodoList handleFunc = { handleComplete }
      todos = {todos}
      classCompleted = 'todo_done'
      classUncompleted = 'todo'/>
  )
}

export default TodoListPage