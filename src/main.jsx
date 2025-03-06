import { ChakraProvider } from "@chakra-ui/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// * Temporal fix: TypeError Uncaught, cannot read properties of undefined (reading '_config')
import { system } from "./theme";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes.jsx";
import CartContextProvider from "./context/CartContextProvider";
import "./styles/main.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider value={system}>
      <CartContextProvider>
        <RouterProvider router={routes} />
      </CartContextProvider>
    </ChakraProvider>
  </StrictMode>
);
