import Layout from "@/pages/Layout/ui/Layout";
import { createBrowserRouter, RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [],
  },
];

export const router = createBrowserRouter(routes);

export default routes;
