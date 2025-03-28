import styled, { css } from "styled-components";

const priceSizes = {
  largex2: css`
    font-size: 4.2rem;
  `,
  large: css`
    font-size: 2.8rem;
  `,
  medium: css`
    font-size: 2rem;
  `,
  small: css`
    font-size: 1.6rem;
  `,
  tiny: css`
    font-size: 1.2rem;
    color: var(--color-grey-400);
    text-decoration: line-through;
  `,
  minimal: css`
    font-size: 1.4rem;
    color: var(--color-grey-400);
  `,
  normal: css`
    font-size: 1.6rem;
    color: var(--color-grey-0);
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
  tiny: css`
    font-size: 1.2rem;
    color: var(--color-grey-400);
    text-decoration: line-through;
  `,
  minimal: css`
    font-size: 1.4rem;
    color: var(--color-grey-400);
    margin-left: 0;
  `,
  normal: css`
    font-size: 1.6rem;
    color: var(--color-grey-0);
    margin-left: 0;
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
  tiny: css`
    font-size: 1.2rem;
    color: var(--color-grey-400);
    text-decoration: line-through;
  `,
  minimal: css`
    font-size: 1.4rem;
    color: var(--color-grey-400);
  `,
  normal: css`
    font-size: 1.6rem;
    color: var(--color-grey-0);
  `,
};

const StyledPrice = styled.span`
  display: inline-block;

  color: var(--color-grey-0);

  ${(props) => priceSizes[props.size]}
`;

const Currency = styled.span`
  display: inline-block;

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
    <span>
      <StyledPrice size={size}>{formattedPrice.at(0)},</StyledPrice>
      <Cents size={size}>
        {formattedPrice.at(1) > 0 ? formattedPrice.at(1).slice(0, 2) : "00"}
      </Cents>
      <Currency size={size}>€</Currency>
    </span>
  );
}
