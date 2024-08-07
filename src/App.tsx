import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Routes";
// import { PortfolioContextProvider } from "./contexts/PortfolioContext";

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        {/* <PortfolioContextProvider> */}
          <Router />
        {/* </PortfolioContextProvider> */}
      </BrowserRouter>
    </ThemeProvider>
  );
};
