import { css, styled } from "styled-components";

const variations = {
  large: css`
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

    &:disabled {
      background-color: var(--color-grey-200);
      border-bottom: 3px solid var(--color-grey-400);
      cursor: not-allowed;
    }
  `,
  minimal: css`
    color: var(--color-brand-500);

    cursor: text;

    &::placeholder {
      color: var(--color-brand-500);
    }
  `,
  form: css`
    border: 1px solid var(--color-grey-800);

    padding: 0.8rem 1rem;
    font-size: 1.4rem;
    color: var(--color-grey-0);
    transition: var(--animation-fast);

    margin-bottom: 1.6rem;

    &:focus {
      border: 1px solid var(--color-brand-600);
    }

    &::placeholder {
      color: var(--color-grey-500);
    }

    &.input-error {
      border: 1px solid var(--color-red-500);
      animation: shake 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    &:disabled {
      color: var(--color-grey-400);
    }
  `,
};

const Input = styled.input`
  display: block;
  width: 100%;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  ${(props) => variations[props.$variation]}
`;

export default Input;
