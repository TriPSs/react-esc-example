import config from '../config'
import { Compiler } from 'react-esc'

;(async function () {
    await new Compiler.compile(config)
})()
