import styled from "styled-components";
import Heading from "../../ui/Heading";
import { Link } from "react-router-dom";

const Container = styled.div`
  margin: 0 auto;
  width: 40rem;
  height: 54rem;

  padding: 4.8rem 2.8rem 9.6rem 2.8rem;

  background-color: rgb(17, 24, 39, 0.95);
  border: 1px solid var(--color-grey-800);
  backdrop-filter: blur(8px);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  gap: 1.8rem;

  color: var(--color-grey-0);
  font-size: 1.6rem;

  div {
    align-self: stretch;
  }
`;

const StyledInput = styled.input`
  display: block;

  width: 100%;

  padding: 1.2rem 1.8rem;

  background-color: var(--color-grey-0);
  border-bottom: 3px solid var(--color-grey-0);

  font-size: 1.6rem;
  transition: var(--animation-default);

  &:focus {
    border-bottom: 3px solid var(--color-brand-500);
  }

  &:placeholder-shown + label {
    transform: translateY(-4rem);
    opacity: 0;
    visibility: hidden;
  }

  &:last-of-type {
    margin-top: 1.8rem;
  }
`;

const StyledLabel = styled.label`
  margin-left: 1.8rem;

  color: var(--color-grey-400);
  font-size: 1.4rem;

  transition: var(--animation-default);

  transform: translateY(-7rem);
  display: block;
`;

const StyledSpan = styled.span`
  display: block;

  text-align: center;

  margin-top: -0.2rem;

  font-size: 1.4rem;
  color: var(--color-grey-300);

  a:link,
  a:visited {
    color: var(--color-brand-400);
    transition: var(--animation-default);

    &:hover {
      color: var(--color-brand-600);
    }
  }
`;

export default function LoginForm() {
  return (
    <Container>
      <Heading variation="primary">Login</Heading>

      <div>
        <StyledInput
          type="email"
          placeholder="E-Mail Address"
          id="email"
          spellCheck="false"
        />
        <StyledLabel htmlFor="email">E-Mail Address</StyledLabel>

        <StyledInput
          type="password"
          placeholder="Password"
          id="password"
          spellCheck="false"
        />
        <StyledLabel htmlFor="password">Password</StyledLabel>
        <StyledSpan>
          Don't have an account? <Link to="/signup">Create an account</Link>
        </StyledSpan>
      </div>
    </Container>
  );
}
