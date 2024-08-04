import { Cart, Catalog, Favorite, Home, Layout, Product } from "@/pages/pages";
import { createBrowserRouter, RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "favorite",
        element: <Favorite />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "catalog",
        element: <Catalog />,
      },
      {
        path: "product/:article",
        element: <Product />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export default routes;
