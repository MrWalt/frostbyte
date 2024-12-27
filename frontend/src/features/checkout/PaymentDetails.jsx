import Button from "../../ui/Button";
import { useUser } from "../authentication/UserContext";
import { useCart } from "../cart/CartContext";
import { useCreateOrder } from "../orders/useCreateOrder";

export default function PaymentDetails() {
  const { createOrder, isPending } = useCreateOrder();
  const { cart } = useCart();
  const { user } = useUser();

  function handleCreateOrder() {
    const newOrder = {
      user: user.id,
      orderedItems: cart.map((item) => ({
        item: item.id,
        quantity: item.quantity,
      })),
    };
    createOrder(newOrder);
  }

  return (
    <div>
      <Button onClick={handleCreateOrder}>Place Order</Button>
    </div>
  );
}
