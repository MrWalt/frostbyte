import { useState } from "react";
import styled from "styled-components";

const StyledFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.4rem 2.4rem;

  &:last-child {
    margin-bottom: 1.6rem;
  }

  label {
    cursor: pointer;
  }
`;

const CheckBox = styled.div`
  cursor: pointer;

  width: 1.8rem;
  height: 1.8rem;

  border: 2px solid var(--color-brand-800);
`;

const CheckBoxChecked = styled.div`
  cursor: pointer;

  width: 1.8rem;
  height: 1.8rem;

  background-color: var(--color-brand-500);
  border: 2px solid var(--color-brand-800);
`;

export default function Filter({ option }) {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheck() {
    setIsChecked((checked) => !checked);
  }

  return (
    <StyledFilter>
      {isChecked ? (
        <CheckBoxChecked type="checkbox" id={option} onClick={handleCheck} />
      ) : (
        <CheckBox type="checkbox" id={option} onClick={handleCheck} />
      )}

      <label htmlFor={option} onClick={handleCheck}>
        {option}
      </label>
    </StyledFilter>
  );
}
