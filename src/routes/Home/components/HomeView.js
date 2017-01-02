import React from 'react'
import Helmet from 'react-helmet'
import DuckImage from '../assets/Duck.jpg'
import classes from './HomeView.scss'

export const HomeView = () => (
  <div>
    <Helmet title='Wat' />
    <h4>Welcome!</h4>
    <img
      alt='This is a duck, because Redux!'
      className={classes.duck}
      src={DuckImage} />
  </div>
)

export default HomeView
