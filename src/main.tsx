import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { SocketProvider } from "./context/socketContext";
import { router } from "./Routes";

import "@fontsource/inter";
import "@fontsource/inter/300.css";
import "@fontsource/inter/700.css";

import "./styles/General.scss";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StrictMode>
    <SocketProvider>
      <RouterProvider router={router} />
    </SocketProvider>
  </StrictMode>
);
