import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { Text } from "../../atoms/Text";

const ArticleCard = ({ src, title, text, author, last = false }) => {
  return (
    <ArticleCardContainer last={last}>
      <Image src={src} />
      <InfoContainer>
        <AuthorText>{author}</AuthorText>
        <ArticleCardTitle>{title}</ArticleCardTitle>
        <ArticleCardText>{text}</ArticleCardText>
      </InfoContainer>
    </ArticleCardContainer>
  );
};

export { ArticleCard };

ArticleCard.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  author: PropTypes.string,
  last: PropTypes.bool,
};

const ArticleCardContainer = styled.div`
  background: #ffffff;
  width: 250px;
  height: 399px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  margin-right: 24px;
  cursor: pointer;
  &:hover span:nth-child(0n + 2) {
    color: ${({ theme }) => theme.colors.hover};
    font-weight: 500;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    margin-bottom: 10px;
  }
  ${({ last }) =>
    last &&
    css`
      margin-right: 0px;
      @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
        margin-right: 24px;
      }
    `}
`;

const Image = styled.img`
  height: 194.76px;
  margin-bottom: 24px;
  border-radius: 8px 8px 0 0;
`;

const ArticleCardTitle = styled(Text)`
  color: ${({ theme }) => theme.colors.title};
  font-size: 16px;
  line-height: 22px;
  font-weight: 400;
  letter-spacing: -0.02em;
  margin-bottom: 4px;
`;

const ArticleCardText = styled(Text)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 13px;
  line-height: 18px;
  font-weight: 400;
  letter-spacing: -0.02em;
  margin-bottom: 19px;
`;

const AuthorText = styled(Text)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 10px;
  line-height: 18px;
  font-weight: 400;
  letter-spacing: -0.02em;
  margin-bottom: 6px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 26px;
`;
