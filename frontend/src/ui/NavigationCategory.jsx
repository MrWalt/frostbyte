import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledDiv = styled.div`
  transition: var(--animation-medium);
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 0.8rem;
  height: 100%;
  align-items: start;

  transform: translateY(-4px);

  max-height: 0;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  overflow: hidden;
  transition: var(--animation-medium);

  &.hidden {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    max-height: 0;
    margin-top: 0;
  }

  &:not(.hidden) {
    max-height: 500px;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    margin-top: 0.8rem;

    transform: translateY(0);
  }
`;

const StyledButton = styled.button`
  font-size: 2rem;
  transition: var(--animation-fast);

  cursor: pointer;
  color: var(--color-grey-0);

  &:hover {
    font-weight: 500;
  }

  &.active {
    font-weight: 500;
    color: var(--color-brand-500);
  }
`;

const StyledNavLink = styled(NavLink)`
  margin-left: 3.2rem;
  font-size: 1.8rem;

  transition: var(--animation-fast);

  &:hover {
    font-weight: 500;
  }

  &.active {
    color: var(--color-brand-500);
    font-weight: 500;
  }
`;

export default function NavigationCategory({
  category,
  isToggled,
  handler,
  links,
}) {
  return (
    <StyledDiv>
      <StyledButton
        onClick={() => handler(category)}
        className={`${isToggled ? "active" : ""}`}
      >
        {category}
      </StyledButton>

      <Box className={`${!isToggled ? "hidden" : ""}`}>
        {links.map((link) => (
          <StyledNavLink to={`/products/${link.link}`} key={link.link}>
            {link.heading}
          </StyledNavLink>
        ))}
      </Box>
    </StyledDiv>
  );
}
