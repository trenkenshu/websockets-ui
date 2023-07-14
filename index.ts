import { httpServer } from "./src/http_server/index"
import createServer from "./src/ws_server"

const HTTP_PORT = 8181
const WS_PORT = 3000

httpServer.listen(
  HTTP_PORT,
  () => console.log(`Start static http server on the ${HTTP_PORT} port!`)
)
createServer(
  WS_PORT,
  () => console.log(`Start ws server on the ${WS_PORT} port!`)
)

