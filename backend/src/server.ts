import app from "./app";
import webSocketSetup from "./services/websocket-service";
import http from "http";
import { PORT } from "./lib/constants";

const server = http.createServer(app);

webSocketSetup(server);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
