/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider, extendTheme, ColorModeScript } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { BrowserRouter } from "react-router-dom";

const styles = {
  global: (props) => ({
    body: {
      color: mode("gray.800", "whiteAlpha.900")(props), // Changed to gray.800
      bg: mode("gray.100", "#101010")(props), // Changed to gray.100
    },
  }),
};

const config = {
  initialColorMode: "dark", // Fixed the typo in initialColorMode
  useSystemColorMode: false,
};

const colors = {
  gray: {
    light: "#616161",
    dark: "#1e1e1e",
  },
  white:{light:"#FFF6F6",dark:"#F6F5F2"},
  orange:{light:"#FF7014" , dark:"#ED3E13"},
  brown:"#1F060A"
};

const theme = extendTheme({colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}> {/* Added theme prop */}
      {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
        <App />
      </ChakraProvider>
    </BrowserRouter>

  </React.StrictMode>
);
