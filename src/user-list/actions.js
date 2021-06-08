import getData from '../api-service'

function userListFetchDataSuccess(payload) {
  return {
    type: 'USER_LIST_FETCH_DATA_SUCCESS',
    payload
  }
}

export function userListFetchData() {
  return async (dispatch) => {
    const allData = await getData(`users`)
    const data = allData.slice(0, 4)
    dispatch(userListFetchDataSuccess(data))
  }
}

