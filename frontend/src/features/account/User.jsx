import styled from "styled-components";
import Heading from "../../ui/Heading";
import Loader from "../../ui/Loader";
import useUser from "./useUser";
import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import { useEffect } from "react";
import Button from "../../ui/Button";
import useEditUser from "./useEditUser";
import useUserOrders from "./useUserOrders";
import { format } from "date-fns";
import Price from "../../ui/Price";
import { Link } from "react-router-dom";
import { USERS_PAGE_SIZE } from "../../utils/constants";
import Pagination from "../../ui/Pagination";

const LoadingBox = styled.div`
  height: 100%;
  padding-top: 6.4rem;
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 3.6rem;
`;

const Form = styled.form`
  margin-bottom: 3.2rem;
`;

const DualInput = styled.div`
  display: flex;
  gap: 3.6rem;
`;

const StyledInput = styled(Input)`
  width: 50%;
`;

const StyledSelect = styled.select`
  border: 1px solid var(--color-grey-800);
  background-color: var(--color-grey-900);
  padding: 0.8rem 1.8rem;

  color: var(--color-grey-0);
  font-family: inherit;
  font-size: 1.4rem;
  text-transform: uppercase;
  font-weight: 300;

  cursor: pointer;
`;

const SelectDiv = styled.div`
  width: 50%;

  label {
    margin-right: 1.6rem;
  }
`;

const HeadingThin = styled(Heading)`
  font-weight: 300;
`;

const StyledButton = styled(Button)`
  padding: 0.8rem 2.4rem;
  background: transparent;
  border: 1px solid var(--color-brand-500);
  color: var(--color-grey-0);

  &:not(:disabled):hover {
    background-color: var(--color-brand-800);
  }

  &:hover {
    color: var(--color-grey-0);
  }

  &:disabled {
    border: 1px solid var(--color-grey-800);

    cursor: not-allowed;
  }
`;

const OrdersBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-top: 1.8rem;
`;

const OrderItem = styled(Link)`
  font-weight: 300;

  padding: 0.8rem 2.4rem;
  border: 1px solid var(--color-grey-800);

  display: flex;
  justify-content: space-between;

  transition: var(--animation-fast);

  cursor: pointer;

  &:hover {
    background-color: var(--color-grey-800);
  }
`;

const StyledP = styled.p`
  text-align: center;
  font-weight: 300;
`;

const PaginationBox = styled.div`
  padding: 2.4rem;
  padding-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function User() {
  const { user, isLoading: isLoadingUser } = useUser();
  const { register, formState, reset, handleSubmit } = useForm();
  const { editUser, isPending } = useEditUser();
  const { orders, count, isLoading: isLoadingOrders } = useUserOrders();

  const { errors } = formState;

  function onSubmit(data) {
    if (data.passwordNew === "" && data.passwordConfirm === "") {
      delete data.passwordNew;
      delete data.passwordConfirm;

      const formattedData = { email: data.email, role: data.role, id: user.id };

      editUser(formattedData);
      reset({ passwordConfirm: "", passwordNew: "" });

      return;
    }

    const formattedData = {
      email: data.email,
      role: data.role,
      id: user.id,
      passwordNew: data.passwordNew,
      passwordConfirm: data.passwordConfirm,
    };

    editUser(formattedData);
    reset({ passwordConfirm: "", passwordNew: "" });
  }

  useEffect(
    function () {
      reset({ email: user?.email || "", role: user?.role || "" });
    },
    // eslint-disable-next-line
    [user]
  );

  return (
    <>
      <StyledHeading $variation="secondary">Editing User</StyledHeading>

      {isLoadingUser ? (
        <LoadingBox>
          <Loader />
        </LoadingBox>
      ) : (
        <>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <DualInput>
              <StyledInput
                disabled={isPending}
                $variation="form"
                placeholder="Email"
                className={`${errors?.email ? "input-error" : ""}`}
                {...register("email", {
                  required: true,
                })}
              />
              <SelectDiv>
                <label>Role</label>
                <StyledSelect {...register("role")} disabled={isPending}>
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </StyledSelect>
              </SelectDiv>
            </DualInput>
            <DualInput>
              <StyledInput
                disabled={isPending}
                $variation="form"
                placeholder="New Password"
                {...register("passwordNew")}
              />
              <StyledInput
                disabled={isPending}
                $variation="form"
                placeholder="Confirm Password"
                {...register("passwordConfirm")}
              />
            </DualInput>
            <StyledButton $variation="medium" disabled={isPending}>
              Update User
            </StyledButton>
          </Form>
          <HeadingThin $variation="tertiary">Orders</HeadingThin>
          <OrdersBox>
            {!isLoadingOrders ? (
              orders.length ? (
                orders.map((order) => (
                  <OrderItem to={`/order/${order.id}`} key={order.id}>
                    <span>
                      <Price price={order.totalPrice} size="normal" />
                    </span>
                    <span>
                      <span>{order.status}</span> &mdash;{" "}
                      <span>{format(order.dateOrdered, "dd/MM/yyyy")}</span>
                    </span>
                  </OrderItem>
                ))
              ) : (
                <StyledP>User has not made any orders</StyledP>
              )
            ) : (
              <Loader />
            )}
          </OrdersBox>
          {isLoadingOrders || count < USERS_PAGE_SIZE ? null : (
            <PaginationBox>
              <Pagination count={count} pageSize={USERS_PAGE_SIZE} />
            </PaginationBox>
          )}
        </>
      )}
    </>
  );
}
