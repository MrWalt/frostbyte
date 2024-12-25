import styled, { css } from "styled-components";
import Price from "../../ui/Price";
import { Link } from "react-router-dom";
import { format } from "date-fns";

const StyledLink = styled(Link)`
  width: 100%;

  display: flex;
  flex-direction: column;

  padding: 1.6rem 1.8rem;

  border: 1px solid var(--color-grey-800);

  cursor: pointer;

  transition: var(--animation-fast);

  position: relative;

  &:hover {
    background-color: var(--color-grey-800);
  }
`;

const OrderSpan = styled.span`
  font-size: 2rem;
  margin-bottom: 1.6rem;
`;

const OrderID = styled.span`
  font-size: 2rem;
  color: var(--color-brand-500);
`;

const OrderItems = styled.p`
  width: 80%;
  padding-left: 1.2rem;
`;

const OrderStatus = styled.span`
  padding: 0.4rem 1.6rem;
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

    ${(props) =>
    props.status === "Pending" &&
    css`
      border: 1px solid var(--color-brand-900);
    `}
`;

const Item = styled.p`
  font-size: 1.6rem;

  &:not(:last-child) {
    margin-bottom: 0.4rem;
  }
`;

const Quanitity = styled.span`
  color: var(--color-grey-400);
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
  orderedItems,
  totalPrice,
  orderStatus,
  dateOrdered,
}) {
  return (
    <StyledLink to={`/order/${orderId}`}>
      <OrderSpan>
        Order &mdash; <OrderID>{orderId}</OrderID>
      </OrderSpan>

      <OrderStatus status={orderStatus}>{orderStatus}</OrderStatus>

      <OrderItems>
        {orderedItems.map((item) => (
          <Item>
            &mdash; {item.item.title}{" "}
            {item.quantity > 1 ? <Quanitity>x{item.quantity}</Quanitity> : null}
          </Item>
        ))}
      </OrderItems>

      {/* <Price price={totalPrice} size="medium" /> */}

      <Date>{format(dateOrdered, "dd/MM/yyyy")}</Date>
    </StyledLink>
  );
}
