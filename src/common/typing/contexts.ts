import type { ReactNode } from "react";
import type { Socket } from "socket.io-client";

export interface SocketContext {
  socket: Socket | null;
}

export interface SocketProviderProps {
  children: ReactNode;
}