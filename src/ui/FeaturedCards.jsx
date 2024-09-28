import styled from "styled-components";
import PrimaryHeading from "../components/PrimaryHeading";

const Container = styled.div`
  margin: 0 auto;
  height: 42rem;
  width: 60rem;
`;

const Cards = styled.div`
  display: flex;
  gap: 0.4rem;
  width: 100%;
  height: 100%;

  div {
    width: 20%;
    height: 100%;

    transition: var(--animation-default);
    /* border-radius: var(--border-r-sm); */
    border: 1px solid var(--color-brand-400);
    /* border-top: 2px solid var(--color-brand-400);
    border-bottom: 2px solid var(--color-brand-400); */

    cursor: pointer;

    overflow: hidden;

    &:hover {
      width: 65%;

      border-top: 6px solid var(--color-brand-400);
      border-bottom: 6px solid var(--color-brand-400);
    }
  }

  &:hover div:not(:hover) {
    transform: scale(0.95);
    /* width: 8rem; */
  }
`;

export default function FeaturedCard() {
  return (
    <>
      <PrimaryHeading text={"Check out our latest pre-built computers"} />
      <Container>
        <Cards>
          <div>PREBUILT PC 1</div>
          <div>PREBUILT PC 2</div>
          <div>PREBUILT PC 3</div>
          <div>PREBUILT PC 4</div>
          <div>PREBUILT PC 5</div>
        </Cards>
      </Container>
    </>
  );
}
