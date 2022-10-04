import { useContext } from "react";
import { Theme } from "./components/theme/Theme";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { Header } from "./components/organisms/Header";
import { Hero } from "./components/organisms/Hero";
import { About } from "./components/organisms/About";
import { Articles } from "./components/organisms/Articles";
import { Footer } from "./components/organisms/Footer";
import { PagesContext } from "./context/PagesContext";
import { ArticlePage } from "./pages/ArticlePage";

function App() {
  const { page } = useContext(PagesContext);

  return (
    <ThemeProvider theme={Theme}>
      <Header />
      {page !== "Articles" ? (
        <>
          <Hero />
          <About />
        </>
      ) : (
        <ArticlePage />
      )}

      <Articles withBtn={page !== "Articles" ? true : false} />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
