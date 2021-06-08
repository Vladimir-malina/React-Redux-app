const initialState = {
  todos: []
}

export default function todoList(state = initialState, action) {
  switch(action.type) {
    case 'TODO_LIST_FETCH_DATA_SUCCESS':
      return  {todos: action.payload} 
        
    case 'TODO_COMPLETED':
      const index = state.todos.findIndex(todo => todo.id === action.payload)
      state.todos[index].completed = true
      return {...state, todos: [...state.todos]}
      
    case 'TODO_UNCOMPLETED':
      const idx = state.todos.findIndex(todo => todo.id === action.payload)
      state.todos[idx].completed = false
      return {...state, todos: [...state.todos]} 

    default:
      return state
  } 
}