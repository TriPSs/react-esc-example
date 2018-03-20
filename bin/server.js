import Server from 'react-esc/server'
import _debug from 'debug'
import config from '../config'

(async() => {
  const debug = _debug('app:bin:server')
  const port  = config.server_port
  const host  = config.server_host

  try {
    let app = await Server(config)

    app.listen(port)

    debug(`Server is now running at http://${host}:${port}.`)
    debug(`Server accessible via localhost:${port} if you are using the project defaults.`)
  } catch (e) {
    console.log(e)
  }
})()
