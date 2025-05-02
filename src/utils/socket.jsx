import io from "socket.io-client"
import { Bases_URL } from "./constants"

export const createSocketConnection = ()=>{
    return io(Bases_URL)
}


