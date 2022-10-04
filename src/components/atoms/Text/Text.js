import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Text = ({ children, tag = "span", className, ...props }) => {
  return (
    <StyledText className={className} as={tag} {...props}>
      {children}
    </StyledText>
  );
};

export { Text };

Text.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.string,
  className: PropTypes.string,
};

const StyledText = styled.text`
  font-family: ${({ theme }) => theme.fontFamily};
`;
