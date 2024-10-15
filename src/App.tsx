import "./App.css";

import { createBrowserRouter } from "react-router-dom";

//pages
import { Home } from "./Pages/Home";
import { Layout } from "./Components/Layout";
import { Leites } from "./Pages/Produtos/LeiteUht/Leites";
import { Queijos } from "./Pages/Produtos/Queijos/Queijos";

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
      {
        path: "/queijos",
        element: <Queijos />,
      },
    ],
  },
]);

export { router };
