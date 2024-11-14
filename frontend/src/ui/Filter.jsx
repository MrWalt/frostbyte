import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const StyledFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.4rem 2.4rem;

  cursor: pointer;

  transition: var(--animation-fast);

  &:hover {
    background-color: var(--color-grey-800);
  }

  * {
    cursor: pointer;
  }

  &:last-child {
    margin-bottom: 1.6rem;
  }
`;

const CheckBox = styled.div`
  width: 1.8rem;
  height: 1.8rem;

  border: 2px solid var(--color-brand-800);
`;

const CheckBoxChecked = styled.div`
  width: 1.8rem;
  height: 1.8rem;

  background-color: var(--color-brand-500);
  border: 2px solid var(--color-brand-800);
`;

export default function Filter({ option, handler, filter }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const selected = searchParams.get(filter) || "";

  function handleClick() {
    searchParams.set("page", 1);

    if (option === selected) {
      searchParams.delete(filter);
      setSearchParams(searchParams);
      return;
    }

    searchParams.set(filter, option);
    setSearchParams(searchParams);
  }

  return (
    <StyledFilter
      onClick={() => {
        handler(option);
        handleClick();
      }}
    >
      {selected === option ? (
        <CheckBoxChecked type="checkbox" id={option} />
      ) : (
        <CheckBox type="checkbox" id={option} />
      )}

      <label htmlFor={option}>{option}</label>
    </StyledFilter>
  );
}
