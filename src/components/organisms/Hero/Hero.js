import React from "react";
import styled from "styled-components";
import { Button } from "../../atoms/Button";
import { Text } from "../../atoms/Text";
import hero from "../../atoms/Figure/hero.png";
import heroBackground from "../../atoms/Figure/heroBackground.svg";

const Hero = () => {
  return (
    <HeroContainer>
      <TextContainer>
        <TextTitle>
          Next generation <br /> digital banking
        </TextTitle>
        <TextSubtitle>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving. budgeting, nvesting, and much
          more.
        </TextSubtitle>
        <ButtonStyles>Request Invite</ButtonStyles>
      </TextContainer>
      <ImageContainer>
        {/* <FirstVector></FirstVector>
        <SecondVector></SecondVector> */}
        <img src={heroBackground} width="100%" />
        <Image src={hero} />
      </ImageContainer>
    </HeroContainer>
  );
};

export { Hero };

const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: #fafafa;
  padding: 0px 0px 0px 11.45%;
  max-height: 700px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`;

const TextTitle = styled(Text)`
  color: ${({ theme }) => theme.colors.title};
  font-size: 53px;
  font-weight: 400;
  line-height: 62px;
  margin-bottom: 30px;
`;

const TextSubtitle = styled(Text)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.01em;
  margin-bottom: 37px;
  max-width: 446px;
`;

const ButtonStyles = styled(Button)`
  width: 165px;
`;

const ImageContainer = styled.div`
  position: relative;
  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    display: none;
  }
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`;
