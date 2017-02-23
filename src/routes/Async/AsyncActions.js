import fetch from 'isomorphic-fetch'
import * as Constants from './AsyncConstants'

export function startFetching() {
  return {
    type: Constants.FETCHING_DATA
  }
}

export function fetchedData(data) {
  return {
    type   : Constants.FETCHED_DATA,
    payload: data
  }
}

export function fetchData() {
  return (dispatch) => {
    dispatch(startFetching())

    return fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => {
        return dispatch(fetchedData(data))
      })
  }
}
