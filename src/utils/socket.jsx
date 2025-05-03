import io from "socket.io-client"
import { Bases_URL } from "./constants"

export const createSocketConnection = () => {
    if (location.hostname === "localhost") {
      return io(Bases_URL); // local dev
    } else {
      return io(Bases_URL, {
        transports: ["websocket"], // for stable connection in production
      });
    }
  };
  


