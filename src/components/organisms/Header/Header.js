import React, { useContext, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { PagesContext } from "../../../context/PagesContext";
import { Button } from "../../atoms/Button";
import headerLogo from "../../atoms/Figure/headerLogo.svg";
import { Text } from "../../atoms/Text";

const Header = () => {
  const [active, setActive] = useState(0);
  const pages = ["Home", "About", "Contact", "Blog", "Carreers"];
  const { setPage, page } = useContext(PagesContext);

  const changePageActive = (idx, nameSection) => {
    setActive(idx);
    setPage(nameSection);
  };

  useEffect(() => {
    page === "Articles" && setActive(-1);
  }, [page]);

  return (
    <HeaderContainer>
      <LogoContainer>
        <img src={headerLogo} alt="headerLogo" />
      </LogoContainer>
      <PagesContainer>
        {pages.map((p, idx) => (
          <>
            <PagesText
              key={idx}
              tag="a"
              active={active}
              onClick={() => changePageActive(idx, p)}
              id={idx}
            >
              {p}
            </PagesText>
            {/* <BorderActive id={idx} active={active} /> */}
          </>
        ))}
      </PagesContainer>
      <ButtonContainer>
        <ButtonStyle>Request Invite</ButtonStyle>
      </ButtonContainer>
    </HeaderContainer>
  );
};

export { Header };

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 80px;
  padding: 0px 11.45% 0px 11.45%;
  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    padding: 0px 20px 0px 20px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    flex-direction: column;
    height: fit-content;
  }
`;

const LogoContainer = styled.div`
  padding: 33px 0px 27px 0px;
`;

const PagesContainer = styled.div`
  padding: 33px 0px 40px 0px;
`;

const PagesText = styled(Text)`
  color: ${({ theme }) => theme.colors.subtitle};
  font-size: 16px;
  font-weight: 500;
  line-height: 7px;
  margin-right: 30px;
  text-decoration: none;
  cursor: pointer;
  ${({ id, active }) =>
    id === active &&
    css`
      color: ${({ theme }) => theme.colors.title};
    `}
  &:last-child {
    margin-right: 0px;
  }
`;

// const BorderActive = styled.div`
//   ${({ id, active }) =>
//     id === active &&
//     css`
//       background: linear-gradient(0.25turn, #31cf70 0%, #2cb9cb 100%);
//       height: 4px;
//     `}
// `;

const ButtonContainer = styled.div`
  width: 160px;
  margin: 18px 0px 17px 0px;
`;

const ButtonStyle = styled(Button)`
  font-weight: 700;
  font-size: 16px;
  line-height: 7px;
`;
