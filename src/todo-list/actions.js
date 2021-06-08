import getData from '../api-service'

function todoListFetchDataSuccess(payload) {
  return {
    type: 'TODO_LIST_FETCH_DATA_SUCCESS',
    payload
  }
}

export function todoListFetchData() {
  return async (dispatch) => {
    const allData = await getData(`todos`)
    const data = allData.slice(0, 6)
    dispatch(todoListFetchDataSuccess(data))
  }
}


export function todoListItemCompleted (payload) {
  return {
    type: 'TODO_COMPLETED',
    payload
  }
}

export function todoListItemUncompleted (payload) {
  return {
    type: 'TODO_UNCOMPLETED',
    payload
  }
}