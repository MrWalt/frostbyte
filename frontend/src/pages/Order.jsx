import { useParams } from "react-router-dom";
import Section from "../ui/Section";
import styled from "styled-components";
import Background from "../ui/Background";

import OrderFullPage from "../features/orders/OrderFullPage";

const Container = styled.div`
  max-width: 108rem;
  margin: 0 auto;

  color: var(--color-grey-0);
`;

export default function Order() {
  const { orderId } = useParams();

  return (
    <Section>
      <Background>
        <Container>
          <OrderFullPage orderId={orderId} />
        </Container>
      </Background>
    </Section>
  );
}
