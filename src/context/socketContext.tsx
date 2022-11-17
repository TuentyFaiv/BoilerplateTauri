import { createContext, useContext, useEffect, useState, useMemo } from "react";
import { io, type Socket } from "socket.io-client";

import type { SocketContext, SocketProviderProps } from "../common/typing/contexts";

const Context = createContext<SocketContext>({
  socket: null
});

export function SocketProvider({ children }: SocketProviderProps) {
  const [socket, setSocket] = useState<Socket | null>(null);
  const contextValue = useMemo(() => ({ socket }), [socket]);

  useEffect(() => {
    const socketio = io("https://6d29-185-127-16-137.eu.ngrok.io/", {
      transports: ["websocket", "polling"]
    });

    const handleConnect = () => {
      // console.log({ connect: socketio.id });
    };

    const handleDisconnect = () => {
      // console.log({ disconnect: { id: socketio.id, connected: socketio.connected } });
    };

    socketio.on("connect", handleConnect);
    socketio.on("disconnect", handleDisconnect);

    setSocket(socketio);
    return () => {
      socketio.close();
      socketio.off("connect", handleConnect);
      socketio.off("disconnect", handleDisconnect);
    };
  }, []);

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
}

export const useSocketContext = () => useContext(Context);
