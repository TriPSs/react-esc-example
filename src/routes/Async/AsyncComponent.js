import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { resolve } from 'react-esc-resolver'

export const Async = ({ jsonPlaceholder }) => (
  <div>
    <Helmet title="Async" />

    <div>
      { JSON.stringify(jsonPlaceholder) }
    </div>

  </div>
)

Async.propTypes = {
  fetchData      : PropTypes.func.isRequired,
  jsonPlaceholder: PropTypes.object.isRequired,
}

export default resolve('jsonPlaceholder', props => props.fetchData()
                                                        .then(action => action.payload))(Async)
