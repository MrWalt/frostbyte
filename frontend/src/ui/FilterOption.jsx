import { useState } from "react";
import styled from "styled-components";

import { HiChevronDown } from "react-icons/hi2";
import Filter from "./Filter";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;

  &:last-of-type {
    margin-bottom: 1.8rem;
  }
`;

const OptionsBox = styled.div`
  padding-left: 1.8rem;
`;

const StyledButton = styled.button`
  color: var(--color-grey-0);

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
    transition: var(--animation-fast);

    &.toggled {
      transform: rotate(180deg);
    }
  }
`;

export default function FilterOption({ type, options, filter }) {
  const [selected, setSelected] = useState("");
  const [isToggled, setIsToggled] = useState(false);

  function handleToggle() {
    setIsToggled((toggled) => !toggled);
  }

  function handleSelect(selected) {
    setSelected(selected);
  }

  return (
    <StyledDiv>
      <StyledButton onClick={handleToggle}>
        {type}
        <HiChevronDown className={`${isToggled ? "toggled" : ""}`} />
      </StyledButton>
      <OptionsBox>
        {isToggled &&
          options.map((option) => (
            <Filter
              option={option}
              key={option}
              selected={selected}
              handler={handleSelect}
              filter={filter}
            />
          ))}
      </OptionsBox>
    </StyledDiv>
  );
}
