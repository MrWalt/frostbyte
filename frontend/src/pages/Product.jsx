import { useModal } from "../contexts/ModalContext";
import { useUser } from "../features/authentication/UserContext";
import FullProduct from "../features/products/FullProduct";
import Modal from "../ui/Modal";
import Section from "../ui/Section";

export default function Product() {
  const { toggledModal } = useModal();
  const { user } = useUser();
  return (
    <>
      <Section>
        <FullProduct />
      </Section>
      {user?.role === "admin" && (
        <>
          <Modal isOpen={toggledModal === "editProduct"}>
            <Modal.EditProduct />
          </Modal>
          <Modal size="small" isOpen={toggledModal === "deleteProduct"}>
            <Modal.DeleteProduct />
          </Modal>
        </>
      )}
    </>
  );
}
