import App from "@/App";
import { createBrowserRouter, RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [],
  },
];

export const router = createBrowserRouter(routes);

export default routes;
