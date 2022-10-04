import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Text } from "../components/atoms/Text";
import { Form } from "../components/molecules/Form";
import { Table } from "../components/molecules/Table";
import { PagesContext } from "../context/PagesContext";

const ArticlePage = () => {
  const { articles } = useContext(PagesContext);
  const [author, setAuthor] = useState("");
  const [showArticles, setShowArticles] = useState(articles);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [idArticle, setIdArticle] = useState("");
  const [onEdit, setOnEdit] = useState(false);

  useEffect(() => {
    setShowArticles(articles);
  }, [articles]);

  const sendArticleEdit = (id) => {
    const article = articles.filter((a) => a.id === id);
    setAuthor(article[0].author);
    setTitle(article[0].title);
    setContent(article[0].content);
    setIdArticle(article[0].id);
    setOnEdit(true);
  };

  const afterEdit = () => {
    setAuthor("");
    setTitle("");
    setContent("");
    setIdArticle("");
    setOnEdit(false);
  };

  return (
    <ArticlePageContainer>
      <TitleArticlePage>Add New Blog Article</TitleArticlePage>
      <TextArticlePage>
        Publish a new blog article to feature in the Easybank homepage.
      </TextArticlePage>
      <FormStyle
        author={author}
        title={title}
        content={content}
        id={idArticle}
        onEdit={onEdit}
        onSubmit={() => afterEdit()}
      />
      <TitleArticlePage>Add New Blog Article</TitleArticlePage>
      <TextArticlePage>
        Publish a new blog article to feature in the Easybank homepage.
      </TextArticlePage>
      <TableStyle
        articles={showArticles ? showArticles : articles}
        onChange={(id) => sendArticleEdit(id)}
      />
    </ArticlePageContainer>
  );
};

export { ArticlePage };

const ArticlePageContainer = styled.div`
  background: #f9f9f9;
  padding: 68px 11.45% 0px 11.45%;
  display: flex;
  flex-direction: column;
`;

const TitleArticlePage = styled(Text)`
  color: ${({ theme }) => theme.colors.title};
  font-size: 40px;
  font-weight: 400;
  line-height: 62px;
  letter-spacing: -0.02em;
  margin-bottom: 20px;
`;

const TextArticlePage = styled(Text)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 17px;
  font-weight: 400;
  line-height: 24px;
`;

const FormStyle = styled(Form)`
  align-self: center;
  margin: 72px 0px 64px 0px;
  width: 60%;
`;

const TableStyle = styled(Table)`
  margin-top: 56px;
  margin-bottom: 8px;
`;
