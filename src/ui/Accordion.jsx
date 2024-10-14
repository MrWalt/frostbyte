import { useState } from "react";
import styled from "styled-components";

import { HiChevronDown, HiChevronUp } from "react-icons/hi2";

const StyledDiv = styled.div`
  font-size: 1.6rem;
  color: var(--color-grey-0);

  padding: 0.8rem 1.2rem;
  padding-right: 9.2rem;
  margin-top: 1.8rem;

  display: flex;
  flex-direction: column;

  border: 1px solid var(--color-grey-700);
  border-top: 2px solid var(--color-brand-500);

  background-color: var(--color-grey-800);

  position: relative;

  cursor: pointer;

  transition: var(--animation-fast);

  &:hover {
    background-color: var(--color-grey-700);
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
  }
`;

const Question = styled.p`
  display: inline-block;

  font-size: 1.8rem;

  & span {
    color: var(--color-brand-600);
    font-size: 3.2rem;

    margin-right: 1.2rem;
  }
`;

const Answer = styled.p`
  margin-top: 1.8rem;
  margin-left: 1.2rem;

  /* padding: 0.4rem 0.8rem;
  background-color: var(--color-grey-900); */

  display: inline-block;

  font-size: 1.6rem;
`;

export default function Accordion({ question, answer }) {
  const [isToggled, setIsToggled] = useState(false);

  function handleToggle() {
    setIsToggled((isToggled) => !isToggled);
  }

  return (
    <StyledDiv onClick={handleToggle}>
      {isToggled ? <HiChevronUp /> : <HiChevronDown />}
      <Question>
        <span>Q.</span>
        {question}
      </Question>
      {isToggled && <Answer>{answer}</Answer>}
    </StyledDiv>
  );
}
