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

const InputBox = styled.div`
  /* padding-left: 3.2rem; */
  margin-bottom: 4.8rem;
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

  button {
    margin-top: 1.2rem;

    width: 32rem;
  }
`;

const StyledButton = styled(Button)`
  border: 2px solid var(--color-brand-600);
  &:disabled {
    background-color: transparent;
    cursor: not-allowed;
  }
`;

export default function Security() {
  const [password, setPassword] = useState("");
  const [passwordNew, setPasswordNew] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const { updatePassword, isPending } = useUpdatePassword();
  return (
    <Container>
      <Box>
        <Heading variation="secondary">Update Your Password</Heading>
        <InputBox>
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
          <Label>New Password</Label>
          <Input
            type="password"
            placeholder="Confirm Password"
            variation="large"
            value={passwordConfirm}
            disabled={isPending}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
          <Label>Confirm Password</Label>
        </InputBox>
        <StyledButton
          disabled={!password || !passwordNew || !passwordConfirm || isPending}
          onClick={() => {
            updatePassword({ password, passwordNew, passwordConfirm });
            setPassword("");
            setPasswordNew("");
            setPasswordConfirm("");
          }}
        >
          {isPending ? <Loader size={44} /> : "Update password"}
        </StyledButton>
      </Box>
    </Container>
  );
}
