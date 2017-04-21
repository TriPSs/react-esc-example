import * as Constants from './CounterConstants'

export default (state = Constants.INITIAL_STATE, action) => {
  switch (action.type) {
    case Constants.INCREMENT:
      return {
        ...state,
        count: state.count + action.payload,
      }

    default:
      return state
  }
}
