import { styled } from "styled-components";

const Input = styled.input`
  display: block;

  width: 100%;

  padding: 1.2rem 1.8rem;

  background-color: var(--color-grey-0);
  border-bottom: 3px solid var(--color-grey-0);

  font-size: 1.6rem;
  transition: var(--animation-fast);

  &:focus {
    border-bottom: 3px solid var(--color-brand-500);
  }

  &:placeholder-shown + label {
    transform: translateY(-4rem);
    opacity: 0;
    visibility: hidden;
  }
`;

export default Input;
