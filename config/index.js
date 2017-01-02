/* eslint key-spacing:0 spaced-comment:0 */
import path from 'path'
import _debug from 'debug'
import { argv } from 'yargs'
import ip from 'ip'

import defaultLayout from './layout'
import reducers from '../src/store/reducers'
import AppContainer from '../src/containers/AppContainer'

const localip = ip.address()
const debug   = _debug('app:config')
debug('Creating configuration.')

// ========================================================
// Default Configuration
// ========================================================
const config = {
  hasOwn: {
    server: true
  },

  // ----------------------------------
  // Project Structure
  // ----------------------------------
  path_base: path.resolve(__dirname, '..'),

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
const base    = (...args) => Reflect.apply(resolve, null, [config.path_base, ...args])

config.utils_paths = {
  base: base,
}

// ========================================================
// Environment Configuration
// ========================================================
debug(`Looking for environment overrides for NODE_ENV "${config.env}".`)

const environments = require('./environments').default
const overrides    = environments[config.env]

if (overrides) {
  debug('Found overrides, applying to default configuration.')
  Object.assign(config, overrides(config))

} else {
  debug('No environment overrides found, defaults will be used.')
}

export default config
