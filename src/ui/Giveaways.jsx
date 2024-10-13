import styled from "styled-components";
import Button from "./Button";
// import Card from "./Card";

const Container = styled.div`
  width: 100%;
  height: 52rem;
  /* background-color: var(--color-grey-900); */
  background-color: rgb(17, 24, 39, 0.95);
  backdrop-filter: blur(4px);

  border-bottom: 2px solid var(--color-brand-500);
  border-right: 2px solid var(--color-brand-500);
  border-left: 1px solid var(--color-grey-800);
  border-top: 1px solid var(--color-grey-800);

  padding: 2.4rem 26rem;
  padding-bottom: 6.4rem;

  color: var(--color-grey-0);
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: red; */

  border-left: 2px solid var(--color-brand-500);
  border-top: 2px solid var(--color-brand-500);
  border-left: 1px solid var(--color-grey-800);
  border-bottom: 1px solid var(--color-grey-800);
  border-right: 1px solid var(--color-grey-800);

  display: flex;
  flex-direction: column;

  p {
    height: 100%;
  }
`;

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
`;

const StyledSpan = styled.span`
  display: inline-block;
  text-align: center;

  margin-top: 0.8rem;
  width: 100%;

  color: var(--color-grey-500);
  font-size: 1.2rem;
`;

export default function Giveaways() {
  return (
    <Container>
      <StyledDiv>
        <Card>
          <p>Product Title</p>
          <p>Product Image</p>
          <Button>Enter</Button>
        </Card>
        <Card>
          <p>Product Title</p>
          <p>Product Image</p>
          <Button>Enter</Button>
        </Card>
        <Card>
          <p>Product Title</p>
          <p>Product Image</p>
          <Button>Enter</Button>
        </Card>
      </StyledDiv>
      <StyledSpan>
        &mdash; All giveaway winners will be contacted via email with further
        instructions on how to claim their winnings. If you have any issues with
        this process please contact our support &mdash;
      </StyledSpan>
    </Container>
  );
}
