import "./App.css";

import { createBrowserRouter } from "react-router-dom";

//pages
import { Home } from "./Pages/Home";
import { Layout } from "./Components/Layout";
import { Leites } from "./Pages/Produtos/LeiteUht/Leites";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/leites",
        element: <Leites />,
      },
    ],
  },
]);

export { router };
