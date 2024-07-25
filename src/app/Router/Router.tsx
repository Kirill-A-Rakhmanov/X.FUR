import { Favorite, Home, Layout } from "@/pages/pages";
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
    ],
  },
];

export const router = createBrowserRouter(routes);

export default routes;
