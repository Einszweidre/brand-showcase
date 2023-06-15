import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Navbar from "./layouts/navbar";
import Footer from "./layouts/footer";
import Login from "./pages/login";
import MenuPage from "./pages/menus";
import CategoryPage from "./pages/categories";
import DashboardPage from "./pages/dashboard";

const router = createBrowserRouter([
  { path: "/", element: <DashboardPage /> },
  { path: "/login", element: <Login /> },
  { path: "/menu", element: <MenuPage /> },
  { path: "/category", element: <CategoryPage /> },
]);

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </ChakraProvider>
  </React.StrictMode>
);
