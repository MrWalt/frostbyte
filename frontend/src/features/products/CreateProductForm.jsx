import styled from "styled-components";
import Heading from "../../ui/Heading";
import { HiXMark } from "react-icons/hi2";
import { useModal } from "../../contexts/ModalContext";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import Error from "../../ui/Error";
import useCreateProduct from "./useCreateProduct";
import Loader from "../../ui/Loader";

const HeadingBox = styled.div`
  border: 1px solid var(--color-grey-800);

  padding: 2.4rem;

  display: flex;
  justify-content: space-between;

  position: relative;
`;

const StyledButton = styled.button`
  position: absolute;
  right: 2.4rem;
  top: 50%;
  transform: translateY(-50%);

  color: var(--color-grey-0);

  cursor: pointer;
  font-size: 2.4rem;

  transition: var(--animation-fast);

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: translateY(-50%) scale(1.1);
  }
`;

const StyledDiv = styled.div`
  position: relative;
`;

const Box = styled.div`
  display: flex;
  gap: 4.8rem;
  padding: 4.8rem 2.4rem 2.4rem 2.4rem;
`;

const ProductInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.8rem;

  width: 50%;
`;

const TextAreaBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 1.2rem;

  width: 50%;

  position: relative;

  & .desc-error {
    top: 146px;
  }
`;

const StyledTextArea = styled.textarea`
  border-radius: 0;
  outline: none;
  border: none;
  height: 50%;

  position: relative;

  padding: 1.2rem 1.8rem;

  font-size: 1.6rem;
  font-family: inherit;

  border-bottom: 3px solid var(--color-grey-0);

  transition: var(--animation-fast);

  resize: none;

  &:focus {
    border-bottom: 3px solid var(--color-brand-500);
  }

  &:placeholder-shown + label {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-16rem);
  }

  & + label {
    transform: translateY(-17.6rem);
  }

  &:disabled {
    background-color: var(--color-grey-200);
    border-bottom: 3px solid var(--color-grey-400);
    cursor: not-allowed;
  }
`;

const StockPriceBox = styled.div`
  display: flex;
  gap: 4.8rem;
`;

const ImageInput = styled.input`
  &::file-selector-button {
    border-radius: 0;
    border: none;
    outline: none;

    font-family: inherit;
    font-weight: 400;

    text-transform: uppercase;
    padding: 1.2rem 1.8rem;

    transition: var(--animation-fast);

    cursor: pointer;

    &:hover {
      background-color: var(--color-grey-400);
    }
  }
`;

const StyledError = styled(Error)`
  top: -2.4rem;
`;

export default function CreateProductForm() {
  const { createProduct, isPending } = useCreateProduct();
  const { closeModal } = useModal();
  const { register, formState, handleSubmit } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    const price = data.price.split(",");
    const specifications = data.specifications.split(",");
    const structuredData = {
      title: data.title,
      manufacturer: data.manufacturer,
      description: data.description,
      specifications,
      stock: Number(data.stock),
      category: data.category,
      warranty: data.warranty,
      price: {
        EUR: Number(price.at(0)),
        USD: Number(price.at(1)),
      },
    };

    createProduct(structuredData);
  }

  // This sure is messy, good luck

  return (
    <>
      <HeadingBox>
        <Heading variation="tertiary">Add a new product</Heading>
        <StyledButton onClick={closeModal}>
          <HiXMark />
        </StyledButton>
      </HeadingBox>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <ProductInfoBox>
            <StyledDiv>
              {errors?.title ? (
                <StyledError>{errors.title.message}</StyledError>
              ) : null}
              <Input
                disabled={isPending}
                placeholder="Title"
                type="text"
                variation="large"
                {...register("title", {
                  required: "This field is required",
                })}
              />
              <Label>Title</Label>
            </StyledDiv>
            <StyledDiv>
              {errors?.manufacturer ? (
                <StyledError>{errors.manufacturer.message}</StyledError>
              ) : null}
              <Input
                disabled={isPending}
                placeholder="Manufacturer"
                type="text"
                variation="large"
                {...register("manufacturer", {
                  required: "This field is required",
                })}
              />
              <Label>Manufacturer</Label>
            </StyledDiv>
            <StyledDiv>
              {errors?.category ? (
                <StyledError>{errors.category.message}</StyledError>
              ) : null}
              <Input
                disabled={isPending}
                placeholder="Category - graphics-cards"
                type="text"
                variation="large"
                {...register("category", {
                  required: "This field is required",
                })}
              />
              <Label>Category</Label>
            </StyledDiv>
            <StyledDiv>
              {errors?.warranty ? (
                <StyledError>{errors.warranty.message}</StyledError>
              ) : null}
              <Input
                disabled={isPending}
                placeholder="Warranty - 2 years"
                type="text"
                variation="large"
                {...register("warranty", {
                  required: "This field is required",
                })}
              />
              <Label>Warranty</Label>
            </StyledDiv>

            <ImageInput type="file" accept="image/*" />
          </ProductInfoBox>

          <TextAreaBox>
            {errors?.specifications ? (
              <StyledError>{errors.specifications.message}</StyledError>
            ) : null}
            <StyledTextArea
              disabled={isPending}
              type="text"
              placeholder="Specifications - Specification, Specification"
              {...register("specifications", {
                required: "This field is required",
              })}
            />
            <Label>Specifications</Label>

            {errors?.description ? (
              <StyledError className="desc-error">
                {errors.description.message}
              </StyledError>
            ) : null}
            <StyledTextArea
              disabled={isPending}
              type="text"
              placeholder="Description"
              {...register("description", {
                required: "This field is required",
              })}
            />
            <Label>Description</Label>

            <StockPriceBox>
              <StyledDiv>
                {errors?.price ? (
                  <StyledError>{errors.price.message}</StyledError>
                ) : null}
                <Input
                  disabled={isPending}
                  placeholder="Price - EUR,USD"
                  type="text"
                  variation="large"
                  {...register("price", {
                    required: "This field is required",
                  })}
                />
                <Label>Price</Label>
              </StyledDiv>
              <StyledDiv>
                {errors?.stock ? (
                  <StyledError>{errors.stock.message}</StyledError>
                ) : null}
                <Input
                  disabled={isPending}
                  placeholder="Stock"
                  type="number"
                  variation="large"
                  {...register("stock", {
                    required: "This field is required",
                  })}
                />
                <Label>Stock</Label>
              </StyledDiv>
            </StockPriceBox>
          </TextAreaBox>
        </Box>
        <Button disabled={isPending}>
          {isPending ? <Loader size={44} /> : "Add Product"}
        </Button>
      </form>
    </>
  );
}
