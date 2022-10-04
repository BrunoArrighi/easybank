import React from "react";
import styled from "styled-components";
import { Text } from "../../atoms/Text";
import { AboutCard } from "../../molecules/AboutCard";

const infoAbout = [
  {
    src: "online",
    title: "Online Banking",
    text: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    src: "budgeting",
    title: "Simple Budgeting",
    text: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
  },
  {
    src: "onboarding",
    title: "Fast Onboarding",
    text: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    src: "api",
    title: "Open API",
    text: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
];

const About = () => {
  return (
    <AboutContainer>
      <Title>Why choose Easybank?</Title>
      <Subtitle>
        We leverage Open Banking to turn your bank acount into your financial
        hub. Control your finances like never before.
      </Subtitle>
      <CardContainer>
        {infoAbout &&
          infoAbout.map((info, idx) => (
            <AboutCard
              key={idx}
              src={info.src}
              title={info.title}
              text={info.text}
              last={idx + 1 === infoAbout.length ? true : false}
            />
          ))}
      </CardContainer>
    </AboutContainer>
  );
};

export { About };

const AboutContainer = styled.div`
  background: #f4f5f7;
  display: flex;
  flex-direction: column;
  padding: 5% 11.45% 5% 11.45%;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    flex-direction: column;
  }
`;

const Title = styled(Text)`
  color: ${({ theme }) => theme.colors.title};
  font-size: 40px;
  line-height: 62px;
  letter-spacing: -0.2px;
  font-weight: 400;
`;

const Subtitle = styled(Text)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 17px;
  line-height: 25px;
  font-weight: 400;
  max-width: 50%;
  margin-bottom: 82px;
`;
