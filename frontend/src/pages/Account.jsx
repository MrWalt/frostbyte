import styled from "styled-components";
import Section from "../ui/Section";
import AccountHeader from "../ui/AccountHeader";
import { Outlet } from "react-router-dom";

const StyledSection = styled(Section)`
  background-image: url("/background.png");
  min-height: calc(100vh - 8rem - 10rem);

  font-size: 1.6rem;
  color: var(--color-grey-0);
`;

const Container = styled.div`
  margin: 0 auto;
  width: 120rem;
  border: 1px solid var(--color-grey-800);

  background-color: var(--color-grey-transparent);
  backdrop-filter: blur(4px);

  display: flex;

  padding: 0.4rem;
`;

export default function Account() {
  return (
    <StyledSection>
      <Container>
        <AccountHeader />
        <Outlet />
      </Container>
    </StyledSection>
  );
}
