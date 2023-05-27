import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";
import RestaurantDetail from "./components/RestaurantDetail";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// creating react root element
const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => (
  <>
    <div className="container">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetail />,
      },
    ],
  },
]);

root.render(<RouterProvider router={router} />);
