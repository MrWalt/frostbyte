import styled from "styled-components";

import SummaryItem from "./SummaryItem";
import { useCart } from "./CartContext";
import { HiArrowLongLeft } from "react-icons/hi2";
import { useMoveBack } from "../../hooks/useMoveBack";
import Button from "../../ui/Button";

const Container = styled.div`
  align-self: start;

  flex-basis: 65%;
`;

const ContinueShoppingButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  padding: 0.4rem 2.4rem;
  margin-top: 2rem;
  justify-self: start;

  & svg {
    font-size: 2rem;
  }
`;

export default function SummaryList() {
  const { cart } = useCart();
  const moveBack = useMoveBack();
  return (
    <Container>
      {cart.map((item) => (
        <SummaryItem
          title={item.title}
          price={item.price}
          discount={item.discount}
          discountedPrice={item.discountedPrice}
          quantity={item.quantity}
          id={item.id}
          key={item.id}
          image={item.image}
        />
      ))}
      <ContinueShoppingButton variation="medium" onClick={moveBack}>
        <HiArrowLongLeft />
        Continue Shopping
      </ContinueShoppingButton>
    </Container>
  );
}
