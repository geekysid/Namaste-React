import { Children } from "react";
import ReactDom from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
  useParams,
} from "react-router-dom";

const Header = () => (
  <>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </>
);

const Home = () => (
  <>
    <h1>This is from Home</h1>
    <p>Hello Welcome to My Home</p>
  </>
);

const About = () => (
  <>
    <h1>This is from About Us Section</h1>
    <p>Hello!! You can know about me in this section</p>
  </>
);

const ServiceDetail = () => {
  console.log(1);
  const { service_id } = useParams();
  console.log(service_id);
  return <h1>Service Id: {service_id}</h1>;
};

const Services = () => (
  <>
    <h1>This is from Services</h1>
    <p>Hello!! You can know about all the services I provide.</p>
    {/* <Outlet /> */}
  </>
);

const Contact = () => (
  <>
    <h1>This is from Contact</h1>
    <p>Hello!! Connect with me</p>
  </>
);

const Phone = () => <h4>This is Phone</h4>;

const App = () => (
  <>
    <h1>App</h1>
    <p>This is coming from App 2</p>
  </>
);

const Footer = () => <h3>This is FOOTER</h3>;

const NotFound = () => (
  <h3>The url you are trying to access is not available.</h3>
);

const AppLayout = () => (
  <>
    <Header />
    <App />
    {/* <RouterProvider router={appRouter} /> */}
    <Outlet />
    {/* <Home />
    <About />
    <Services />
    <Contact /> */}
    <Footer />
  </>
);

const root = ReactDom.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "/about",
    element: <AppLayout />,
  },
  {
    path: "/services",
    element: <AppLayout />,
  },
  {
    path: "/contact",
    element: <AppLayout />,
  },
]);

const appRouter2 = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
        children: [{ path: ":service_id", element: <ServiceDetail /> }],
      },
      //   {
      //     path: "/services/:service_id",
      //     element: <ServiceDetail />,
      //   },
      {
        path: "/contact",
        element: <Contact />,
        children: [
          {
            path: "hello",
            element: <h1>Phone</h1>, //<Phone />,
          },
        ],
      },
    ],
  },
]);

// root.render(<AppLayout />);
// root.render(<RouterProvider router={appRouter} />);
root.render(<RouterProvider router={appRouter2} />);
