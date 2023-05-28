import React from "react";
import ReactDom from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
} from "react-router-dom";
import { CounterFunctional, CounterClass } from "./Counter";

root = ReactDom.createRoot(document.getElementById("root"));

const Nav = () => (
  <div>
    <ul>
      <li>
        <Link to="/functional">Functional</Link>
      </li>
      <li>
        <Link to="/class">Class</Link>
      </li>
    </ul>
  </div>
);

const AppLayout = () => (
  <>
    <Nav />
    <Outlet />
  </>
);

class Home extends React.Component {
  render() {
    return (
      <h1>
        Please use <i>/functional</i> or <i>/class</i> in URL
      </h1>
    );
  }
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Home />,
    children: [
      {
        path: "functional",
        element: <CounterFunctional />,
      },
      {
        path: "class",
        element: (
          <>
            <CounterClass number={1} />
            <CounterClass number={2} />
          </>
        ),
      },
    ],
  },
]);

root.render(<RouterProvider router={appRouter} />);
// root.render(
//   <>
//     {console.log("APP COMPONENT")}
//     <CounterFunctional />
//     <CounterClass number={1} />
//     <CounterClass number={2} />
//   </>
// );
