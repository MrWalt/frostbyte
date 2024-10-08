import styled, { css } from "styled-components";

const variations = {
  primary: css`
    font-size: 4.2rem;
  `,

  secondary: css`
    font-size: 2.8rem;
    text-transform: uppercase;

    padding: 1.2rem 6.4rem;
  `,
};

const Heading = styled.h1`
  position: relative;

  color: var(--color-grey-0);

  background-color: rgb(17, 24, 39, 0.95);
  border-bottom: 1px solid var(--color-grey-800);
  border-right: 1px solid var(--color-grey-800);
  border-top: 2px solid var(--color-brand-500);
  border-left: 2px solid var(--color-brand-500);

  backdrop-filter: blur(2px);

  ${(props) => variations[props.variation]};
`;

export default Heading;
