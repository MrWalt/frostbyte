import styled from "styled-components";
import Heading from "../../ui/Heading";
import { HiXMark } from "react-icons/hi2";
import { useModal } from "../../contexts/ModalContext";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import { useForm } from "react-hook-form";
import Error from "../../ui/Error";
import { useEffect } from "react";

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

  margin-bottom: 1.9rem;
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
  gap: 1.2rem;

  width: 50%;

  position: relative;

  & .desc-error {
    top: 216px;
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
    transform: translateY(-21rem);
  }

  & + label {
    transform: translateY(-23.4rem);
  }

  &:disabled {
    background-color: var(--color-grey-200);
    border-bottom: 3px solid var(--color-grey-400);
    cursor: not-allowed;
  }
`;

const DoubleInputBox = styled.div`
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
    padding: 1.2rem 2.4rem;

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

export default function ProductForm({
  children,
  isPending,
  handleOnSubmit,
  defaultValues = {},
  headingText,
}) {
  const { closeModal, toggledModal } = useModal();
  const { register, formState, handleSubmit, reset } = useForm({
    defaultValues: {
      ...defaultValues,
      priceEUR: defaultValues?.price?.EUR,
      priceUSD: defaultValues?.price?.USD,
      specifications: defaultValues?.specifications?.join(","),
    },
  });

  useEffect(
    function () {
      reset({
        ...defaultValues,
        priceEUR: defaultValues?.price?.EUR,
        priceUSD: defaultValues?.price?.USD,
        specifications: defaultValues?.specifications?.join(","),
      });
    },
    // eslint-disable-next-line
    [toggledModal]
  );

  const { errors } = formState;
  // This sure is messy, good luck

  return (
    <>
      <HeadingBox>
        <Heading variation="tertiary">{headingText}</Heading>
        <StyledButton onClick={closeModal}>
          <HiXMark />
        </StyledButton>
      </HeadingBox>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
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

            <DoubleInputBox>
              <StyledDiv>
                {errors?.priceEUR ? (
                  <StyledError>{errors.priceEUR.message}</StyledError>
                ) : null}
                <Input
                  disabled={isPending}
                  placeholder="Price in EUR"
                  type="text"
                  variation="large"
                  {...register("priceEUR", {
                    required: "This field is required",
                  })}
                />
                <Label>Price in EUR</Label>
              </StyledDiv>

              <StyledDiv>
                {errors?.priceUSD ? (
                  <StyledError>{errors.priceUSD.message}</StyledError>
                ) : null}
                <Input
                  disabled={isPending}
                  placeholder="Price in USD"
                  type="text"
                  variation="large"
                  {...register("priceUSD", {
                    required: "This field is required",
                  })}
                />
                <Label>Price in USD</Label>
              </StyledDiv>
            </DoubleInputBox>

            <DoubleInputBox>
              <StyledDiv>
                {errors?.stock ? (
                  <StyledError>{errors.stock.message}</StyledError>
                ) : null}
                <Input
                  disabled={isPending}
                  placeholder="Stock"
                  type="text"
                  variation="large"
                  {...register("stock", {
                    required: "This field is required",
                  })}
                />
                <Label>Stock</Label>
              </StyledDiv>

              <StyledDiv>
                {errors?.discount ? (
                  <StyledError>{errors.discount.message}</StyledError>
                ) : null}
                <Input
                  disabled={isPending}
                  placeholder="Discount"
                  type="text"
                  variation="large"
                  {...register("discount", {
                    required: "This field is required",
                  })}
                />
                <Label>Discount</Label>
              </StyledDiv>
            </DoubleInputBox>
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

            <ImageInput type="file" accept="image/*" />
          </TextAreaBox>
        </Box>
        {children}
      </form>
    </>
  );
}
