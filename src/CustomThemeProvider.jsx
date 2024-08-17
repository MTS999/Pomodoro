import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme"; // Import the custom theme

// Wrap children with ThemeProvider
const CustomThemeProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
