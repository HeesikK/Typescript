import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CustomButton from "./components/button/button";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme.style";
import CustomInput from "./components/input/input";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { getMovieList } from "./apis/api";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {},
  });

  const { data: movieList } = useQuery("movieList", () => getMovieList());

  console.log(movieList);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CustomButton variant="primary" size="small" shape="round">
          button
        </CustomButton>
        <CustomInput variant="primary" size="small" shape="shape" />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
