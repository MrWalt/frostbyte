import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  HiOutlineIdentification,
  HiOutlineShieldCheck,
  HiOutlineShoppingBag,
  HiOutlineTableCells,
} from "react-icons/hi2";
import Button from "./Button";
import { useLogout } from "../features/authentication/useLogout";
import { useUser } from "../features/authentication/UserContext";

const Box = styled.div`
  width: 26rem;
  min-height: 40rem;

  border: 1px solid var(--color-grey-800);
  /* border-top: none; */

  border-right: 2px solid var(--color-brand-700);
  border-bottom: 1px solid var(---color-brand-700);

  /* background-color: var(--color-brand-900); */

  display: flex;
  flex-direction: column;

  justify-content: space-between;

  flex-shrink: 0;
`;

const StyledLink = styled(NavLink)`
  padding: 1.6rem 3.2rem;

  transition: var(--animation-fast);

  overflow: hidden;

  display: flex;
  align-items: center;
  gap: 0.6rem;

  position: relative;

  svg {
    font-size: 2rem;
  }

  &::before {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    /* transform: translateX(100px); */

    height: 100%;
    width: 0;

    background-color: var(--color-brand-700);

    transition: var(--animation-medium);

    z-index: -1;
  }

  &:hover&::before {
    width: 100%;
  }

  &.active {
    background-color: var(--color-brand-700);
  }
`;

const StyledButton = styled(Button)`
  /* border: none; */
  background-color: transparent;
  border: 2px solid var(--color-brand-700);
  border-right: none;
  border-color: var(--color-brand-700);

  &:hover {
    background-color: var(--color-brand-700);
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
          <HiOutlineShoppingBag />
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
