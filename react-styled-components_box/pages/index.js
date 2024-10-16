import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import { BoxWithStyledComponent } from "../components/BoxWithStyledComponents.js";
import styled from "styled-components";
export default function HomePage() {
  return (
    <StyledHomePage>
      <BoxWithStyledComponent />
      <BoxWithStyledComponent $isBlack />
      <BoxWithClassName />
      <BoxWithClassName isBlack />
    </StyledHomePage>
  );
}

const StyledHomePage = styled.div`
  display: flex;
`;
