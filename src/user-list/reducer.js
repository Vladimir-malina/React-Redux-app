export default function userList(state = [], action) {
  switch(action.type) {
    case 'USER_LIST_FETCH_DATA_SUCCESS':
      return action.payload
    default:
      return state
  } 
}