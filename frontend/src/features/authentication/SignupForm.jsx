import styled from "styled-components";
import Heading from "../../ui/Heading";
import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";
import { useSignup } from "../../features/authentication/useSignup";
import Loader from "../../ui/Loader";
import { useState } from "react";
import { HiOutlineEye, HiOutlineEyeSlash } from "react-icons/hi2";

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
  padding: 0 2.4rem;

  span {
    color: var(--color-brand-500);
  }
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
    color: var(--color-grey-500);

    width: 2.8rem;
    height: 2.8rem;

    padding: 0.4rem;

    cursor: pointer;

    transition: var(--animation-medium);

    &:hover {
      background-color: var(--color-grey-200);
    }
  }
`;

const Error = styled.span`
  color: var(--color-red-500);

  position: absolute;
  top: 0;
  left: 1.8rem;

  animation: blink 0.4s cubic-bezier(0.4, 0, 0.2, 1);
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

const StyledLabel = styled(Label)`
  span {
    font-size: 1.4rem;
    color: var(--color-red-500);
    animation: blink 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const { register, handleSubmit, formState, reset } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
  });
  const { errors } = formState;
  const { signup, isPending } = useSignup();

  function onSubmit(data) {
    signup(data);
    reset({ email: data.email, password: data.password, passwordConfirm: "" });
  }

  return (
    <Container>
      <StyledHeading variation="primary">
        Join us <span>today</span>
      </StyledHeading>

      <form onSubmit={handleSubmit(onSubmit)}>
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
            {...register("password", {
              required: "This field is required.",
              minLength: 8,
            })}
          />
          <StyledLabel htmlFor="password">
            Password{" "}
            {errors.password?.type === "minLength" ? (
              <span>must be longer than 8 characters</span>
            ) : (
              ""
            )}
          </StyledLabel>
          {showPassword ? (
            <HiOutlineEye onClick={() => setShowPassword((value) => !value)} />
          ) : (
            <HiOutlineEyeSlash
              onClick={() => setShowPassword((value) => !value)}
            />
          )}
        </StyledDiv>

        <StyledDiv>
          {errors?.passwordConfirm && (
            <Error>{errors.passwordConfirm.message}</Error>
          )}
          <Input
            type={showPasswordConfirm ? "text" : "password"}
            placeholder="Confirm Password"
            id="password-confirm"
            spellCheck="false"
            disabled={isPending}
            variation="large"
            {...register("passwordConfirm", {
              required: "This field is required.",
            })}
          />
          <Label htmlFor="password-confirm">Confirm Password</Label>
          {showPasswordConfirm ? (
            <HiOutlineEye
              onClick={() => setShowPasswordConfirm((value) => !value)}
            />
          ) : (
            <HiOutlineEyeSlash
              onClick={() => setShowPasswordConfirm((value) => !value)}
            />
          )}
        </StyledDiv>

        {/* Button to submit */}
        <StyledDiv>
          <Button disabled={isPending}>
            {" "}
            {isPending ? <Loader size={44} /> : "Create Account"}
          </Button>
          <StyledSpan>
            Already have an account? <Link to="/login">Login</Link>
          </StyledSpan>
        </StyledDiv>
      </form>
    </Container>
  );
}
