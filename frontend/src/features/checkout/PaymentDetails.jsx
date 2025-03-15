import Button from "../../ui/Button";
import { useUser } from "../authentication/UserContext";
import { useCart } from "../cart/CartContext";
import { useCreateOrder } from "../orders/useCreateOrder";

export default function PaymentDetails() {
  const { createOrder, isPending } = useCreateOrder();
  const { cart } = useCart();

  function handleCreateOrder() {
    const newOrder = {
      items: cart.map((item) => ({
        item: { id: item.id, price: item.price, discount: item.discount },
        quantity: item.quantity,
      })),
      shipTo: "Kazakhstan",
    };

    createOrder(newOrder);
  }

  return (
    <div>
      <Button onClick={handleCreateOrder}>Place Order</Button>
    </div>
  );
}
