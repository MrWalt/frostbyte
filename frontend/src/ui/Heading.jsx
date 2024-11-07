import styled, { css } from "styled-components";

const variations = {
  primary: css`
    font-size: 3.6rem;
  `,

  secondary: css`
    font-size: 2.8rem;
  `,

  tertiary: css`
    font-size: 2.2rem;
  `,
};

const Heading = styled.h1`
  color: var(--color-grey-0);

  ${(props) => variations[props.variation]};

  font-weight: 400;
`;

export default Heading;
