import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";  
import Create from "./pages/Create.jsx";  
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/create",
    element: <Create />,
    // errorElement: <ErrorPage />,
  },
]);
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
