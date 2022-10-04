import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { Text } from "../../atoms/Text";
import online from "../../atoms/Figure/AboutFigures/online.svg";
import budgeting from "../../atoms/Figure/AboutFigures/budgeting.svg";
import onboarding from "../../atoms/Figure/AboutFigures/onboarding.svg";
import api from "../../atoms/Figure/AboutFigures/api.svg";

const AboutCard = ({ src, title, text, last = false, ...props }) => {
  const icon = {
    online: online,
    budgeting: budgeting,
    onboarding: onboarding,
    api: api,
  };
  return (
    <AboutCardContainer last={last} {...props}>
      <Icon src={icon[src]} />
      <AboutCardTitle>{title}</AboutCardTitle>
      <AboutCardText>{text}</AboutCardText>
    </AboutCardContainer>
  );
};

export { AboutCard };

AboutCard.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  last: PropTypes.bool,
};

const AboutCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 39px;
  ${({ last }) =>
    last &&
    css`
      margin-right: 0px;
    `}
`;

const Icon = styled.img`
  width: 72px;
  height: 72px;
  margin-bottom: 24px;
`;

const AboutCardTitle = styled(Text)`
  color: ${({ theme }) => theme.colors.title};
  font-size: 23px;
  line-height: 62px;
  font-weight: 400;
  letter-spacing: -0.1px;
  margin-bottom: 8px;
`;

const AboutCardText = styled(Text)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  line-height: 26px;
  font-weight: 400;
  letter-spacing: -0.04em;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    margin-bottom: 20px;
  }
`;
