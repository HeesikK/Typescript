import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CustomButton from "./components/button/button";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme.style";
import CustomInput from "./components/input/input";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { getMovieList } from "./apis/api";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {},
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
