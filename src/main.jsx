import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { DataProvider } from "./contextAPI/DataContext.jsx";

const theme = createTheme({
  typography: {
    fontFamily: "Mukta, sans-serif",
    h1: {
      fontWeight: 800,
      lineHeight: 1.3,
    },
    h2: {
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h3: {
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h4: {
      fontWeight: 500,
      lineHeight: 1.3,
    },
    h5: {
      fontWeight: 400,
      lineHeight: 1.3,
    },
    h6: {
      fontWeight: 300,
      lineHeight: 1.3,
    },
    body1: {
      fontWeight: 400,
      lineHeight: 1.3,
    },
    body2: {
      fontWeight: 400,
      lineHeight: 1.3,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <DataProvider>
      <App />
    </DataProvider>
  </ThemeProvider>
);
