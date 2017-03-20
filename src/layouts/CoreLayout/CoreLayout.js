import React from 'react'
import { Route, Switch } from 'react-router'

import Header from '../../components/Header'
import classes from './CoreLayout.scss'
import '../../styles/core.scss'

import Home from 'routes/Home'
import Counter from 'routes/Counter'
import Async from 'routes/Async'

export const CoreLayout = () => (
  <div className='container text-center'>
    <Header />

    <div className={classes.mainContainer}>
      <Switch>
        <Route {...Home} />
        <Route {...Counter} />
        <Route {...Async} />
      </Switch>
    </div>
  </div>
)

export default CoreLayout
