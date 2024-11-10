import styled from "styled-components";
import Heading from "../../ui/Heading";
import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import { useLogin } from "./useLogin";
import { useForm } from "react-hook-form";
import Loader from "../../ui/Loader";

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
`;

const Error = styled.span`
  color: var(--color-red-500);

  position: absolute;
  top: 0;
  left: 1.8rem;
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
  const { register, handleSubmit, formState, reset } = useForm();
  const { login, isPending } = useLogin();
  const { errors } = formState;

  function onSubmit(data) {
    login(data);
  }

  function onError() {}

  return (
    <Container>
      <StyledHeading variation="primary">Login to your account</StyledHeading>

      <form onSubmit={handleSubmit(onSubmit, onError)}>
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
        <StyledDiv>
          {errors?.password && <Error>{errors.password.message}</Error>}
          <Input
            type="password"
            placeholder="Password"
            id="password"
            spellCheck="false"
            disabled={isPending}
            variation="large"
            {...register("password", {
              required: "This field is required.",
            })}
          />
          <Label htmlFor="password">Password</Label>
        </StyledDiv>
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
