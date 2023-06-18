import { ChakraProvider } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";

import store from "./store";
import router from "./utils/router";

import Footer from "./layouts/footer";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <ChakraProvider>
    <Provider store={store}>
      <RouterProvider router={router} />
      <Footer />
    </Provider>
  </ChakraProvider>
);
