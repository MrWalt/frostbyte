import styled from "styled-components";
import Heading from "../../ui/Heading";
import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Label from "../../ui/Label";

const Container = styled.div`
  margin: 0 auto;
  width: 40rem;
  height: 54rem;

  padding: 4.8rem 2.8rem 3.6rem 2.8rem;

  background-color: rgb(17, 24, 39, 0.7);
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

const StyledDiv = styled.div`
  margin-top: 1.8rem;
`;

const StyledInput = styled(Input)`
  &:last-of-type {
    margin-top: 1.8rem;
  }
`;

// const StyledLabel = styled.label`
//   margin-left: 1.8rem;

//   color: var(--color-grey-400);
//   font-size: 1.4rem;

//   transition: var(--animation-fast);

//   transform: translateY(-7rem);
//   display: block;
// `;

const StyledSpan = styled.span`
  display: block;

  text-align: center;

  margin-top: 1.2rem;

  font-size: 1.4rem;
  color: var(--color-grey-300);

  a:link,
  a:visited {
    color: var(--color-brand-400);
    transition: var(--animation-fast);

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
        <Label htmlFor="email">E-Mail Address</Label>

        <StyledInput
          type="password"
          placeholder="Password"
          id="password"
          spellCheck="false"
        />
        <Label htmlFor="password">Password</Label>

        <StyledDiv>
          <Button>Login</Button>
          <StyledSpan>
            Don't have an account? <Link to="/signup">Create an account</Link>
          </StyledSpan>
        </StyledDiv>
      </div>
    </Container>
  );
}
