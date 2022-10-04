import React from "react";
import styled from "styled-components";

const IconYoutube = () => {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_1963)">
        <ColorPath
          d="M10.333 0C4.81101 0 0.333008 4.478 0.333008 10C0.333008 15.523 4.81101 20 10.333 20C15.856 20 20.333 15.523 20.333 10C20.333 4.478 15.856 0 10.333 0ZM14.034 14.077C12.282 14.197 8.38101 14.197 6.63201 14.077C4.73501 13.947 4.51401 13.018 4.50001 10C4.51401 6.976 4.73701 6.053 6.63201 5.923C8.38101 5.803 12.283 5.803 14.034 5.923C15.932 6.053 16.152 6.982 16.167 10C16.152 13.024 15.929 13.947 14.034 14.077ZM8.66701 8.048L12.764 9.997L8.66701 11.952V8.048Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_1963">
          <rect width="21" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export { IconYoutube };

const ColorPath = styled.path`
  &:hover {
    fill: ${({ theme }) => theme.colors.hover};
  }
`;
