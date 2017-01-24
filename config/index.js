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
  // hasOwn: {
  //   server: false,
  //   nginx : false
  // },

  // env: process.env.NODE_ENV || 'development',

  // ----------------------------------
  // Project Structure
  // ----------------------------------
  // path_base : path.resolve(__dirname, '..'),
  // dir_src   : 'src',
  // dir_dist  : 'dist',
  // dir_public: 'dist/public',
  // dir_server: 'server',
  // dir_test  : 'tests',

  // ----------------------------------
  // Entry points
  // ----------------------------------
  entry_client: 'client.js',
  entry_server: 'server.js',

  // ----------------------------------
  // App mount point config
  // ----------------------------------
  // app_mount_point: {
  //   id   : 'root',
  //  style: {height: '100%'}
  // },

  // ----------------------------------
  // Server Configuration
  // ----------------------------------
  server_host: process.env.HOST || localip,
  server_port: process.env.PORT || 3000,

  // universal: {
  //   output     : 'server.js',
  //   client_info: 'client_info.json',
  // },

  // use_compiled_server      : false,

  // ----------------------------------
  // Compiler Configuration
  // ----------------------------------
  // compiler_css_modules    : true,
  // compiler_css_inline     : true,
  // compiler_devtool        : 'source-map',
  // compiler_hash_type      : 'hash',
  // compiler_fail_on_warning: false,
  // compiler_quiet          : false,
  // compiler_public_path    : '/',
  // compiler_stats          : {
  //   chunks      : false,
  //   chunkModules: false,
  //   colors      : true
  // },
  // compiler_vendor         : [
  //   'babel-polyfill',
  //   'history',
  //   'react',
  //   'react-redux',
  //   'react-router',
  //   'react-router-redux',
  //   'redux'
  // ],

  // ----------------------------------
  // Test Configuration
  // ----------------------------------
  // coverage_reporters: [
  //   {type: 'text-summary'},
  //   {type: 'lcov', dir: 'coverage'}
  // ],

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
