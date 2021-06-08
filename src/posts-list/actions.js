import getData from '../api-service'

function postsListFetchDataSuccess(payload) {
  return {
    type: 'POST_LIST_FETCH_DATA_SUCCESS',
    payload
  }
}

export function postsListFetchData() {
  return async (dispatch) => {
    const allData = await getData(`posts`)
    const data = allData.slice(0, 5)
    dispatch(postsListFetchDataSuccess(data))
  }
}

function addPostFetchSuccess(payload) {
  return {
    type: 'ADD_POST_FETCH_SUCCESS',
    payload
  }
}

export function addPostFetch(formData) {
  return (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((json) => dispatch(addPostFetchSuccess(json)));
  }
}

