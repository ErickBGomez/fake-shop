import { ChakraProvider } from "@chakra-ui/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// * Temporal fix: TypeError Uncaught, cannot read properties of undefined (reading '_config')
import { system } from "@chakra-ui/react/preset";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes.jsx";
import "./styles/main.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider value={system}>
      <RouterProvider router={routes} />
    </ChakraProvider>
  </StrictMode>
);
