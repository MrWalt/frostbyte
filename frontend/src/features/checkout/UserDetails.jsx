import styled from "styled-components";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import Heading from "../../ui/Heading";
import { useUser } from "../authentication/UserContext";
import { useState } from "react";

const Box = styled.div`
  width: 50%;

  border: 1px solid var(--color-grey-800);

  padding-top: 2.4rem;
  padding-bottom: 4.8rem;
`;

const UserInfoBox = styled.div`
  display: flex;

  div {
    width: 50%;

    padding: 0rem 2.4rem;

    &:first-child {
      border-right: 1px solid var(--color-grey-800);
    }
  }
`;

const TextBox = styled.div`
  margin-left: 2.4rem;
  margin-bottom: 4.2rem;
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 0.4rem;
`;

const RequiredFields = styled.span`
  font-size: 1.4rem;
  color: var(--color-grey-300);
`;

const StyledInput = styled(Input)`
  &:not(:first-of-type) {
    margin-top: 2.4rem;
  }
`;

export default function UserDetails() {
  const { user } = useUser();
  const [fullName, setFullName] = useState(user.name);
  const [address, setAddress] = useState(user.address);
  const [country, setCountry] = useState(user.country);
  const [city, setCity] = useState(user.city);

  return (
    <Box>
      <TextBox>
        <StyledHeading variation="tertiary">Shipping details</StyledHeading>
        <RequiredFields>Fields marked with * are required</RequiredFields>
      </TextBox>
      <UserInfoBox>
        <div>
          <StyledInput
            type="text"
            variation="large"
            placeholder="Full Name*"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <Label htmlFor="fullName">Full Name*</Label>

          <StyledInput
            type="text"
            variation="large"
            placeholder="Address*"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Label htmlFor="address">Address*</Label>

          <StyledInput
            type="text"
            variation="large"
            placeholder="City*"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <Label htmlFor="city">City*</Label>

          <StyledInput
            type="text"
            variation="large"
            placeholder="Apartment Number"
            id="aptNumber"
          />
          <Label htmlFor="aptNumber">Apartment Number</Label>
        </div>
        <div>
          <StyledInput
            type="text"
            variation="large"
            placeholder="Country*"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <Label htmlFor="country">Country*</Label>

          <StyledInput type="text" variation="large" placeholder="Zip Code*" />
          <Label htmlFor="zipcode">Zip Code*</Label>

          <StyledInput
            type="text"
            variation="large"
            placeholder="Phone Number"
          />
          <Label htmlFor="phoneNumber">Phone Number</Label>
        </div>
      </UserInfoBox>
    </Box>
  );
}
