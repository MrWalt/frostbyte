import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  computerPeripherals,
  desktopComputerParts,
  other,
} from "../data/productTabs";

import {
  HiOutlineBars3,
  HiOutlineChatBubbleLeftRight,
  HiOutlineUserCircle,
  HiOutlineShoppingCart,
} from "react-icons/hi2";

const StyledHeader = styled.header`
  position: fixed;
  height: 6.4rem;
  width: 100%;
  padding-right: 7.2rem;

  background-color: var(--color-grey-200);
  border-bottom: 1px solid var(--color-brand-400);
  backdrop-filter: blur(12px);

  font-size: 1.6rem;

  span {
    font-size: 1.2rem;

    padding: 0.4rem 3.2rem;
    margin-top: 1.2rem;

    color: var(--color-grey-700);
  }
`;

const StyledLink = styled(Link)`
  padding: 0 2.4rem;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  border-right: 1px solid var(--color-grey-200);
  border-left: 1px solid var(--color-grey-200);
  transition: var(--animation-default);

  &:hover {
    border-color: var(--color-brand-400);
    background-color: var(--color-brand-200);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 0.4rem;
  }
`;

const ProductsLink = styled(Link)`
  width: 28rem;
  border-right: 1px solid var(--color-grey-200);

  display: flex;
  justify-content: center;
  align-items: center;

  transition: var(--animation-default);

  &:hover {
    border-color: var(--color-brand-400);
    background-color: var(--color-brand-200);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 0.4rem;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;

  position: relative;
  display: flex;
  justify-content: space-between;
`;

const LinkContainer = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const DropDownMenu = styled.div`
  width: 28rem;
  height: calc(100vh - 6.4rem);
  background-color: var(--color-grey-200);
  border-top: 1px solid var(--color-brand-400);
  border-right: 1px solid var(--color-brand-400);

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

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <ProductsLink to={"products"} className="dropdown">
          <HiOutlineBars3 />
          Products
        </ProductsLink>
        {/* <StyledLink to="/">LOGO</StyledLink> */}
        <DropDownMenu className="dropdown-menu">
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
        </DropDownMenu>
        <LinkContainer>
          <StyledLink to={`contact`}>
            <HiOutlineChatBubbleLeftRight />
            Contact
          </StyledLink>
          <StyledLink to={`account`}>
            <HiOutlineUserCircle />
            Account
          </StyledLink>
          <StyledLink to={`cart`}>
            <HiOutlineShoppingCart />
            Cart
          </StyledLink>
        </LinkContainer>
      </Container>
    </StyledHeader>
  );
}
