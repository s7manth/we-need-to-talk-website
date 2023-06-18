import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import "focus-visible/dist/focus-visible";

import { ChakraProvider } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import theme from "./theme";
import GlobalStyles from "./components/GlobalStyles.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
