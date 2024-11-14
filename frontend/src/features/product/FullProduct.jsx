import styled from "styled-components";
import useProduct from "./useProduct";
import Loader from "../../ui/Loader";
import { HiArrowLongLeft } from "react-icons/hi2";
import { useMoveBack } from "../../hooks/useMoveBack";
import Specifications from "./Specifications";
import Details from "./Details";
import Button from "../../ui/Button";

const Container = styled.div`
  max-width: 112rem;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 3.6rem 60rem;

  gap: 3.6rem;
  row-gap: 1.2rem;

  font-size: 1.6rem;
  color: var(--color-grey-0);
`;

const ImageBox = styled.div`
  grid-column: 1 / 3;

  border: 1px solid var(--color-grey-800);
`;

const BackButtonBox = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 0.4rem;

  padding: 0.4rem 1.6rem;

  justify-self: start;

  border: 1px solid var(--color-grey-800);
  background-color: var(--color-grey-transparent);
  backdrop-filter: blur(4px);

  cursor: pointer;

  &:hover {
    color: var(--color-brand-500);

    button {
      color: var(--color-brand-500);
    }
  }

  svg {
    transition: var(--animation-fast);

    font-size: 2rem;
  }
`;

export default function FullProduct() {
  const { product, isLoading } = useProduct();
  const moveBack = useMoveBack();

  if (isLoading) return <Loader size={60} />;

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
  } = product;

  return (
    <Container>
      <BackButtonBox onClick={moveBack}>
        <HiArrowLongLeft />
        <Button variation="medium">Back</Button>
      </BackButtonBox>
      <ImageBox>IMAGE</ImageBox>

      <Details
        title={title}
        price={price.USD}
        discount={discount}
        stock={stock}
        id={id}
        description={description}
        discountedPrice={discountedPrice?.USD}
      />
      <Specifications specs={specifications} warranty={warranty} />
    </Container>
  );
}
