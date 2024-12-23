import styled from "styled-components";
import Heading from "../../ui/Heading";
import Order from "../orders/Order";
import { useUser } from "../authentication/UserContext";

const Box = styled.div`
  width: 100%;
  padding: 4.8rem;

  display: flex;
  flex-direction: column;

  gap: 0.8rem;
`;

export default function Orders() {
  const { user } = useUser();
  const { orders } = user;
  return (
    <Box>
      <Heading variation="secondary">Your Orders</Heading>
      {orders.map((order) => (
        <Order
          orderId={order.id}
          orderItems={order.items}
          totalPrice={order.totalPrice}
          orderStatus={order.orderStatus}
          date={order.date}
          key={order.id}
        />
      ))}
    </Box>
  );
}
