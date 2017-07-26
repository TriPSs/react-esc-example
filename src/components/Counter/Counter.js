import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import injectSheet from 'react-jss'
import CounterStyles from './CounterStyles'

export const Counter = ({ count, increment, doubleAsync, classes }) => (
  <div>
    <Helmet title="Counter" />
    <h2 className={classes.root}>
      Counter:
      {' '}
      <span className={classes.count}>
        {count}
      </span>
    </h2>
    <button className="btn btn-default" onClick={() => increment(1)}>
      Increment
    </button>
    {' '}
    <button className="btn btn-default" onClick={doubleAsync}>
      Double (Async)
    </button>
  </div>
)

Counter.propTypes = {
  count      : PropTypes.number.isRequired,
  doubleAsync: PropTypes.func.isRequired,
  increment  : PropTypes.func.isRequired,
}

export default injectSheet(CounterStyles)(Counter)
