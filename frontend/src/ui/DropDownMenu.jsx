import styled, { css } from "styled-components";
import {
  computerPeripherals,
  desktopComputerParts,
  other,
} from "../data/productTabs";

import { NavLink } from "react-router-dom";
import { useState } from "react";
import useOutsideMenuClick from "../hooks/useOutsideMenuClick";

const Container = styled.div`
  position: absolute;
  overflow: scroll;

  transition: var(--animation-medium);

  top: 0;

  visibility: hidden;
  pointer-events: none;

  ${(props) =>
    props.align === "right"
      ? css`
          right: 0;

          border-left: 1px solid var(--color-brand-400);

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

  height: calc(100vh - 8rem);
  width: 48rem;

  margin-top: 8rem;

  background-color: var(--color-grey-900);

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default function DropDownMenu({
  align,
  children,
  isOpen,
  closeMenu,
  menuName,
}) {
  const ref = useOutsideMenuClick(closeMenu, menuName);

  return (
    <Container
      align={align}
      className={`${isOpen ? "open" : ""}`}
      ref={isOpen ? ref : null}
    >
      {children}
    </Container>
  );
}
