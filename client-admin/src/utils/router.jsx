import { createBrowserRouter, redirect } from "react-router-dom";

import Login from "../pages/LoginPage";
import MenuPage from "../pages/MenuPage";
import CategoryPage from "../pages/CategoryPage";
import DashboardPage from "../pages/DashboardPage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    loader: () => {
      if (localStorage.getItem("webtoken")) {
        return redirect("/");
      }
      return null;
    },
  },
  {
    path: "/",
    element: <DashboardPage />,
    loader: () => {
      if (!localStorage.getItem("webtoken")) {
        return redirect("/login");
      }
      return null;
    },
  },
  {
    path: "/menu",
    element: <MenuPage />,
    loader: () => {
      if (!localStorage.getItem("webtoken")) {
        return redirect("/login");
      }
      return null;
    },
  },
  {
    path: "/category",
    element: <CategoryPage />,
    loader: () => {
      if (!localStorage.getItem("webtoken")) {
        return redirect("/login");
      }
      return null;
    },
  },
]);

export default router;
