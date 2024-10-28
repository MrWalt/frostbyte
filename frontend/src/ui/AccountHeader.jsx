import { NavLink } from "react-router-dom";
import styled from "styled-components";
import useUser from "../features/authentication/useUser";
import {
  HiOutlineIdentification,
  HiOutlineRectangleStack,
  HiOutlineShieldCheck,
  HiOutlineTableCells,
} from "react-icons/hi2";

const Box = styled.div`
  width: 26rem;

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

  display: flex;
  align-items: center;
  gap: 0.6rem;

  svg {
    font-size: 2rem;
  }

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
  const { role } = useUser();
  return (
    <Box>
      <StyledLink to="profile">
        <HiOutlineIdentification />
        {/* <HiOutlineUser /> */}
        Profile
      </StyledLink>
      <StyledLink to="orders">
        <HiOutlineRectangleStack />
        Orders
      </StyledLink>
      <StyledLink to="security">
        <HiOutlineShieldCheck />
        Security
      </StyledLink>
      {role === "admin" && (
        <StyledLink to="dashboard">
          <HiOutlineTableCells />
          Admin
        </StyledLink>
      )}
    </Box>
  );
}
