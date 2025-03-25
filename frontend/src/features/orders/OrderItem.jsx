import styled, { css } from "styled-components";
import Price from "../../ui/Price";
import { Link } from "react-router-dom";
import { format, isToday, isYesterday } from "date-fns";

const StyledLink = styled(Link)`
  width: 100%;

  display: flex;
  flex-direction: column;

  padding: 1.8rem 2.4rem;

  border: 1px solid var(--color-grey-800);

  cursor: pointer;

  transition: var(--animation-fast);
  height: 14rem;
  position: relative;

  &:last-of-type {
    margin-bottom: 1.8rem;
  }

  &:hover {
    background-color: var(--color-grey-800);
  }
`;

const OrderItems = styled.div`
  width: 80%;
  padding-left: 1.2rem;
  margin-top: 1.2rem;
`;

const OrderStatus = styled.span`
  padding: 0.4rem 1.6rem;
  margin-left: 1.2rem;
  display: inline-block;

  font-size: 1.4rem;

  position: absolute;
  bottom: 1.2rem;
  right: 1.2rem;

  border: 1px solid var(--color-brand-900);

  ${(props) =>
    props.$status === "Delivered" &&
    css`
      background-color: var(--color-brand-900);
    `}

  ${(props) =>
    props.$status === "Refunded" &&
    css`
      color: var(--color-grey-400);
      border: 1px solid var(--color-grey-700);
    `}
`;

const Item = styled.p`
  font-size: 1.6rem;
  font-weight: 300;

  &:not(:last-child) {
    margin-bottom: 0.4rem;
  }
`;

const OrderInfo = styled.span`
  color: var(--color-grey-400);
  font-size: 1.4rem;

  display: flex;
  gap: 0.8rem;
`;

const ItemsLeft = styled.span`
  color: var(--color-grey-400);

  margin-left: 1.2rem;
  margin-top: 0.4rem;
  font-size: 1.2rem;
`;

const Date = styled.span`
  font-size: 1.2rem;
  color: var(--color-grey-500);

  font-style: italic;

  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
`;

const Quantity = styled.span`
  font-size: 1.4rem;
  color: var(--color-grey-500);
`;

export default function OrderItem({
  orderId,
  items,
  totalPrice,
  orderStatus,
  dateOrdered,
}) {
  const totalItems = items.reduce((acc, cur) => (acc += cur.quantity), 0);

  return (
    <StyledLink to={`/order/${orderId}`}>
      <OrderStatus $status={orderStatus}>{orderStatus}</OrderStatus>

      <OrderInfo>
        <Price price={totalPrice} size="minimal" /> &mdash;{" "}
        <span>
          {totalItems} {`${totalItems === 1 ? "item" : "items"}`}
        </span>
      </OrderInfo>

      <OrderItems>
        {items.map((item, i) => {
          if (i < 2)
            return (
              <Item key={item.item._id}>
                {item.item.title}
                {item.quantity > 1 ? (
                  <Quantity> x{item.quantity}</Quantity>
                ) : null}
              </Item>
            );

          return "";
        })}
      </OrderItems>
      {items.length > 2 ? (
        <ItemsLeft>
          And {items.length - 2} more{" "}
          {`${items.length - 2 === 1 ? "item" : "items"}`}
        </ItemsLeft>
      ) : null}

      {isToday(dateOrdered) ? <Date>Today</Date> : null}
      {isYesterday(dateOrdered) ? <Date>Yesterday</Date> : null}
      {!isToday(dateOrdered) && !isYesterday(dateOrdered) ? (
        <Date>{format(dateOrdered, "do MMMM, yyyy")}</Date>
      ) : null}
    </StyledLink>
  );
}
