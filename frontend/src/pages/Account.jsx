import styled from "styled-components";
import Section from "../ui/Section";
import AccountHeader from "../ui/AccountHeader";
import { Outlet } from "react-router-dom";

const StyledSection = styled(Section)`
  font-size: 1.6rem;
  color: var(--color-grey-0);

  padding: 4.8rem 0;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 120rem;
  border: 1px solid var(--color-grey-800);

  background-color: var(--color-grey-transparent);
  backdrop-filter: blur(4px);
  min-height: 64rem;

  display: flex;

  padding: 0.4rem;
`;

const Box = styled.div`
  padding: 4.8rem;
  width: 100%;
`;

export default function Account() {
  return (
    <StyledSection>
      <Container>
        <AccountHeader />
        <Box>
          <Outlet />
        </Box>
      </Container>
    </StyledSection>
  );
}
