import styled from "styled-components";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";

const Box = styled.div`
  width: 42rem;
  padding: 4.8rem 4.8rem;

  input {
    margin-top: 2.4rem;

    &:first-of-type {
      margin-top: 4.8rem;
    }
  }

  button {
    margin-top: 1.2rem;
  }
`;

export default function Settings() {
  return (
    <Box>
      <Heading variation="tertiary">Update Your Password</Heading>
      <Input type="password" placeholder="Old Password" />
      <Label>Old Password</Label>
      <Input type="password" placeholder="New Password" />
      <Label>New Password</Label>
      <Input type="password" placeholder="Confirm Password" />
      <Label>Confirm Password</Label>
      <Button>Update</Button>
    </Box>
  );
}
