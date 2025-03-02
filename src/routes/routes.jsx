import App from "../App";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // Set error element here
  },
]);

export default routes;
