import styled from "styled-components";
import Heading from "../../ui/Heading";
import Loader from "../../ui/Loader";
import useUser from "./useUser";
import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import { useEffect } from "react";
import Button from "../../ui/Button";
import useEditUser from "./useEditUser";

const LoadingBox = styled.div`
  height: 100%;
  padding-top: 6.4rem;
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 3.6rem;
`;

const Form = styled.form`
  margin-bottom: 2.4rem;
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

export default function User() {
  const { user, isLoading: isLoadingUser } = useUser();
  const { register, formState, reset, handleSubmit } = useForm();
  const { editUser, isPending } = useEditUser();

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
        </>
      )}
    </>
  );
}
