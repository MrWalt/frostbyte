import styled, { css } from "styled-components";
import Price from "../../ui/Price";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  width: 100%;
  height: 12rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 1.2rem 1.6rem;

  border: 1px solid var(--color-grey-800);

  cursor: pointer;

  transition: var(--animation-fast);

  position: relative;

  &:hover {
    background-color: var(--color-grey-800);
  }

  &:first-of-type {
    margin-top: 1.6rem;
  }
`;

const OrderID = styled.span`
  font-size: 1.6rem;
  color: var(--color-brand-500);
`;

const OrderItems = styled.p`
  margin-top: 0.4rem;
`;

const OrderStatus = styled.span`
  padding: 0.2rem 1.2rem;
  margin-left: 1.2rem;
  display: inline-block;

  position: absolute;
  bottom: 1.2rem;
  right: 1.2rem;

  ${(props) =>
    props.status === "Shipped" &&
    css`
      border: 1px solid var(--color-brand-900);
    `}

  ${(props) =>
    props.status === "Delivered" &&
    css`
      background-color: var(--color-brand-900);
    `}
`;

const Date = styled.span`
  font-size: 1.4rem;
  color: var(--color-grey-500);

  font-style: italic;

  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
`;

export default function Order({
  orderId,
  orderItems,
  totalPrice,
  orderStatus,
  date,
}) {
  return (
    <StyledLink to={`/order/${orderId}`}>
      <div>
        <div>
          <span>Order ID: </span>
          <OrderID>{orderId}</OrderID>
          <OrderStatus status={orderStatus}>{orderStatus}</OrderStatus>
        </div>
        <OrderItems>{orderItems.join(", ")}</OrderItems>
      </div>

      <Price price={totalPrice} size="medium" />

      <Date>{date}</Date>
    </StyledLink>
  );
}
