import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CustomButton from "./components/button/button";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme.style";
import CustomInput from "./components/input/input";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CustomButton variant="primary" size="small" shape="round">
        button
      </CustomButton>
    </ThemeProvider>
  );
}

export default App;
