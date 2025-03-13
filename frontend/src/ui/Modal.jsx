import styled, { css } from "styled-components";
import ProductForm from "../features/products/ProductForm";
import useCreateProduct from "../features/products/useCreateProduct";
import Loader from "./Loader";
import Button from "./Button";
import useProduct from "../features/products/useProduct";
import useEditProduct from "../features/products/useEditProduct";
import Heading from "./Heading";
import { HiXMark } from "react-icons/hi2";
import { useModal } from "../contexts/ModalContext";
import useDeleteProduct from "../features/products/useDeleteProduct";

const Box = styled.div`
  padding: 1.2rem;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);

  z-index: 1001;

  transition: var(--animation-slow);

  color: var(--color-grey-0);
  background-color: var(--color-grey-transparent);
  backdrop-filter: blur(12px);

  border: 1px solid var(--color-grey-800);

  pointer-events: none;
  visibility: hidden;
  opacity: 0;

  &.open {
    pointer-events: auto;
    visibility: visible;
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }

  ${(props) =>
    props.size === "small"
      ? css`
          width: 42rem;
        `
      : css`
          width: 90rem;
        `}
`;

const StyledHeading = styled(Heading)`
  padding: 2.4rem;
  border: 1px solid var(--color-grey-800);

  position: relative;
`;

const XButton = styled.button`
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

const ButtonBox = styled.div`
  margin-top: 1.25rem;
  display: flex;
  gap: 1.2rem;
`;

const DeleteButton = styled(Button)`
  border: 1px solid var(--color-red-500);
  background-color: transparent;

  &:hover {
    background-color: var(--color-red-800);
  }
`;

const StyledButton = styled(Button)`
  border: 1px solid var(--color-brand-500);
  background-color: transparent;
`;

export default function Modal({ children, isOpen, size }) {
  return (
    <Box size={size} className={`${isOpen ? "open" : ""}`}>
      {children}
    </Box>
  );
}

function AddProduct() {
  const { createProduct, isPending } = useCreateProduct();

  function handleOnSubmit(data) {
    let specifications = data.specifications.split(",");
    specifications = specifications.map((item) =>
      item.at(0) === " " ? item.slice(1) : item
    );
    const structuredData = {
      title: data.title,
      manufacturer: data.manufacturer,
      description: data.description,
      specifications,
      stock: Number(data.stock),
      category: data.category,
      warranty: data.warranty,
      price: Number(data.price.replace(",", ".")),
      discount: Number(data.discount),
      speed: data.speed,
      capacity: data.capacity,
      ddr: data.ddr,
      type: data.type,
      socket: data.socket,
    };

    createProduct(structuredData);
  }

  return (
    <>
      <ProductForm
        isPending={isPending}
        handleOnSubmit={handleOnSubmit}
        headingText={"Add a new product"}
      >
        <Button disabled={isPending}>
          {isPending ? <Loader size={44} /> : "Add Product"}
        </Button>
      </ProductForm>
    </>
  );
}

function EditProduct() {
  const { product, isLoading } = useProduct();
  const { editProduct, isPending } = useEditProduct();

  function handleOnSubmit(data) {
    let specifications = data.specifications.split(",");
    specifications = specifications.map((item) =>
      item.at(0) === " " ? item.slice(1) : item
    );

    const structuredData = {
      title: data.title,
      manufacturer: data.manufacturer,
      description: data.description,
      specifications,
      stock: Number(data.stock),
      category: data.category,
      warranty: data.warranty,
      price: Number(String(data.price).replace(",", ".")),
      discount: Number(data.discount),
      socket: data.socket,
      type: data.type,
      speed: data.speed,
      ddr: data.ddr,
      id: data._id,
    };

    editProduct(structuredData);
  }

  if (isLoading) return;

  return (
    <>
      <ProductForm
        isPending={isPending}
        handleOnSubmit={handleOnSubmit}
        defaultValues={product}
        headingText={"Edit this product"}
        isEditMode={true}
      >
        <Button disabled={isPending}>
          {isPending ? <Loader size={44} /> : "Update Product"}
        </Button>
      </ProductForm>
    </>
  );
}

function DeleteProduct() {
  const { closeModal } = useModal();
  const { deleteProduct, isPending } = useDeleteProduct();
  return (
    <>
      <StyledHeading $variation="tertiary">
        Delete this product?
        <XButton onClick={closeModal}>
          <HiXMark />
        </XButton>
      </StyledHeading>

      <ButtonBox>
        <DeleteButton onClick={deleteProduct} disabled={isPending}>
          Delete
        </DeleteButton>
        <StyledButton onClick={closeModal} disabled={isPending}>
          Cancel
        </StyledButton>
      </ButtonBox>
    </>
  );
}

Modal.AddProduct = AddProduct;
Modal.EditProduct = EditProduct;
Modal.DeleteProduct = DeleteProduct;
