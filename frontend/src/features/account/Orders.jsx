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

const StyledHeading = styled(Heading)`
  margin-bottom: 2.4rem;
  margin-left: 1.6rem;
`;

export default function Orders() {
  const { user } = useUser();
  const { orders } = user;

  return (
    <Box>
      <StyledHeading variation="secondary">Your Orders</StyledHeading>
      {orders.map((order) => (
        <Order
          dateOrdered={order.dateOrdered}
          orderId={order.id}
          orderedItems={order.orderedItems}
          orderStatus={order.status}
          key={order.id}
        />
      ))}
    </Box>
  );
}
