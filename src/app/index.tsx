import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { router } from "./Router/Router";
import { Provider } from "react-redux";
import { productStore } from "@/entities/entities";

const root = document.getElementById("root");

if (!root) {
  throw new Error("root not found");
}

const container = createRoot(root);

container.render(
  <Provider store={productStore}>
    <RouterProvider router={router} />
  </Provider>
);
