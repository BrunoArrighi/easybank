import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { PagesContext } from "../../../context/PagesContext";
import { Button } from "../../atoms/Button";
import { Text } from "../../atoms/Text";
import { ArticleCard } from "../../molecules/ArticleCard";

const Articles = ({ withBtn }) => {
  const { setPage, setArticles, latestArticles, setLatestArticles } =
    useContext(PagesContext);

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = () => {
    fetch(`https://servicepad-post-api.herokuapp.com/articles/`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const arr = data.data.sort(
          (a, b) => new Date(a.date) > new Date(b.date)
        );
        setLatestArticles(arr.slice(arr.length - 4, arr.length));
        return setArticles(arr);
      });
  };

  return (
    <ArticlesContainer>
      <HeaderArticles>
        <TextArticles>Latest Articles</TextArticles>
        {withBtn && (
          <ButtonContainer onClick={() => setPage("Articles")}>
            + Add New Article
          </ButtonContainer>
        )}
      </HeaderArticles>
      <BodyArticles>
        {latestArticles
          ? latestArticles.map((art, idx) => (
              <ArticleCard
                key={idx}
                text={art.content}
                src={art.image_url}
                author={art.author}
                title={art.title}
                last={idx + 1 === latestArticles.length ? true : false}
              />
            ))
          : "Cargando..."}
      </BodyArticles>
    </ArticlesContainer>
  );
};

export { Articles };

Articles.propTypes = {
  withBtn: PropTypes.bool,
};

const ArticlesContainer = styled.div`
  background: #fafafa;
  display: flex;
  flex-direction: column;
  padding: 79px 11.45% 80px 11.45%;
`;

const HeaderArticles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 38px;
  flex-wrap: wrap;
`;

const BodyArticles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: auto;
  flex-wrap: wrap;
`;

const TextArticles = styled(Text)`
  color: ${({ theme }) => theme.colors.title};
  font-size: 40px;
  font-weight: 400;
  line-height: 62px;
  letter-spacing: -0.02em;
`;

const ButtonContainer = styled(Button)`
  width: 160px;
`;
