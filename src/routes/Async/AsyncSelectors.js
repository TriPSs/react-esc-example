/**
 * Created by tycho on 03/11/2016.
 */
import * as Constants from './AsyncConstants'

export const getJsonPlaceholder = state => state[Constants.REDUCER_NAME].jsonPlaceholder
export const getFetching        = state => state[Constants.REDUCER_NAME].fetching
