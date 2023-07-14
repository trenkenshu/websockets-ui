import * as WebSocket from 'ws'
import { iMessage, wsEvents } from './types'

const createServer = (port: number, cb: () => void) => {
  const server = new WebSocket.Server({
  port
}, cb)

server.on(wsEvents.connection, client => {
  client.on(wsEvents.message, (message: string) => {
    const json = JSON.parse(message) as iMessage
    console.log(json)
    return
  })

  client.on(wsEvents.error, error => {
    console.log(`We've got error: ${error.message}`)
  })
})

server.on(wsEvents.close, () => console.log(`Close client connection`))

return server
}


export default createServer