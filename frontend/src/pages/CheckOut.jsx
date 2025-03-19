import styled from "styled-components";
import UserDetails from "../features/checkout/UserDetails";
import PaymentDetails from "../features/checkout/PaymentDetails";
import Heading from "../ui/Heading";
import Section from "../ui/Section";
import Background from "../ui/Background";
import { useForm } from "react-hook-form";
import { useUser } from "../features/authentication/UserContext";
import { useCart } from "../features/cart/CartContext";
import { useCreateOrder } from "../features/orders/useCreateOrder";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Container = styled.div`
  width: 96rem;

  margin: 0 auto;
`;

const Box = styled.form`
  display: flex;
  gap: 1.6rem;
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 2.4rem;
`;

export default function CheckOut() {
  const navigate = useNavigate();
  const { cart, totalCartPrice, itemsInCart } = useCart();
  const { user } = useUser();
  const { createOrder, isPending } = useCreateOrder();

  const { formState, register, handleSubmit } = useForm({
    defaultValues: {
      name: user.name || "",
      country: user.country || "",
      city: user.city || "",
      address: user.address || "",
      phone: user.phone || "",
    },
  });

  // This is useEffect to prevent users from going to /checkout with empty cart
  useEffect(function () {
    if (!itemsInCart) return navigate("/products", { replace: true });
    // eslint-disable-next-line
  }, []);

  function onSubmit(data) {
    const shipTo = `${data.address}, ${data.city}, ${data.country} `;

    const newOrder = {
      items: cart.map((item) => ({
        item: { id: item.id, price: item.price, discount: item.discount },
        quantity: item.quantity,
      })),
      shipTo,
      name: data.name,
    };

    createOrder(newOrder);
  }

  return (
    <Section>
      <Background>
        <Container>
          <StyledHeading $variation="secondary">Checkout</StyledHeading>
          <Box onSubmit={handleSubmit(onSubmit)}>
            <UserDetails
              register={register}
              formState={formState}
              email={user.email}
              isPending={isPending}
            />
            <PaymentDetails
              totalCartPrice={totalCartPrice}
              isPending={isPending}
            />
          </Box>
        </Container>
      </Background>
    </Section>
  );
}
