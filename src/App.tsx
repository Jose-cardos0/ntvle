import "./App.css";

import { createBrowserRouter } from "react-router-dom";

//pages
import { Home } from "./Pages/Home";
import { Layout } from "./Components/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export { router };
