import styled from "styled-components";
import useProduct from "./useProduct";
import Loader from "../../ui/Loader";
import { HiArrowLongLeft } from "react-icons/hi2";
import { useMoveBack } from "../../hooks/useMoveBack";
import Specifications from "./Specifications";
import Button from "../../ui/Button";
import Heading from "../../ui/Heading";
import Price from "../../ui/Price";
import { useCart } from "../cart/CartContext";
import { useModal } from "../../contexts/ModalContext";
import { useUser } from "../authentication/UserContext";

const Background = styled.div`
  width: 100%;
  height: 100%;

  padding-top: 4.8rem;
  padding-bottom: 6.4rem;

  background-color: var(--color-grey-transparent);
  backdrop-filter: blur(2px);
`;

const Container = styled.div`
  max-width: 110rem;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 3.6rem 9.6rem 60rem auto;

  gap: 3.6rem;
  row-gap: 1.2rem;

  font-size: 1.6rem;
  color: var(--color-grey-0);
`;

const ImageBox = styled.div`
  grid-column: 1 / 3;
  grid-row: 3 / 4;
  width: 95%;
  height: 100%;

  border: 1px solid var(--color-grey-800);

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--color-grey-900);
`;

const Image = styled.img`
  max-width: 100%;
  height: 100%;
`;

const ProductTitle = styled(Heading)`
  grid-row: 2 / 3;
  grid-column: 1 / -1;

  align-self: center;
  padding: 1.8rem 0 1.8rem 0;
  padding-left: 2.4rem;

  border-left: 3px solid var(--color-brand-600);
  border-bottom: 1px solid var(--color-grey-800);
`;

const CartBox = styled.div`
  width: 100%;

  grid-row: 3 / 4;
  grid-column: 3 / 4;
  align-self: end;

  display: flex;
  flex-direction: column;
`;

const PriceBox = styled.div`
  padding-bottom: 2.4rem;

  display: flex;
  align-items: end;
  gap: 1.8rem;
`;

const OldPrice = styled.span`
  display: inline-block;
  margin-bottom: 4px;
`;

const SoldOut = styled.p`
  text-align: center;
  padding: 1.2rem;
  border-top: 1px solid var(--color-grey-800);
  font-size: 2rem;
`;

const Stock = styled.span`
  display: inline-block;
  font-size: 1.4rem;
  color: var(--color-grey-400);

  border-bottom: 1px solid var(--color-grey-500);
  margin-bottom: 0.8px;
  margin-left: auto;
`;

const FlexButton = styled(Button)`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 0.4rem;

  justify-self: start;

  & svg {
    font-size: 2rem;
  }
`;

const AboutBox = styled.div`
  width: 100%;
  padding: 2.4rem;

  grid-row: 4 / 5;
  grid-column: 1 / -1;
`;

const AboutText = styled.p`
  font-size: 1.6rem;

  margin-left: 1.2rem;
  margin-top: 1.8rem;
`;

const RemoveFromCartButton = styled(Button)`
  background-color: transparent;
  border: 1px solid var(--color-brand-500);
`;

const LoaderContainer = styled.div`
  width: 100%;
  margin-top: 9.2rem;
`;

const StyledButton = styled(Button)`
  background-color: transparent;

  align-self: end;
  border: 1px solid var(--color-brand-500);
  margin-top: 1.2rem;
`;

const DeleteButton = styled(Button)`
  background-color: transparent;

  align-self: end;
  border: 1px solid var(--color-red-500);
  margin-top: 1.2rem;

  &:hover {
    background-color: var(--color-red-800);
  }
`;

export default function FullProduct() {
  const { user } = useUser();
  const { product, isLoading } = useProduct();
  const { handleSetToggledModal } = useModal();
  const moveBack = useMoveBack();
  const { isInCart, addItem, removeItem } = useCart();

  if (isLoading)
    return (
      <LoaderContainer>
        <Loader size={80} />
      </LoaderContainer>
    );

  const {
    title,
    price,
    specifications,
    stock,
    warranty,
    id,
    discount,
    description,
    discountedPrice,
    image,
  } = product;

  return (
    <Background>
      <Container>
        <FlexButton $variation="medium" onClick={moveBack}>
          <HiArrowLongLeft />
          Back
        </FlexButton>
        <ImageBox>
          <Image src={`/img/${image}`} />
        </ImageBox>

        <ProductTitle $variation="secondary">{title}</ProductTitle>

        <CartBox>
          <PriceBox>
            <Price size="largex2" price={discount ? discountedPrice : price} />
            {discount !== 0 && (
              <OldPrice>
                <Price size="tiny" price={price} />
              </OldPrice>
            )}
            {stock < 4 && stock !== 0 && <Stock>Only {stock} left</Stock>}
          </PriceBox>

          {stock ? (
            isInCart(id) ? (
              <RemoveFromCartButton onClick={() => removeItem(id)}>
                Remove from cart
              </RemoveFromCartButton>
            ) : (
              <Button
                onClick={() =>
                  addItem({
                    id,
                    title,
                    price,
                    quantity: 1,
                    discount,
                    discountedPrice,
                    image,
                  })
                }
              >
                Add to cart
              </Button>
            )
          ) : (
            <SoldOut>Sold Out</SoldOut>
          )}
          {user.role === "admin" && (
            <StyledButton onClick={() => handleSetToggledModal("editProduct")}>
              Edit Product
            </StyledButton>
          )}
          {user.role === "admin" && (
            <DeleteButton
              onClick={() => handleSetToggledModal("deleteProduct")}
            >
              Delete Product
            </DeleteButton>
          )}
        </CartBox>
        <AboutBox>
          <Heading $variation="secondary">About this product</Heading>
          <AboutText>{description}</AboutText>
        </AboutBox>
        <Specifications specs={specifications} warranty={warranty} />
      </Container>
    </Background>
  );
}
