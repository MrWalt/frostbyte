import Section from "../ui/Section";
import SignupForm from "../features/authentication/SignupForm";
import styled from "styled-components";

const FlexSection = styled(Section)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function SignUp() {
  return (
    <FlexSection>
      <SignupForm />
    </FlexSection>
  );
}
