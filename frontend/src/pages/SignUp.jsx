import styled from "styled-components";
import Section from "../ui/Section";
import SignupForm from "../features/authentication/SignupForm";

const StyledSection = styled(Section)`
  background-image: url("/background.webp");

  height: calc(100vh - 8rem - 10rem);
`;

export default function SignUp() {
  return (
    <StyledSection>
      <SignupForm />
    </StyledSection>
  );
}
