import styled from "styled-components";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";
import { useState } from "react";
import { useUpdatePassword } from "../authentication/useUpdatePassword";
import Loader from "../../ui/Loader";

const Container = styled.div`
  padding: 4.8rem;

  display: flex;

  width: 100%;
`;

const Box = styled.div`
  width: 100%;

  input {
    margin-top: 2.4rem;
    width: 32rem;

    &:first-of-type {
      margin-top: 3.6rem;
    }
  }
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 4.8rem;
`;

const StyledButton = styled(Button)`
  border: 2px solid var(--color-brand-600);
  margin-top: 4.8rem;
  width: 32rem;

  &:disabled {
    background-color: transparent;
    cursor: not-allowed;
  }
`;

const StyledLabel = styled(Label)`
  span {
    font-size: 1.4rem;
    color: var(--color-red-500);
    animation: blink 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export default function Security() {
  const { updatePassword, isPending } = useUpdatePassword();

  const [password, setPassword] = useState("");
  const [passwordNew, setPasswordNew] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [lengthError, setLengthError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (passwordNew.length < 8) {
      setLengthError(true);
      return;
    }
    setLengthError(false);
    updatePassword({ password, passwordNew, passwordConfirm });
    setPassword("");
    setPasswordNew("");
    setPasswordConfirm("");
  }

  return (
    <Container>
      <Box>
        <StyledHeading variation="secondary">
          Update Your Password
        </StyledHeading>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Input
            type="password"
            placeholder="Current Password"
            variation="large"
            value={password}
            disabled={isPending}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Label>Current Password</Label>
          <Input
            type="password"
            placeholder="New Password"
            variation="large"
            value={passwordNew}
            disabled={isPending}
            onChange={(e) => setPasswordNew(e.target.value)}
          />
          <StyledLabel>
            New Password{" "}
            {lengthError ? <span>must be at least 8 characters</span> : null}
          </StyledLabel>
          <Input
            type="password"
            placeholder="Confirm Password"
            variation="large"
            value={passwordConfirm}
            disabled={isPending}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
          <Label>Confirm Password</Label>
          <StyledButton
            disabled={
              !password || !passwordNew || !passwordConfirm || isPending
            }
          >
            {isPending ? <Loader size={44} /> : "Update password"}
          </StyledButton>
        </form>
      </Box>
    </Container>
  );
}
