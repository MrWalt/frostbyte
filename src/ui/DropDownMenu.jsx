import styled from "styled-components";
import {
  computerPeripherals,
  desktopComputerParts,
  other,
} from "../data/productTabs";
import { NavLink } from "react-router-dom";

const StyledDiv = styled.div`
  width: 28rem;
  height: calc(100vh - 6.4rem);
  background-color: var(--color-grey-100);

  /* border-top: 1px solid var(--color-brand-400); */
  border-right: 1px solid var(--color-brand-400);

  color: var(--color-grey-900);

  position: absolute;
  bottom: 0;
  left: 0;

  transform: translate(-150%, 100%);
  transition: all 0.3s ease-out;

  opacity: 0;
  visibility: hidden;
  pointer-events: none;

  display: flex;
  flex-direction: column;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ProductLink = styled(NavLink)`
  padding: 0.6rem 2.4rem;
  transition: var(--animation-default);

  &:hover {
    background-color: var(--color-brand-200);
    border-left: 8px solid var(--color-brand-800);
    padding-left: 3.2rem;
  }

  &:active {
    border-left: 64px solid var(--color-brand-800);
  }
`;

export default function DropDownMenu() {
  return (
    <StyledDiv className="dropdown-menu">
      <span>&mdash; Desktop Computers</span>
      {desktopComputerParts.map((item) => (
        <ProductLink to={`products/${item.link}`}>{item.title}</ProductLink>
      ))}
      <span>&mdash; Computer Peripherals</span>
      {computerPeripherals.map((item) => (
        <ProductLink to={`products/${item.link}`}>{item.title}</ProductLink>
      ))}
      <span>&mdash; Other</span>
      {other.map((item) => (
        <ProductLink to={`products/${item.link}`}>{item.title}</ProductLink>
      ))}
    </StyledDiv>
  );
}
