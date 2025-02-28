import styled from "styled-components";
import Heading from "../../ui/Heading";
import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import { useLogin } from "./useLogin";
import { useForm } from "react-hook-form";
import Loader from "../../ui/Loader";
import { useEffect, useRef, useState } from "react";

import { HiOutlineEye, HiOutlineEyeSlash } from "react-icons/hi2";
import Error from "../../ui/Error";

const Container = styled.div`
  margin: 4.8rem auto;
  max-width: 40rem;

  padding: 4.8rem 2.8rem 3.6rem 2.8rem;

  background-color: rgb(17, 24, 39, 0.7);
  border: 1px solid var(--color-grey-800);
  backdrop-filter: blur(8px);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  gap: 1.8rem;

  color: var(--color-grey-0);
  font-size: 1.6rem;

  form {
    align-self: stretch;
  }
`;

const StyledHeading = styled(Heading)`
  text-align: center;
  padding-bottom: 4.8rem;
`;

const StyledDiv = styled.div`
  padding-top: 2.4rem;

  position: relative;

  &:last-of-type {
    padding-top: 1.8rem;
  }

  svg {
    position: absolute;
    bottom: 26px;
    right: 10px;
    color: var(--color-grey-600);

    width: 2.8rem;
    height: 2.8rem;

    padding: 0.4rem;

    cursor: pointer;

    transition: var(--animation-medium);

    &:hover {
      background-color: var(--color-grey-300);
    }
  }
`;

const StyledSpan = styled.span`
  display: block;

  text-align: center;

  margin-top: 1.2rem;

  font-size: 1.4rem;
  color: var(--color-grey-300);

  a:link,
  a:visited {
    color: var(--color-brand-400);
    transition: var(--animation-fast);

    &:hover {
      color: var(--color-brand-600);
    }
  }
`;

export default function LoginForm() {
  const passwordInputRef = useRef();

  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit, formState, reset, getValues } = useForm();
  const { login, isPending } = useLogin();
  const { errors } = formState;
  const { ref, ...rest } = register("password", {
    required: "This field is required.",
  });

  useEffect(
    function () {
      if (!isPending && getValues().email) passwordInputRef.current.focus();
    },
    [isPending, getValues]
  );

  function onSubmit(data) {
    login(data);
    reset({ email: data.email, password: "" });
  }

  return (
    <Container>
      <StyledHeading variation="primary">Login to your account</StyledHeading>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Input field for Email */}
        <StyledDiv>
          {errors?.email && <Error>{errors.email.message}</Error>}
          <Input
            type="text"
            placeholder="E-Mail Address"
            id="email"
            spellCheck="false"
            disabled={isPending}
            variation="large"
            {...register("email", {
              required: "This field is required.",
            })}
          />
          <Label htmlFor="email">E-Mail Address</Label>
        </StyledDiv>

        {/* Input field for password. Need to do this ...rest weirdness cause ref isnt working */}
        <StyledDiv>
          {errors?.password && <Error>{errors.password.message}</Error>}
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            id="password"
            spellCheck="false"
            disabled={isPending}
            variation="large"
            {...rest}
            ref={(e) => {
              ref(e);
              passwordInputRef.current = e;
            }}
          />
          <Label htmlFor="password">Password</Label>
          {showPassword ? (
            <HiOutlineEye onClick={() => setShowPassword((value) => !value)} />
          ) : (
            <HiOutlineEyeSlash
              onClick={() => setShowPassword((value) => !value)}
            />
          )}
        </StyledDiv>

        {/* Button to submit */}
        <StyledDiv>
          <Button disabled={isPending}>
            {isPending ? <Loader size={44} /> : "Login"}
          </Button>
          <StyledSpan>
            Don't have an account? <Link to="/signup">Create an account</Link>
          </StyledSpan>
        </StyledDiv>
      </form>
    </Container>
  );
}
