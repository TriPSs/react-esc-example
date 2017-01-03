import config from '../config'
import Compiler from 'react-esc/bin/compile'

;(async function () {
    await new Compiler.compile(config)
})()
