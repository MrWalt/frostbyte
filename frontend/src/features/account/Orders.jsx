import styled from "styled-components";
import Heading from "../../ui/Heading";
import Order from "../orders/Order";
import useOrders from "../orders/useOrders";
import Loader from "../../ui/Loader";

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
  const { orders, isLoading } = useOrders();

  return (
    <Box>
      <StyledHeading variation="secondary">Your orders</StyledHeading>
      {isLoading ? (
        <Loader />
      ) : (
        orders.map((order) => (
          <Order
            dateOrdered={order.dateOrdered}
            orderId={order.id}
            orderedItems={order.orderedItems}
            orderStatus={order.status}
            key={order.id}
          />
        ))
      )}
    </Box>
  );
}
