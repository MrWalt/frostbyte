import styled from "styled-components";
import Section from "../ui/Section";
import LoginForm from "../features/authentication/LoginForm";

const StyledSection = styled(Section)`
  background-image: url("/background.png");

  height: calc(100vh - 6.4rem - 10rem);
`;

export default function Login() {
  return (
    <StyledSection>
      <LoginForm />
    </StyledSection>
  );
}
