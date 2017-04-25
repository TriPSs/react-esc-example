import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import classes from './Counter.scss'

export const Counter = props => (
  <div>
    <Helmet title="Counter" />
    <h2 className={classes.counter__container}>
      Counter:
      {' '}
      <span className={classes['counter--green']}>
        {props.count}
      </span>
    </h2>
    <button className="btn btn-default" onClick={() => props.increment()}>
      Increment
    </button>
    {' '}
    <button className="btn btn-default" onClick={() => props.doubleAsync()}>
      Double (Async)
    </button>
  </div>
)

Counter.propTypes = {
  count      : PropTypes.number.isRequired,
  doubleAsync: PropTypes.func.isRequired,
  increment  : PropTypes.func.isRequired,
}

export default Counter
