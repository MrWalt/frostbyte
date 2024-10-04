import styled from "styled-components";
import Heading from "./Heading";
import Button from "./Button";

const Section = styled.section`
  grid-column: 1 / -1;

  text-align: center;
`;

const StyledDiv = styled.div`
  background-color: var(--color-brand-100);
  border-top: 1px solid var(--color-brand-200);

  padding: 3.2rem 1.2rem 6.4rem 1.2rem;

  margin-top: 2.4rem;

  & > span {
    display: inline-block;

    color: var(--color-brand-900);

    margin-top: 1.2rem;
    font-size: 1.2rem;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  gap: 1.8rem;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  width: 22rem;
  height: 28rem;

  display: flex;
  flex-direction: column;

  background-color: var(--color-grey-50);
  border: 1px solid var(--color-brand-200);
`;

const StyledSpan = styled.span`
  font-size: 1.8rem;
  display: inline-block;

  color: var(--color-grey-0);

  padding: 0.8rem 1.2rem;
  background-color: var(--color-brand-900);
`;

const Image = styled.div`
  height: 100%;
`;

export default function Giveaways() {
  return (
    <Section>
      <Heading variation="secondary">Monthly Giveaways</Heading>
      <StyledDiv>
        <CardsContainer>
          <Card>
            <StyledSpan>Macbook Pro 21</StyledSpan>
            <Image>Some Product Image</Image>
            <Button>Enter</Button>
          </Card>
          <Card>
            <StyledSpan>Ryzen 5 5600X</StyledSpan>
            <Image>Some Product Image</Image>
            <Button>Enter</Button>
          </Card>
          <Card>
            <StyledSpan>$100 Coupon Code</StyledSpan>
            <Image>Some Product Image</Image>
            <Button>Enter</Button>
          </Card>
        </CardsContainer>
        <span>
          &mdash; We host monthly giveaways on various products. If you are the
          winner you will be contacted via email with further instructions on
          how to claim your winnings &mdash;
        </span>
      </StyledDiv>
    </Section>
  );
}
