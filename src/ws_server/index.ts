import WebSocket from 'ws'
import { wsEvents } from './types'

const createServer = (port) => {
  const server = new WebSocket.Server({
  port
})

server.on(wsEvents.connection, client => {
  client.on(wsEvents.message, message => {
    return
  })
})

return server
}


export default createServer