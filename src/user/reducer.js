const initialState = {albums: [],
  todos: [],
  posts: []}

export default function userDetails (state = initialState, action) {
switch (action.type) {
case 'USER_DETAIL_ALBUMS_SUCCESS':
return {...state, albums: action.payload}

case 'USER_DETAIL_TODOS_SUCCESS':
return {...state, todos: action.payload} 

case 'USER_DETAIL_POSTS_SUCCESS':
return {...state, posts: action.payload} 

case 'USER_TODO_COMPLETED':
const index = state.todos.findIndex(todo => todo.id === action.payload)
state.todos[index].completed = true
return {...state, todos: [...state.todos]}  

case 'USER_TODO_UNCOMPLETED':
const idx = state.todos.findIndex(todo => todo.id === action.payload)
state.todos[idx].completed = false
return {...state, todos: [...state.todos]}    

default:
return state
}
}