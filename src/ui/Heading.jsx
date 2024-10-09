import styled, { css } from "styled-components";

const variations = {
  primary: css`
    font-size: 3.6rem;
  `,

  secondary: css`
    font-size: 2.8rem;
    text-transform: uppercase;

    padding: 1.2rem 6.4rem;

    background-color: rgb(17, 24, 39, 0.95);
    border-bottom: 1px solid var(--color-grey-800);
    border-right: 1px solid var(--color-grey-800);
    border-top: 2px solid var(--color-brand-500);
    border-left: 2px solid var(--color-brand-500);

    backdrop-filter: blur(2px);
  `,
};

const Heading = styled.h1`
  color: var(--color-grey-0);

  ${(props) => variations[props.variation]};
`;

export default Heading;
