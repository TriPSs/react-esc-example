import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Header.scss'

export const Header = () => (
  <div>
    <h1>React ESC Example Project</h1>
    <Link to='/'>
      Home
    </Link>
    {' · '}
    <Link to='/counter'>
      Counter
    </Link>
    {' · '}
    <Link to='/async'>
      Async
    </Link>
  </div>
)

export default Header
