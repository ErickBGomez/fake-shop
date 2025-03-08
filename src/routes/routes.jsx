import Layout from "../pages/Layout/Layout";
import Home from "../pages/Home/Home";
import Search from "../pages/Search/Search";
import ProductPage from "../pages/ProductPage/ProductPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import { createBrowserRouter } from "react-router-dom";
import CartPage from "../pages/CartPage/CartPage";

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
        path: "/search",
        element: <Search />,
      },
      {
        path: "/product/:id",
        element: <ProductPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "*",
        element: <ErrorPage variant="page-not-found" />,
      },
    ],
  },
]);

export default routes;
