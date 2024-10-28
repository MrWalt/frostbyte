import { useMoveBack } from "../hooks/useMoveBack";
import styled from "styled-components";

import Button from "../ui/Button";
import { HiArrowLeft } from "react-icons/hi2";

const StyledDiv = styled.div`
  width: 80%;
  margin: 9.6rem auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  span {
    font-size: 2.2rem;
    text-transform: uppercase;
    color: var(--color-grey-0);
  }
`;

const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  gap: 0.4rem;
`;

export default function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <StyledDiv>
      <span>This page does not exist</span>
      <StyledButton onClick={moveBack}>
        <HiArrowLeft />
        Back
      </StyledButton>
    </StyledDiv>
  );
}
