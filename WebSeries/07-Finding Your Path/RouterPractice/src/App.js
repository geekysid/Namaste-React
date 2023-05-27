import React from "react";
import ReactDom from "react-dom/client";

// import router from "./routes.js";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  useRouteError,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

const root = ReactDom.createRoot(document.getElementById("root"));

export const Home = () => <h1>This is Home</h1>;
export const Shop = () => <h1>This is my shop</h1>;
export const Product = () => {
  const params = useParams();
  console.log(params);
  return <h1>This is product with id : {params.id} </h1>;
};
export const Contact = () => <h1>Contact me</h1>;
export const Phone = () => {
  const params = useParams();
  return <h1>My Phone: {params.id}</h1>;
};
const Footer = () => <h1>This is Footer</h1>;

export const NotFound = () => {
  const error = useRouteError();
  console.log(error);
  return <h1>{error.data}</h1>;
};

const Nav = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/shop">Shop</Link>
    </li>
    <li>
      <Link to="/contact">Contact</Link>
    </li>
  </ul>
);

export const AppLayout = () => {
  <>
    <Nav />
    <Home />
    <Footer />
  </>;
};

export const App = () => (
  <>
    <Nav />
    {/* <Router /> */}
    {/* <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Shop">
        <Route index element={<Shop />} />
        <Route path=":id" element={<Product />} />
      </Route>
      <Route path="/contact" element={<Contact />}>
        <Route index element={<Contact />} />
        <Route path="phone" element={<Phone />} />
      </Route>
    </Routes> */}
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
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
]);

root.render(
  <>
    <Nav />
    <RouterProvider router={router} />
    <Footer />
    {/* <App />
    </RouterProvider> */}
  </>
);
