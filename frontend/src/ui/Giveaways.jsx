import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";
// import Card from "./Card";

const Container = styled.div`
  width: 100%;

  /* background-color: var(--color-grey-transparent);
  backdrop-filter: blur(4px); */

  padding: 6.4rem;
  padding-top: 2.4rem;

  color: var(--color-grey-0);
`;

const StyledHeading = styled(Heading)`
  text-align: center;
  margin-bottom: 3.2rem;
`;

const Card = styled.div`
  width: 28rem;
  height: 36rem;

  border: 1px solid var(--color-grey-800);

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
      <StyledHeading $variation="secondary">
        Check Out Our Giveaways
      </StyledHeading>
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
