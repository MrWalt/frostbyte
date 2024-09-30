import styled from "styled-components";
import Heading from "./Heading";
import Button from "./Button";

const Section = styled.section`
  grid-column: 1 / -1;

  text-align: center;
`;

const Container = styled.div`
  display: flex;
  gap: 1.8rem;
  align-items: center;
  justify-content: center;
  padding: 3.2rem 1.2rem 9.2rem 1.2rem;

  background-color: var(--color-brand-100);
  border-top: 1px solid var(--color-brand-200);

  margin-top: 2.4rem;
`;

const Card = styled.div`
  width: 22rem;
  height: 28rem;

  display: flex;
  flex-direction: column;

  background-color: var(--color-grey-50);
  border: 1px solid var(--color-brand-200);
`;

const Image = styled.div``;

export default function Giveaways() {
  return (
    <Section>
      <Heading variation="secondary">Monthly Giveaways</Heading>
      <Container>
        <Card>
          <Image></Image>
          <Button>Enter</Button>
        </Card>
        <Card>
          <Image></Image>
          <Button>Enter</Button>
        </Card>
        <Card>
          <Image></Image>
          <Button>Enter</Button>
        </Card>
      </Container>
    </Section>
  );
}
