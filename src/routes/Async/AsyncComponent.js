import React from 'react'
import Helmet from 'react-helmet'
import { resolve } from 'react-esc/resolver'

@resolve('jsonPlaceholder', (props) => props.fetchData().then(action => action.payload))
export class Async extends React.Component {

  static propTypes = {
    fetchData: React.PropTypes.func.isRequired
  }

  render() {
    const { jsonPlaceholder } = this.props

    return (
      <div>
        <Helmet title='Async' />

        <div>
          { JSON.stringify(jsonPlaceholder) }
        </div>

      </div>
    )
  }
}

export default Async
