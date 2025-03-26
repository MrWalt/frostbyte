import styled from "styled-components";
import Heading from "../../ui/Heading";
import { HiXMark } from "react-icons/hi2";
import { useModal } from "../../contexts/ModalContext";
import Input from "../../ui/Input";
import { useForm } from "react-hook-form";
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

const Box = styled.div`
  display: flex;
  gap: 4.8rem;
  padding: 2.5rem 2.4rem 2.4rem 2.4rem;
  margin-bottom: 1.8rem;

  font-size: 1.4rem;
`;

const DualInput = styled.div`
  display: flex;
  gap: 1.8rem;
`;

const StyledLabel = styled.label`
  display: inline-block;
  margin-left: 1rem;
  margin-bottom: 0.6rem;
  font-size: 1.6rem;
  color: var(--color-grey-300);
`;

const StyledDiv = styled.div`
  flex: 1 1 100%;
  display: flex;
  flex-direction: column;
`;

const StyledTextArea = styled.textarea`
  height: 50%;
  resize: none;
  border: 1px solid var(--color-grey-800);
  background-color: transparent;
  margin-bottom: 1.6rem;
  padding: 0.8rem 1rem;
  color: var(--color-grey-0);
  font-family: inherit;

  transition: var(--animation-fast);

  &:focus {
    border: 1px solid var(--color-brand-600);
    outline: none;
  }

  &::placeholder {
    font-family: inherit;
    font-size: 1.4rem;
    color: var(--color-grey-500);
  }

  &.input-error {
    border: 1px solid var(--color-red-500);
    animation: shake 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

const ImageInput = styled.input`
  width: 30rem;
  overflow: hidden;
  white-space: nowrap;

  &::file-selector-button {
    border-radius: 0;
    outline: none;

    border: 1px solid var(--color-brand-500);
    background-color: transparent;
    color: var(--color-grey-0);

    font-family: inherit;
    font-weight: 400;
    text-transform: uppercase;
    padding: 0.8rem 2rem;

    transition: var(--animation-fast);
    margin-right: 1.6rem;
    cursor: pointer;

    &:hover {
      background-color: var(--color-brand-800);
    }
  }
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
      specifications: defaultValues?.specifications?.join(","),
    },
  });

  useEffect(
    function () {
      reset({
        ...defaultValues,
        specifications: defaultValues?.specifications?.join(","),
      });
    },
    // eslint-disable-next-line
    [toggledModal]
  );

  const { errors } = formState;

  // Much better now
  return (
    <>
      <HeadingBox>
        <Heading $variation="tertiary">{headingText}</Heading>
        <StyledButton onClick={closeModal}>
          <HiXMark />
        </StyledButton>
      </HeadingBox>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <Box>
          <StyledDiv>
            {/* Title */}
            <StyledLabel htmlFor="title">Title</StyledLabel>
            <Input
              disabled={isPending}
              className={`${errors?.title ? "input-error" : ""}`}
              $variation="form"
              placeholder="RTX 4080Ti"
              id="title"
              {...register("title", {
                required: true,
              })}
            />

            <DualInput>
              {/* Manufacturer */}
              <div>
                <StyledLabel htmlFor="manufacturer">Manufacturer</StyledLabel>
                <Input
                  disabled={isPending}
                  className={`${errors?.manufacturer ? "input-error" : ""}`}
                  $variation="form"
                  placeholder="NVIDIA"
                  id="manufacturer"
                  {...register("manufacturer", {
                    required: true,
                  })}
                />
              </div>

              <div>
                {/* Category */}
                <StyledLabel htmlFor="category">Category</StyledLabel>
                <Input
                  disabled={isPending}
                  className={`${errors?.category ? "input-error" : ""}`}
                  $variation="form"
                  placeholder="graphics-cards"
                  id="category"
                  {...register("category", {
                    required: true,
                  })}
                />
              </div>
            </DualInput>

            {/* Wawrranty and Price */}
            <DualInput>
              <div>
                <StyledLabel htmlFor="warranty">Warranty</StyledLabel>
                <Input
                  disabled={isPending}
                  className={`${errors?.warranty ? "input-error" : ""}`}
                  id="warranty"
                  $variation="form"
                  placeholder="2 years, 6 months"
                  {...register("warranty", {
                    required: true,
                  })}
                />
              </div>
              <div>
                <StyledLabel htmlFor="price">Price in EUR</StyledLabel>
                <Input
                  disabled={isPending}
                  className={`${errors?.price ? "input-error" : ""}`}
                  $variation="form"
                  placeholder="499,99"
                  id="price"
                  {...register("price", {
                    required: true,
                  })}
                />
              </div>
            </DualInput>

            {/* Stock and Type */}
            <DualInput>
              <div>
                <StyledLabel htmlFor="discount">Discount</StyledLabel>
                <Input
                  disabled={isPending}
                  className={`${errors?.discount ? "input-error" : ""}`}
                  placeholder="5/10/0"
                  $variation="form"
                  id="discount"
                  {...register("discount", {
                    max: 25,
                    min: 0,
                  })}
                />
              </div>
              <div>
                <StyledLabel htmlFor="type">Type</StyledLabel>
                <Input
                  disabled={isPending}
                  $variation="form"
                  placeholder="Wired/SSD"
                  id="type"
                  {...register("type")}
                />
              </div>
            </DualInput>
            <DualInput>
              <div>
                <StyledLabel htmlFor="ddr">DDR</StyledLabel>
                <Input
                  disabled={isPending}
                  $variation="form"
                  placeholder="DRR5/DDR4"
                  id="ddr"
                  {...register("ddr")}
                />
              </div>
              <div>
                <StyledLabel htmlFor="capacity">Capacity</StyledLabel>
                <Input
                  disabled={isPending}
                  $variation="form"
                  placeholder="500GB/1TB/256GB"
                  id="capacity"
                  {...register("capacity")}
                />
              </div>
            </DualInput>
          </StyledDiv>

          <StyledDiv>
            <DualInput>
              <div>
                <StyledLabel htmlFor="socket">Socket</StyledLabel>
                <Input
                  disabled={isPending}
                  $variation="form"
                  placeholder="LGA 1700/AM4"
                  id="socket"
                  {...register("socket")}
                />
              </div>
              <div>
                <StyledLabel htmlFor="speed">Speed</StyledLabel>
                <Input
                  disabled={isPending}
                  $variation="form"
                  placeholder="3200MHz/6000MHz"
                  id="speed"
                  {...register("speed")}
                />
              </div>
            </DualInput>
            <StyledLabel htmlFor="specifications">Specifications</StyledLabel>
            <StyledTextArea
              disabled={isPending}
              className={`${errors?.specifications ? "input-error" : ""}`}
              id="specifications"
              placeholder="Specification,Specification,Specification"
              {...register("specifications", {
                required: true,
              })}
            />
            <StyledLabel htmlFor="description">Description</StyledLabel>
            <StyledTextArea
              disabled={isPending}
              className={`${errors?.description ? "input-error" : ""}`}
              id="description"
              placeholder="Product description"
              {...register("description", {
                required: true,
              })}
            />
            <DualInput>
              <div>
                <StyledLabel htmlFor="stock">Stock</StyledLabel>
                <Input
                  disabled={isPending}
                  className={`${errors?.stock ? "input-error" : ""}`}
                  $variation="form"
                  placeholder="4"
                  id="stock"
                  {...register("stock", {
                    required: true,
                  })}
                />
              </div>
              <div>
                <StyledLabel>Image</StyledLabel>
                <ImageInput
                  type="file"
                  accept="image/*"
                  id="image"
                  {...register("image")}
                  disabled={isPending}
                />
              </div>
            </DualInput>
          </StyledDiv>
        </Box>
        {children}
      </form>
    </>
  );
}
