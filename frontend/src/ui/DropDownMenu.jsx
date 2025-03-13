import styled, { css } from "styled-components";

const Box = styled.div`
  position: fixed;
  z-index: 1001;
  transition: var(--animation-medium);

  top: 0;

  visibility: hidden;
  pointer-events: none;

  ${(props) =>
    props.$align === "right"
      ? css`
          right: 0;

          border-left: 1px solid var(--color-brand-500);

          transform: translateX(100%);

          &.open {
            transform: translateX(0%);
          }
        `
      : css`
          left: 0;

          border-right: 1px solid var(--color-brand-500);

          transform: translateX(-100%);

          &.open {
            transform: translateX(0%);
          }
        `}

  &.open {
    visibility: visible;
    pointer-events: auto;
  }

  height: calc(100vh);
  width: 48rem;

  background-color: var(--color-grey-900);
`;

export default function DropDownMenu({ align, children, isOpen }) {
  return (
    <Box $align={align} className={`${isOpen ? "open" : ""}`}>
      {children}
    </Box>
  );
}
