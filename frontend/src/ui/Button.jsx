import styled, { css } from "styled-components";

const variations = {
  large: css`
    font-weight: 500;
    font-size: 1.8rem;
    text-transform: uppercase;

    padding: 1.2rem 2.4rem;
    width: 100%;

    display: inline-block;

    background-color: var(--color-brand-900);

    border: 1px solid var(--color-brand-900);

    &:hover {
      background-color: var(--color-brand-700);
    }
  `,
  medium: css`
    font-weight: 400;
    font-size: 1.4rem;
    color: var(--color-grey-0);

    &:hover {
      color: var(--color-brand-500);
    }
  `,
  small: css`
    font-size: 1.2rem;
    font-weight: 400;
    color: var(--color-grey-0);

    &:hover {
      color: var(--color-brand-500);
    }
  `,
};

const Button = styled.button`
  font-family: inherit;

  color: var(--color-grey-0);
  transition: var(--animation-fast);

  cursor: pointer;

  ${(props) => variations[props.variation]}
`;

Button.defaultProps = {
  variation: "large",
};

export default Button;
