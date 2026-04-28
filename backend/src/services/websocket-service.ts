import { WebSocketServer } from "ws";

const webSocketSetup = (server: any) => {
  const wss = new WebSocketServer({ server });
  wss.on("connection", (ws) => {
    console.log("New connection");

    ws.on("message", (message) => {
      console.log("Received", message);
      wss.clients.forEach((client) => {
        if (client.readyState === ws.OPEN) {
          client.send(message.toString());
        }
      });
    });

    ws.on("close", () => {
      console.log("Connection closed");
    });
  });
};

export default webSocketSetup;
