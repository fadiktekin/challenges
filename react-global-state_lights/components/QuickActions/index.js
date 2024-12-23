import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  toggleAllOff,
  toggleAllOn,
  allOn,
  allOff,
}) {
  return (
    <StyledQuickActions>
      <Button type="button" onClick={toggleAllOff} disabled={allOff}>
        Turn all lights off
      </Button>
      <Button type="button" onClick={toggleAllOn} disabled={allOn}>
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
