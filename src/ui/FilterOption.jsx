import { useRef, useState } from "react";
import styled from "styled-components";

import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import Filter from "./Filter";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledSpan = styled.span`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  font-size: 1.8rem;

  padding: 0.4rem 0.8rem;

  cursor: pointer;

  transition: var(--animation-fast);

  &:hover {
    background-color: var(--color-grey-800);
  }

  svg {
    font-size: 2rem;
  }
`;

export default function FilterOption({ type, options }) {
  const [isToggled, setIsToggled] = useState(false);

  function handleToggle() {
    setIsToggled((value) => !value);
  }

  return (
    <StyledDiv>
      <StyledSpan onClick={handleToggle}>
        {type}
        {isToggled ? <HiChevronUp /> : <HiChevronDown />}
      </StyledSpan>
      {isToggled &&
        options.map((option) => <Filter option={option} key={option} />)}
    </StyledDiv>
  );
}
