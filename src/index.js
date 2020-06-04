import React from "react";
import { ThemeProvider } from "styled-components";
import ReactDOM from "react-dom";

import App from "./App";

const theme = {
  fontSize: "16px",
  fontFamily: "sans-serif",
  fontWeight: 400,
  form: {
    input: {
      boxShadow: "0 1px 6px 0 rgba(34, 34, 34, 0.15)",
      border: "1px solid #dadce0",
      lineHeight: 1.3,
      padding: "0.6em 1.4em 0.5em 0.8em",
      borderRadius: "4px",
      focus: {
        border: "1px solid black",
        outline: "none"
      }
    }
  },
  select: {
    color: "#444"
  }
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  rootElement
);
