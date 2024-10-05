import styled, { css } from "styled-components";

const variations = {
  primary: css`
    font-size: 4.2rem;
    font-weight: 600;
    letter-spacing: -4px;
    text-transform: uppercase;
    line-height: 0.8;
    text-align: center;

    width: 100%;

    padding: 3.2rem 2rem;

    background-color: var(--color-brand-100);
    border: 1px solid var(--color-brand-300);
    color: var(--color-brand-900);
  `,

  secondary: css`
    text-transform: uppercase;
    font-size: 2.4rem;
    color: var(--color-brand-900);

    border-bottom: 1px solid var(--color-brand-200);
    border-top: 1px solid var(--color-brand-200);
    padding: 1.2rem;
  `,
};

const Heading = styled.h1`
  ${(props) => variations[props.variation]}
`;

export default Heading;
