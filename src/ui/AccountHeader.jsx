import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Box = styled.div`
  width: 26rem;
  height: 100%;

  border: 1px solid var(--color-grey-800);
  border-top: none;

  border-right: 2px solid var(--color-brand-700);

  display: flex;
  flex-direction: column;

  flex-shrink: 0;
`;

const StyledLink = styled(NavLink)`
  padding: 1.6rem 3.2rem;
  border-bottom: 1px solid var(--color-grey-800);

  transition: var(--animation-fast);

  &:first-of-type {
    border-top: 1px solid var(--color-grey-800);

    &:hover {
      border-top: 1px solid var(--color-brand-700);
    }
  }

  &:hover {
    background-color: var(--color-brand-700);
  }

  &.active {
    background-color: var(--color-brand-700);

    &:first-of-type {
      border-top: 1px solid var(--color-brand-700);
    }
  }
`;

export default function AccountHeader() {
  return (
    <Box>
      <StyledLink to="profile">Profile</StyledLink>
      <StyledLink to="orders">Orders</StyledLink>
      {/* <StyledLink to="orders">Tickets</StyledLink> */}
      <StyledLink to="settings">Settings</StyledLink>
    </Box>
  );
}
