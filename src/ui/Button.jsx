import styled from "styled-components";

const Button = styled.button`
  font-family: inherit;
  font-weight: 500;
  font-size: 1.8rem;
  text-transform: uppercase;

  padding: 1.2rem 2.4rem;
  border: none;
  width: 100%;

  cursor: pointer;

  color: var(--color-grey-0);
  background-color: var(--color-brand-900);

  transition: var(--animation-default);

  &:hover {
    background-color: var(--color-brand-700);
  }
`;

export default Button;
