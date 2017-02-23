/**
 * Created by tycho on 03/11/2016.
 */
import * as Constants from './CounterConstants'

export const getCount = (state) => state[Constants.REDUCER_NAME].count
