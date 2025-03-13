import { useParams } from "react-router-dom";
import Section from "../ui/Section";
import styled from "styled-components";
import Heading from "../ui/Heading";

const Container = styled.div`
  width: 90rem;
  margin: 0 auto;
`;

export default function Order() {
  const { orderId } = useParams();

  return (
    <Section>
      <Container>
        <Heading $variation="secondary">Order {orderId}</Heading>
      </Container>
    </Section>
  );
}
