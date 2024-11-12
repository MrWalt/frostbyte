import styled, { css } from "styled-components";

const priceSizes = {
  large: css`
    font-size: 2.8rem;
  `,
  medium: css`
    font-size: 2rem;
  `,
  small: css`
    font-size: 1.6rem;
  `,
};

const currencySizes = {
  large: css`
    font-size: 1.4rem;
  `,
  medium: css`
    font-size: 1.2rem;
  `,
  small: css`
    font-size: 1.2rem;
  `,
};

const centSizes = {
  large: css`
    font-size: 1.4rem;
  `,
  medium: css`
    font-size: 1.2rem;
  `,
  small: css`
    font-size: 1.2rem;
  `,
};

const StyledPrice = styled.span`
  display: inline-block;

  color: var(--color-grey-0);

  ${(props) => priceSizes[props.size]}
`;

const Currency = styled.span`
  display: inline-block;

  margin-right: 0.1rem;

  color: var(--color-grey-0);

  ${(props) => currencySizes[props.size]}
`;

const Cents = styled.span`
  color: var(--color-brand-600);

  ${(props) => centSizes[props.size]}
`;

export default function Price({ price, size }) {
  const formattedPrice = String(price).split(".");

  return (
    <div>
      <Currency size={size}>$</Currency>
      <StyledPrice size={size}>{formattedPrice.at(0)},</StyledPrice>
      <Cents size={size}>
        {formattedPrice.at(1) > 0 ? formattedPrice.at(1).slice(0, 2) : "00"}
      </Cents>
    </div>
  );
}
