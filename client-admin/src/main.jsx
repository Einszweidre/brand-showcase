import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Navbar from "./layouts/navbar";
import Footer from "./layouts/footer";
import Login from "./pages/login";
import Donuts from "./pages/donuts";
import HomePage from "./pages/home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/donuts" element={<Donuts />} />
    </>
  )
);

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <Navbar />
      {/* <Box minW="12xl" maxW="12xl" minH="90vh" bg="gray.5000" color="black"> */}
      <RouterProvider router={router} />
      {/* </Box> */}
      <Footer />
    </ChakraProvider>
  </React.StrictMode>
);
