import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 0.8rem;

  align-items: start;

  animation: dropIn 0.2s;
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
    <div>
      <StyledButton
        onClick={() => handler(category)}
        className={`${isToggled ? "active" : ""}`}
      >
        {category}
      </StyledButton>
      {isToggled && (
        <Box>
          {links.map((link) => (
            <StyledNavLink to={`/products/${link.link}`} key={link.link}>
              {link.heading}
            </StyledNavLink>
          ))}
        </Box>
      )}
    </div>
  );
}
