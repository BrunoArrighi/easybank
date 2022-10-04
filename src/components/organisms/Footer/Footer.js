import React from "react";
import styled, { css } from "styled-components";
import { Button } from "../../atoms/Button";
import footerLogo from "../../atoms/Figure/footerLogo.svg";
import {
  IconFacebook,
  IconYoutube,
  IconTwitter,
  IconPinterest,
  IconInstagram,
} from "../../atoms/Icon";
import { Text } from "../../atoms/Text";

const firstColumnText = [
  {
    name: "About Us",
  },
  {
    name: "Contact",
  },
  {
    name: "Blog",
  },
];

const secondColumnText = [
  {
    name: "Careers",
  },
  {
    name: "Support",
  },
  {
    name: "Privacy Policy",
  },
];

const Footer = () => {
  return (
    <FooterContainer>
      <SocialContainer>
        <Img src={footerLogo} alt="footerLogo" />
        <Icons>
          <IconFacebook />
          <IconYoutube />
          <IconTwitter />
          <IconPinterest />
          <IconInstagram />
        </Icons>
      </SocialContainer>
      <LinksContainer>
        {firstColumnText.map((txt, idx) => (
          <TextLink as="a" key={idx} last={idx + 1 === firstColumnText.length}>
            {txt.name}
          </TextLink>
        ))}
      </LinksContainer>
      <LinksContainer>
        {secondColumnText.map((txt, idx) => (
          <TextLink as="a" key={idx} last={idx + 1 === secondColumnText.length}>
            {txt.name}
          </TextLink>
        ))}
      </LinksContainer>
      <div />
      <RightsContainer>
        <ButtonStyle>Request Invite</ButtonStyle>
        <TextLink rights={true}>© Easybank. All Rights Reserved</TextLink>
      </RightsContainer>
    </FooterContainer>
  );
};

export { Footer };

const FooterContainer = styled.div`
  background: #2d314e;
  padding: 48px 164px 46px 165px;
  display: flex;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    flex-direction: column;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    flex-direction: row;
    justify-content: center;
    margin-top 16px;
  }
`;

const RightsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
`;

const Img = styled.img`
  margin-bottom: 56.3px;
`;

const TextLink = styled(Text)`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 16px;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.hover};
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    margin-right: 16px;
  }
  ${({ last }) =>
    last &&
    css`
      margin-bottom: 0px;
      @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
        margin-right: 0px;
      }
    `}
  ${({ rights }) =>
    rights &&
    css`
      letter-spacing: 0.01em;
      cursor: auto;
      &:hover {
        color: ${({ theme }) => theme.colors.white};
      }
    `}
`;

const ButtonStyle = styled(Button)`
  width: 165px;
  margin-bottom: 28px;
  font-size: 16px;
  font-weight: 700;
  line-height: 7px;
`;
