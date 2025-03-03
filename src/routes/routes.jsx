import Layout from "../pages/Layout/Layout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <ErrorPage variant="page-not-found" />,
      },
    ],
  },
]);

export default routes;
