import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const Input = ({ type = "text", tag = "input", value, onChange, ...props }) => {
  return (
    <Inp
      as={tag}
      type={type}
      value={value}
      onChange={(e) => onChange(e)}
      {...props}
    ></Inp>
  );
};

export { Input };

Input.propTypes = {
  type: PropTypes.string,
  tag: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const Inp = styled.input`
  border: 1px solid #d1d5db;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  width: -webkit-fill-available;
  background: #ffffff;
  display: flex;
  align-items: center;
  padding: 13px 17px;
  outline: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  font-family: Inter;
  < &:focus {
    border: 1px solid ${({ theme }) => theme.colors.hover};
  }

  ${({ as }) =>
    as === "textarea" &&
    css`
      height: 333px;
    `}
`;
