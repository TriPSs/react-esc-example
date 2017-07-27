import config from '../config'
import compile from 'react-esc/bin/compile'

(async function () {
  await compile(config)
})()
