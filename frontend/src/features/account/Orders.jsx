import styled from "styled-components";
import Heading from "../../ui/Heading";
import OrderItem from "../orders/OrderItem";
import useOrders from "../orders/useOrders";
import Loader from "../../ui/Loader";
import Pagination from "../../ui/Pagination";
import { ORDERS_PAGE_SIZE } from "../../utils/constants";

const Box = styled.div`
  width: 100%;
  padding: 4.8rem;
  padding-bottom: 2.4rem;

  display: flex;
  flex-direction: column;

  gap: 1rem;
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 2.4rem;
`;

const PaginationBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: auto;
`;

const NoOrders = styled.span`
  font-size: 1.6rem;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  color: var(--color-grey-300);

  padding-bottom: 0.6rem;
  padding-top: 2.4rem;

  align-self: center;

  border-bottom: 1px solid var(--color-grey-700);
`;

export default function Orders() {
  const { orders, isLoading, count } = useOrders();

  return (
    <Box>
      <StyledHeading $variation="secondary">Your orders</StyledHeading>
      {!isLoading ? (
        orders.length ? (
          orders.map((order) => (
            <OrderItem
              dateOrdered={order.dateOrdered}
              orderId={order.id}
              items={order.items}
              orderStatus={order.status}
              totalPrice={order.totalPrice}
              key={order.id}
            />
          ))
        ) : (
          <NoOrders>You havent made any orders</NoOrders>
        )
      ) : (
        <Loader />
      )}

      {count > ORDERS_PAGE_SIZE ? (
        <PaginationBox>
          <Pagination count={count} pageSize={ORDERS_PAGE_SIZE} />
        </PaginationBox>
      ) : null}
    </Box>
  );
}
