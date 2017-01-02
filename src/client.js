import defaultLayout from '../config/layout'
import Client from 'react-esc/client'
import reducers from './store/reducers'
import AppContainer from './containers/AppContainer'

Client(AppContainer, defaultLayout, reducers)
