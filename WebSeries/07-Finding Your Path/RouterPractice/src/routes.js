import { createBrowserRouter } from "react-router-dom";
import { Home, Shop, Contact, Product, Phone, NotFound } from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <Shop />,
    children: [
      {
        path: ":id",
        element: <Product />,
      },
    ],
  },
  {
    path: "/contact",
    element: <Contact />,
    children: [
      {
        path: ":id",
        element: <Phone />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
