import WebSocket from 'ws'
import { wsEvents } from './types'

const createServer = (port: number, cb: () => void) => {
  const server = new WebSocket.Server({
  port
}, cb)

server.on(wsEvents.connection, client => {
  client.on(wsEvents.message, message => {
    return
  })

  client.on(wsEvents.error, error => {
    console.log(`We've got error: ${error.message}`)
  })
})

return server
}


export default createServer