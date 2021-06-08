const initialState = {fetchPosts: [], addPosts: []}

export default function postsList(state = initialState, action) {
  switch(action.type) {
    case 'POST_LIST_FETCH_DATA_SUCCESS':
      return {...state, fetchPosts: action.payload}
    case 'ADD_POST_FETCH_SUCCESS':
      return  {...state, addPosts: [...state.addPosts, action.payload]}
    default:
      return state
  } 
}
