import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";

import App from "@/pages/App";

const root = document.getElementById("root");

if (!root) {
  throw new Error("root not found");
}

const container = createRoot(root);

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [],
  },
];

const router = createBrowserRouter(routes);

container.render(<RouterProvider router={router} />);
