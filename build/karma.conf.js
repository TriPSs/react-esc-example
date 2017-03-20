import { argv } from 'yargs'
import myConfig from '../config'
import createWebpackConfig from 'react-esc/build/webpack.config.client'
import createConfig from 'react-esc/config'
import _debug from 'debug'

const debug         = _debug('app:karma')
const config        = createConfig(myConfig)
const webpackConfig = createWebpackConfig(config)

debug('Create configuration.')

const karmaConfig = {
  basePath         : config.utils_paths.src(), // project root in relation to bin/karma.js
  files            : [
    {
      pattern : config.utils_paths.tests('test-bundle.js'),
      watched : false,
      served  : true,
      included: true
    }
  ],
  singleRun        : !argv.watch,
  frameworks       : ['mocha'],
  reporters        : ['mocha'],
  preprocessors    : {
    [config.utils_paths.tests('test-bundle.js')]: ['webpack']
  },
  browsers         : ['PhantomJS'],
  webpack          : webpackConfig,
  webpackMiddleware: {
    noInfo: true,
    stats : 'errors-only'
  },
  coverageReporter : {
    reporters: config.coverage_reporters
  }
}

if (config.globals.__COVERAGE__) {
  karmaConfig.reporters.push('coverage')
  karmaConfig.webpack.module.rules.preLoaders = [{
    test   : /\.(js|jsx)$/,
    include: new RegExp(config.dir_src),
    loader : 'isparta',
    exclude: /node_modules/
  }]
}

// cannot use `export default` because of Karma.
module.exports = (cfg) => cfg.set(karmaConfig)
