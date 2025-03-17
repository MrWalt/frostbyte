import Section from "../ui/Section";
import LoginForm from "../features/authentication/LoginForm";
import styled from "styled-components";

const FlexSection = styled(Section)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Login() {
  return (
    <FlexSection>
      <LoginForm />
    </FlexSection>
  );
}
