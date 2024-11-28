import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  HiOutlineIdentification,
  HiOutlineRectangleStack,
  HiOutlineShieldCheck,
  HiOutlineTableCells,
} from "react-icons/hi2";
import Button from "./Button";
import { useLogout } from "../features/authentication/useLogout";
import { useUser } from "../features/authentication/UserContext";

const Box = styled.div`
  width: 26rem;

  border: 1px solid var(--color-grey-800);
  border-top: none;

  border-right: 2px solid var(--color-brand-700);

  display: flex;
  flex-direction: column;

  justify-content: space-between;

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

const StyledButton = styled(Button)`
  border: none;
  background-color: var(--color-brand-700);

  &:hover {
    background-color: var(--color-brand-800);
  }
`;

export default function AccountHeader() {
  const { logout } = useLogout();
  const { user } = useUser();

  return (
    <Box>
      <div>
        <StyledLink to="profile">
          <HiOutlineIdentification />
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
        {user.role === "admin" && (
          <StyledLink to="admin-dashboard">
            <HiOutlineTableCells />
            Admin
          </StyledLink>
        )}
      </div>

      <StyledButton onClick={logout}>Logout</StyledButton>
    </Box>
  );
}
