import React from 'react'
import CounterContainer  from './CounterContainer'

export CounterReducer from './CounterReducer'
export * as CounterActions from './CounterActions'
export * as CounterConstants from './CounterConstants'

export default {
  path     : '/counter',
  exact    : true,
  component: CounterContainer
}
