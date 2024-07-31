import { Cart, Catalog, Favorite, Home, Layout } from "@/pages/pages";
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
    ],
  },
];

export const router = createBrowserRouter(routes);

export default routes;
