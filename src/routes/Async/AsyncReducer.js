import * as Constants from './AsyncConstants'

export default (state = Constants.INITIAL_STATE, action) => {
  switch (action.type) {
    case Constants.FETCHING_DATA:
      return {
        ...state,
        fetching: true,
      }

    case Constants.FETCHED_DATA:
      return {
        ...state,
        fetching       : false,
        jsonPlaceholder: action.payload,
      }

    default:
      return state
  }
}
