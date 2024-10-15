import styled, { css } from "styled-components";

export const BoxWithStyledComponent = styled.div`
  background-color: ${({ $isBlack }) => ($isBlack ? "black" : "green")};
  width: 100px;
  height: 100px;
  margin: 2rem;
  &:hover {
    background-color: red;
  }
`;
