import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledFooter = styled.footer`
  height: 10rem;

  font-size: 1.4rem;
  color: var(--color-grey-0);

  background-color: var(--color-brand-900);
  border-top: 1px solid var(--color-brand-500);

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 2rem;
`;

const StyledLink = styled(Link)`
  position: relative;
  padding: 0.2rem;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 2px;

    transition: var(--animation-default);

    background-color: var(--color-grey-0);

    transform: translateY(50%);
  }

  &:hover::before {
    width: 100%;
  }

  &:hover {
    transform: scale(1.04);
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <StyledLink href="#">Terms of Service</StyledLink>
      <StyledLink href="#">Support</StyledLink>
      <StyledLink href="#">About</StyledLink>
      <StyledLink href="#">Professional</StyledLink>
      <StyledLink href="#">Legal</StyledLink>
      <StyledLink href="#">Advertising</StyledLink>
    </StyledFooter>
  );
}
