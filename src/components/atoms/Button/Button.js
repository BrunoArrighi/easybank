import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Button = ({ className, children, ...props }) => {
  return (
    <Butt className={className} {...props}>
      {children}
    </Butt>
  );
};

export { Button };

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const Butt = styled.button`
  background: linear-gradient(90deg, #31cf70 4.85%, #2cb9cb 100%);
  border: 0px;
  border-radius: 89px;
  border-color: inherit;
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 45px;
  cursor: pointer;
  &: hover {
    transition: all 0.2s ease-in;
    background: linear-gradient(90deg, #84e1a7 4.85%, #81d6db 100%);
  }
`;
