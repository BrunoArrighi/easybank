import { useState } from "react";
import { PagesContext } from "./PagesContext";

export const PagesProvider = ({ children }) => {
  const [page, setPage] = useState("Home");
  const [articles, setArticles] = useState([]);
  const [latestArticles, setLatestArticles] = useState([]);

  return (
    <PagesContext.Provider
      value={{
        page,
        setPage,
        articles,
        setArticles,
        latestArticles,
        setLatestArticles,
      }}
    >
      {children}
    </PagesContext.Provider>
  );
};
