import styled from "styled-components";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";

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

  button {
    margin-top: 1.2rem;

    width: 32rem;
  }
`;

export default function Security() {
  return (
    <Container>
      <Box>
        <div>
          <Heading variation="tertiary">Update Your Password</Heading>
          <Input
            type="password"
            placeholder="Current Password"
            variation="large"
          />
          <Label>Current Password</Label>
          <Input type="password" placeholder="New Password" variation="large" />
          <Label>New Password</Label>
          <Input
            type="password"
            placeholder="Confirm Password"
            variation="large"
          />
          <Label>Confirm Password</Label>
          <Button>Update Password</Button>
        </div>
      </Box>
    </Container>
  );
}
