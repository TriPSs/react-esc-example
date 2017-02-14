import React from 'react'
import Helmet from 'react-helmet'
import { resolve } from 'react-esc/resolver'

@resolve('fetchedData', (props) => props.fetchData().then(action => action.payload))
export class Async extends React.Component {
  render() {
    const { fetchedData, children } = this.props

    return (
      <div>
        <Helmet title='Async' />

        <div>
          { JSON.stringify(fetchedData) }
        </div>

        {children}
      </div>
    )
  }
}

Async.propTypes = {
  fetchData: React.PropTypes.func.isRequired
}

export default Async
