import { useState } from "react";
import styled from "styled-components";

import { HiChevronDown } from "react-icons/hi2";

const StyledDiv = styled.div`
  font-size: 1.6rem;
  color: var(--color-grey-0);

  margin-top: 1.8rem;

  background-color: var(--color-grey-800);

  transition: var(--animation-medium);

  z-index: 10;

  position: relative;

  &.toggled {
    margin-bottom: 9.2rem;
  }

  &:first-of-type {
    margin-top: 2.4rem;
  }

  svg {
    position: absolute;
    top: 50%;
    right: 0;

    transform: translate(-50%, -50%);

    font-size: 3.2rem;

    transition: var(--animation-fast);

    &.toggled {
      transform: translate(-50%, -50%) rotate(180deg);
    }
  }
`;

const Question = styled.p`
  display: inline-block;
  width: 100%;
  height: 100%;

  border: 1px solid var(--color-grey-700);
  border-top: 2px solid var(--color-brand-500);

  cursor: pointer;

  padding: 1.2rem 1.8rem;

  font-size: 1.8rem;

  transition: var(--animation-fast);

  &:hover {
    background-color: var(--color-grey-700);
  }

  & span {
    color: var(--color-brand-600);
    font-size: 3.2rem;

    margin-right: 1.2rem;
  }
`;

const Answer = styled.p`
  padding: 1.6rem 2.4rem;

  border: 1px solid var(--color-grey-800);
  border-top: none;

  display: inline-block;
  font-size: 1.6rem;

  opacity: 0;
  visibility: hidden;
  pointer-events: none;

  width: 100%;

  position: absolute;
  right: 50%;
  bottom: 0%;
  transform: translate(50%, 0);
  z-index: -1;

  background-color: var(--color-grey-900);

  transition: var(--animation-fast);

  &.toggled {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;

    transform: translate(50%, 100%);
  }
`;

export default function Accordion({ question, answer }) {
  const [isToggled, setIsToggled] = useState(false);

  function handleToggle() {
    setIsToggled((isToggled) => !isToggled);
  }

  return (
    <StyledDiv className={`${isToggled ? "toggled" : ""}`}>
      <HiChevronDown className={`${isToggled ? "toggled" : ""}`} />
      <Question onClick={handleToggle}>
        <span>Q.</span>
        {question}
      </Question>
      <Answer className={`${isToggled ? "toggled" : ""}`}>{answer}</Answer>
    </StyledDiv>
  );
}
