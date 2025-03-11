import styled from "styled-components";
import ProductForm from "../features/products/ProductForm";
import useCreateProduct from "../features/products/useCreateProduct";
import Loader from "./Loader";
import Button from "./Button";
import useProduct from "../features/products/useProduct";
import useEditProduct from "../features/products/useEditProduct";

const Box = styled.div`
  width: 90rem;
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
`;
export default function Modal({ children, isOpen }) {
  return <Box className={`${isOpen ? "open" : ""}`}>{children}</Box>;
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
      price: {
        EUR: Number(data.priceEUR),
        USD: Number(data.priceUSD),
      },
      discount: Number(data.discount),
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
      price: {
        EUR: Number(data.priceEUR),
        USD: Number(data.priceUSD),
      },
      discount: Number(data.discount),
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

Modal.AddProduct = AddProduct;
Modal.EditProduct = EditProduct;
