import styled, { css } from "styled-components";
import { useMenu } from "../contexts/MenuContext";

const Overlay = styled.div`
  width: 100%;
  height: 100vh;

  z-index: 1000;

  position: fixed;
  top: 0;
  right: 0;

  background-color: rgb(17, 24, 39, 0.4);
  /* backdrop-filter: blur(1px); */

  pointer-events: none;
  visibility: hidden;
  opacity: 0;

  transition: var(--animation-medium);

  &.open {
    pointer-events: auto;
    visibility: visible;
    opacity: 1;
  }
`;

const Box = styled.div`
  position: fixed;
  z-index: 1001;
  transition: var(--animation-medium);

  top: 0;

  visibility: hidden;
  pointer-events: none;

  ${(props) =>
    props.align === "right"
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
  const { closeMenu } = useMenu();

  return (
    <>
      <Overlay
        className={`${isOpen ? "open" : ""}`}
        onClick={closeMenu}
      ></Overlay>
      <Box align={align} className={`${isOpen ? "open" : ""}`}>
        {children}
      </Box>
    </>
  );
}
