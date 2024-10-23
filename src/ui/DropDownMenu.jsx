import styled, { css } from "styled-components";
import {
  computerPeripherals,
  desktopComputerParts,
  other,
} from "../data/productTabs";

import { NavLink } from "react-router-dom";

import { HiBarsArrowUp, HiBarsArrowDown } from "react-icons/hi2";
import { useState } from "react";

const StyledDiv = styled.div`
  width: 28rem;
  height: calc(100vh - 6.4rem);
  background-color: var(--color-grey-900);

  /* border-top: 1px solid var(--color-brand-400); */

  color: var(--color-grey-0);

  position: absolute;
  bottom: 0;
  /* bottom: 0;
  left: 0;

  transform: translate(-150%, 100%); */
  transition: all 0.3s ease-out;

  opacity: 0;
  visibility: hidden;
  pointer-events: none;

  display: flex;
  flex-direction: column;

  overflow-y: scroll;

  ${(props) =>
    props.align === "left"
      ? css`
          left: 0;

          transform: translate(-150%, 100%);
          border-right: 1px solid var(--color-brand-400);

          div {
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
            transform: translateY(-5%);
            /* animation: drop-in 0.4s linear; */

            transition: var(--animation-fast);
          }
        `
      : css`
          right: 0;
          transform: translate(150%, 100%);
          border-left: 1px solid var(--color-brand-400);
        `}

  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledLabel = styled.label`
  padding: 0.6rem 1.6rem;
  position: relative;
  background-color: transparent;

  display: flex;
  gap: 0.2rem;
  align-items: center;

  width: 100%;

  font-size: 1.6rem;

  cursor: pointer;
  transition: var(--animation-fast);

  &::before {
    content: "";
    top: 0;
    left: 0;
    position: absolute;
    background-color: var(--color-brand-900);
    width: 0%;
    height: 100%;
    z-index: -1;

    transition: var(--animation-fast);
  }

  &:hover {
    color: var(--color-grey-0);

    &::before {
      width: 100%;
      border-left: 8px solid var(--color-brand-700);
    }
  }

  & svg {
    width: 2rem;
    height: 2rem;
  }
`;

const StyledCheckbox = styled.input`
  display: none;

  &:checked + label {
    color: var(--color-grey-0);
    padding-left: 3.2rem;

    &::before {
      background-color: var(--color-brand-900);
      border-left: 24px solid var(--color-brand-700);

      width: 100%;
    }

    & + div {
      display: flex;
      flex-direction: column;

      opacity: 1;
      visibility: visible;
      pointer-events: auto;
      transform: translateY(0);
    }
  }

  /* &:checked ~ div {
    display: flex;
    flex-direction: column;

    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    transform: translateY(0);
  } */
`;

const ProductLink = styled(NavLink)`
  padding: 0.6rem 2.4rem;
  transition: var(--animation-fast);
  font-size: 1.4rem;

  &:hover {
    background-color: var(--color-grey-800);
    border-left: 8px solid var(--color-brand-800);
    padding-left: 3.2rem;
  }

  &:active {
    border-left: 64px solid var(--color-grey-800);
  }
`;

export default function DropDownMenu({ children, align }) {
  return (
    <StyledDiv align={align} className="dropdown-menu">
      {children}
    </StyledDiv>
  );
}

// HOC Components

function Products() {
  const [isToggledDesktop, setIsToggledDesktop] = useState(false);
  const [isToggledPeripherals, setIsToggledPeripherals] = useState(false);
  const [isToggledOther, setIsToggledOther] = useState(false);

  function toggleDropDown(category) {
    if (category === "desktop") setIsToggledDesktop((item) => !item);
    if (category === "peripherals") setIsToggledPeripherals((item) => !item);
    if (category === "other") setIsToggledOther((item) => !item);
  }

  return (
    <>
      <StyledCheckbox type="checkbox" id="desktop" />
      <StyledLabel htmlFor="desktop" onClick={() => toggleDropDown("desktop")}>
        {isToggledDesktop ? <HiBarsArrowUp /> : <HiBarsArrowDown />}
        Desktop Computers
      </StyledLabel>
      {isToggledDesktop && (
        <div>
          {desktopComputerParts.map((item) => (
            <ProductLink to={`products/${item.link}`} key={item.link}>
              {item.title}
            </ProductLink>
          ))}
        </div>
      )}

      <StyledCheckbox type="checkbox" id="peripherals" />
      <StyledLabel
        htmlFor="peripherals"
        onClick={() => toggleDropDown("peripherals")}
      >
        {isToggledPeripherals ? <HiBarsArrowUp /> : <HiBarsArrowDown />}{" "}
        Computer Peripherals
      </StyledLabel>
      {isToggledPeripherals && (
        <div>
          {computerPeripherals.map((item) => (
            <ProductLink to={`products/${item.link}`} key={item.link}>
              {item.title}
            </ProductLink>
          ))}
        </div>
      )}

      <StyledCheckbox type="checkbox" id="other" />
      <StyledLabel htmlFor="other" onClick={() => toggleDropDown("other")}>
        {isToggledOther ? <HiBarsArrowUp /> : <HiBarsArrowDown />} Other
      </StyledLabel>
      {isToggledOther && (
        <div>
          {other.map((item) => (
            <ProductLink to={`products/${item.link}`} key={item.link}>
              {item.title}
            </ProductLink>
          ))}
        </div>
      )}
    </>
  );
}

DropDownMenu.Products = Products;
