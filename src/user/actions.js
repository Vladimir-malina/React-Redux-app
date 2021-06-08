import getData from '../api-service'

function userDetailsAlbumsSuccess(payload) {
  return {
    type: 'USER_DETAIL_ALBUMS_SUCCESS',
    payload
  }
}

export function userDetailsAlbums(id) {
  return async (dispatch) => {
    const albums = await getData(`users/${id}/albums`)
    dispatch(userDetailsAlbumsSuccess(albums))
  }
}


function userDetailsTodosSuccess(payload) {
  return {
    type: 'USER_DETAIL_TODOS_SUCCESS',
    payload
  }
}

export function userDetailsTodos(id) {
  return async (dispatch) => {
    const allAlbums = await getData(`users/${id}/todos`)
    const albums = allAlbums.slice(0, 9)
    dispatch(userDetailsTodosSuccess(albums))
  }
}


function userDetailsPostsSuccess(payload) {
  return {
    type: 'USER_DETAIL_POSTS_SUCCESS',
    payload
  }
}

export function userDetailsPosts(id) {
  return async (dispatch) => {
    const posts = await getData(`users/${id}/posts`)
    dispatch(userDetailsPostsSuccess(posts))
  }
}

export function userTodoCompleted (payload) {
  return {
    type: 'USER_TODO_COMPLETED',
    payload
  }
}

export function userTodoUncompleted (payload) {
  return {
    type: 'USER_TODO_UNCOMPLETED',
    payload
  }
}

