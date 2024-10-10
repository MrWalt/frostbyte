import styled from "styled-components";
import Button from "./Button";

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;

  border-top: 2px solid var(--color-brand-500);
  border-left: 1px solid var(--color-grey-800);
  border-bottom: 1px solid var(--color-grey-800);
  border-right: 1px solid var(--color-grey-800);

  display: flex;
  flex-direction: column;

  color: var(--color-grey-0);
  font-size: 1.6rem;

  p {
    height: 100%;
  }
`;

export default function Card({ buttonText, children }) {
  return (
    <StyledDiv>
      {children}
      <Button>{buttonText}</Button>
    </StyledDiv>
  );
}
