import styled from "styled-components";
import Heading from "./Heading";
import { HiXMark } from "react-icons/hi2";
import { useMenu } from "../contexts/MenuContext";
import { Link, useLocation } from "react-router-dom";
import NavigationCategory from "./NavigationCategory";
import { useState } from "react";
import categories from "../data/productTabs";

const Container = styled.div`
  height: 100%;
  padding: 0.8rem;
`;

const StyledHeading = styled(Heading)`
  font-weight: 400;

  width: 100%;
  text-align: start;

  border: 1px solid var(--color-grey-800);

  padding: 2.4rem;

  position: relative;
`;

const StyledButton = styled.button`
  font-size: 2.4rem;
  color: var(--color-grey-0);

  cursor: pointer;

  position: absolute;
  top: 50%;
  right: 2.4rem;

  transform: translateY(-50%);
  transition: var(--animation-fast);

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: translateY(-50%) scale(1.1);
  }
`;

const Box = styled.div`
  padding: 3.6rem;

  font-size: 1.6rem;
  color: var(--color-grey-0);

  display: flex;
  flex-direction: column;
  align-items: start;

  gap: 1.8rem;
`;

const StyledLink = styled(Link)`
  font-size: 2rem;
  transition: var(--animation-fast);

  &:hover {
    font-weight: 500;
  }

  &.active {
    font-weight: 500;
    color: var(--color-brand-500);
  }
`;

export default function Navigation() {
  const { closeMenu } = useMenu();
  const [isToggled, setIsToggled] = useState("");
  const location = useLocation();
  const navCategories = categories;

  function handleToggleCategory(category) {
    if (category === isToggled) {
      setIsToggled("");
      return;
    }

    setIsToggled(category);
  }

  return (
    <Container>
      <StyledHeading variation="tertiary">
        Products
        <StyledButton onClick={closeMenu}>
          <HiXMark />
        </StyledButton>
      </StyledHeading>
      <Box>
        <StyledLink
          to="/products"
          className={`${location.pathname === "/products" ? "active" : ""}`}
          onClick={() => handleToggleCategory("")}
        >
          All Products
        </StyledLink>

        {navCategories.map((category) => (
          <NavigationCategory
            category={category.category}
            handler={handleToggleCategory}
            links={category.links}
            isToggled={isToggled === category.category}
            key={category.category}
          />
        ))}
        {/* <NavigationCategory
          category="Desktop"
          handler={handleToggleCategory}
          isToggled={isToggled === "desktop"}
        />
        <NavigationCategory category="Computer Peripherals" /> */}
        {/* <NavigationCategory category="Computer Peripherals" />
        <NavigationCategory category="Laptops" />
        <NavigationCategory category="Audio" />
        <NavigationCategory category="Gaming" />
        <NavigationCategory category="Network" />
        <NavigationCategory category="Touch Devices" />
        <NavigationCategory category="Other" /> */}
      </Box>
    </Container>
  );
}
