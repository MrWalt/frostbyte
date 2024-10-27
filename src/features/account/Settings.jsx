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

  display: flex;
  justify-content: center;

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

export default function Settings() {
  return (
    <Container>
      <Box>
        <div>
          <Heading variation="tertiary">Update Your Password</Heading>
          <Input type="password" placeholder="Current Password" />
          <Label>Current Password</Label>
          <Input type="password" placeholder="New Password" />
          <Label>New Password</Label>
          <Input type="password" placeholder="Confirm Password" />
          <Label>Confirm Password</Label>
          <Button>Update</Button>
        </div>
      </Box>
      <Box>
        <div>
          <Heading variation="tertiary">Update Your Name</Heading>
          <Input type="text" placeholder="Full Name" />
          <Label>Full Name</Label>
        </div>
      </Box>
    </Container>
  );
}
