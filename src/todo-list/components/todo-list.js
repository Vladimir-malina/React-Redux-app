import '../styles.scss'

const TodoList = ({todos, handleFunc, classCompleted, classUncompleted}) => {
  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map(todo => {
          return <li key = {todo.id}
                     className = {todo.completed ? classCompleted : classUncompleted}
                     onClick = {() => handleFunc(todo.completed, todo.id)}>
            {todo.title}
          </li>
        })}
      </ul>
    </div>
  )
}

export default TodoList