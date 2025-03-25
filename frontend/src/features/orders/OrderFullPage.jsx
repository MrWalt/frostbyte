import styled from "styled-components";
import Progress from "../../ui/Progress";
import useOrder from "./useOrder";
import Loader from "../../ui/Loader";
import Price from "../../ui/Price";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import { useEffect, useState } from "react";
import useRefundOrder from "./useRefundOrder";
import { useUser } from "../authentication/UserContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const OrderId = styled.p`
  font-weight: 300;
  font-size: 1.4rem;
  color: var(--color-grey-400);

  margin-bottom: 2.4rem;
`;

const Box = styled.div`
  border: 1px solid var(--color-grey-800);
  background-color: var(--color-grey-900);
  padding: 2.4rem 3.6rem;
`;

const DateOrdered = styled.p`
  font-size: 1.4rem;
  color: var(--color-grey-400);
  font-weight: 300;
`;

const StyledParagraph = styled.p`
  font-size: 1.6rem;
  font-weight: 300;
  /* margin-bottom: 0.8rem; */

  span {
    font-weight: 400;
  }
`;

const PriceBox = styled.div`
  * {
    margin-top: 4.8rem;
    font-size: 2rem;
  }
`;

const ProductImagesBox = styled.div`
  display: flex;
  /* height: 18rem; */
  gap: 0.8rem;
  margin-bottom: 3.2rem;
  margin-top: 4.8rem;
  flex-wrap: wrap;
`;

const ProductImage = styled.img`
  width: 16rem;
  height: 16rem;
  padding: 0.8rem;

  border: 1px solid var(--color-grey-800);
`;

const ProductBox = styled.div`
  padding-left: 2.4rem;
`;

const StyledLink = styled(Link)`
  transition: var(--animation-fast);

  &:hover {
    color: var(--color-brand-300);
  }
`;

const ProductParagraph = styled.p`
  font-size: 1.8rem;
  font-weight: 300;
`;

const ProductInfo = styled.p`
  margin-left: 2.4rem;
  font-size: 1.4rem;
  color: var(--color-grey-400);

  & * {
    font-size: 1.4rem;
    font-weight: 300;
    color: var(--color-grey-400);
  }
`;

const Quantity = styled.span`
  font-size: 1.4rem;
  color: var(--color-grey-400);
  font-weight: 300;
  margin-left: 0.4rem;
`;

const SupportText = styled.p`
  font-size: 1.4rem;
  font-weight: 300;
  color: var(--color-grey-300);
  margin-top: 5rem;

  a:visited,
  a:link {
    color: var(--color-brand-500);
    transition: var(--animation-fast);

    &:hover {
      color: var(--color-brand-300);
    }
  }
`;

const StyledDiv = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 1.8rem;
  }
`;
const StyledSpan = styled.span`
  font-size: 1.4rem;
  font-weight: 300;
  color: var(--color-grey-400);
`;

const RefundBox = styled.div`
  border: 1px solid var(--color-grey-800);
  /* padding: 1.2rem 2.4rem; */
  padding-left: 2.4rem;
  font-size: 1.6rem;
  font-weight: 300;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledButton = styled(Button)`
  border: none;
  border-left: 1px solid var(--color-grey-800);
  padding: 1.2rem 2.4rem;

  &:disabled {
    cursor: not-allowed;
    color: var(--color-grey-400);
  }
`;

const CheckBox = styled.div`
  width: 1.8rem;
  height: 1.8rem;

  border: 2px solid var(--color-brand-800);
  cursor: pointer;
`;

const CheckBoxChecked = styled.div`
  width: 1.8rem;
  height: 1.8rem;

  background-color: var(--color-brand-500);
  border: 2px solid var(--color-brand-800);
`;

const InputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1.2rem;

  label {
    cursor: pointer;
  }
`;

const RefundBanner = styled.div`
  background-color: var(--color-brand-800);
  border: 1px solid var(--color-brand-500);
  padding: 2.4rem;

  font-weight: 300;
  color: var(--color-brand-100);

  p:first-of-type {
    text-transform: uppercase;
    font-size: 1.8rem;
    margin-bottom: 0.4rem;
  }

  p {
    font-size: 1.4rem;
  }
`;

export default function OrderFullPage({ orderId }) {
  const { user } = useUser();
  const { order, isLoading } = useOrder();
  const [isRefunded, setIsRefunded] = useState(order?.isRefunded || false);
  const { refundOrder, isPending } = useRefundOrder();

  useEffect(
    function () {
      setIsRefunded(order?.isRefunded || false);
    },
    [order]
  );

  if (isLoading) return <Loader size={60} />;

  function handleRefund() {
    refundOrder(order.id);
  }

  return (
    <Container>
      {order.isRefunded ? (
        <RefundBanner>
          <p>This order was refunded</p>
          <p>
            Please allow up to 7 business days for the balance to be refunded
          </p>
        </RefundBanner>
      ) : (
        <Progress status={order.status} dateOrdered={order.dateOrdered} />
      )}

      <Box>
        <OrderId>Order ID {orderId}</OrderId>
        <DateOrdered>
          Ordered on <span>{format(order.dateOrdered, "do MMMM, yyyy")}</span>
        </DateOrdered>
        <StyledParagraph>
          Shipping to <span>{order.shipTo}</span>
        </StyledParagraph>
        <StyledParagraph>
          For <span>{order.name}</span>
        </StyledParagraph>

        <ProductImagesBox>
          {order.items.map((item) => (
            <Link to={`/product/${item.item.id}`} key={item.item.image}>
              <ProductImage loading="lazy" src={`/img/${item.item.image}`} />
            </Link>
          ))}
        </ProductImagesBox>

        <ProductBox>
          {order.items.map((item) => (
            <StyledDiv key={item.item.id}>
              <ProductParagraph>
                <StyledLink to={`/product/${item.item.id}`}>
                  {item.item.title}
                </StyledLink>
                {item.quantity > 1 && <Quantity>x{item.quantity}</Quantity>}
              </ProductParagraph>
              <ProductInfo>
                {item.item.warranty} warranty &mdash;{" "}
                <Price
                  size="normal"
                  price={
                    item.item.discount
                      ? item.item.discountedPrice
                      : item.item.price
                  }
                />
              </ProductInfo>
            </StyledDiv>
          ))}
        </ProductBox>
        <PriceBox>
          <Price price={order.totalPrice} size="normal" />
          <StyledSpan> paid with card ending in 4242</StyledSpan>
        </PriceBox>
        <div>
          <SupportText>
            Having issues? Contact our support team{" "}
            <Link to="/contact">here</Link>
          </SupportText>
        </div>
      </Box>
      {!order.isRefunded && user.role === "admin" && (
        <RefundBox>
          <InputBox>
            {!isRefunded ? (
              <CheckBox type="checkbox" onClick={() => setIsRefunded(true)} />
            ) : (
              <CheckBoxChecked type="checkbox" />
            )}
            <label htmlFor="refund" onClick={() => setIsRefunded(true)}>
              This order was refunded
            </label>
          </InputBox>
          <StyledButton
            $variation="medium"
            onClick={handleRefund}
            disabled={!isRefunded || isPending}
          >
            Save
          </StyledButton>
        </RefundBox>
      )}
    </Container>
  );
}
