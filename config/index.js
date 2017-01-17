/* eslint key-spacing:0 spaced-comment:0 */
import path from 'path'
import _debug from 'debug'
import { argv } from 'yargs'
import ip from 'ip'

import defaultLayout from './layout'
import reducers from '../src/store/reducers'
import AppContainer from '../src/containers/AppContainer'

const localip  = ip.address()
const debug    = _debug('app:config')
const NODE_ENV = process.env.NODE_ENV || 'development'
debug('Creating configuration.')

// ========================================================
// Default Configuration
// ========================================================
const config = {
  hasOwn: {
    server: false,
    nginx : false
  },

  // ----------------------------------
  // Server Configuration
  // ----------------------------------
  server_host: process.env.HOST || localip,
  server_port: process.env.PORT || 3000,

  defaultLayout,
  reducers,
  AppContainer
}

// ------------------------------------
// Utilities
// ------------------------------------
const resolve = path.resolve
const base    = (...args) => Reflect.apply(resolve, null, [path.resolve(__dirname, '..'), ...args])

config.utils_paths = {
  base: base,
}

// ========================================================
// Environment Configuration
// ========================================================
debug(`Looking for environment overrides for NODE_ENV "${NODE_ENV}".`)

const environments = require('./environments').default
const overrides    = environments[NODE_ENV]

if (overrides) {
  debug('Found overrides, applying to default configuration.')
  Object.assign(config, overrides(config))

} else {
  debug('No environment overrides found, defaults will be used.')
}

export default config
