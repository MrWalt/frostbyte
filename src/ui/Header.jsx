import { Link } from "react-router-dom";
import styled from "styled-components";

import {
  HiOutlineBars3,
  HiOutlineChatBubbleLeftRight,
  HiOutlineUserCircle,
  HiOutlineShoppingCart,
} from "react-icons/hi2";

import DropDownMenu from "./DropDownMenu";

const StyledHeader = styled.header`
  position: fixed;
  height: 6.4rem;
  width: 100%;
  padding-right: 7.2rem;

  z-index: 999;

  background-color: var(--color-brand-700);
  /* border-bottom: 1px solid var(--color-brand-400); */
  backdrop-filter: blur(12px);

  font-size: 1.6rem;
  color: var(--color-grey-100);
`;

const StyledLink = styled(Link)`
  padding: 0 2.4rem;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  border-right: 1px solid var(--color-brand-700);
  border-left: 1px solid var(--color-brand-700);

  transition: var(--animation-fast);

  &:hover {
    border-color: var(--color-brand-400);
    background-color: var(--color-brand-800);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 0.4rem;
  }
`;

const ProductsLink = styled(Link)`
  width: 28rem;
  border-right: 1px solid var(--color-brand-700);

  display: flex;
  justify-content: center;
  align-items: center;

  transition: var(--animation-fast);

  &:hover {
    border-color: var(--color-brand-400);
    background-color: var(--color-brand-800);
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

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <ProductsLink to={"products"} className="dropdown">
          <HiOutlineBars3 />
          Products
        </ProductsLink>
        <DropDownMenu />
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
