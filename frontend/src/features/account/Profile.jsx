import styled from "styled-components";
import { HiOutlinePencil } from "react-icons/hi2";
import { useUser } from "../authentication/UserContext";
import Input from "../../ui/Input";
import Heading from "../../ui/Heading";
import { useState } from "react";
import Button from "../../ui/Button";
import { useUpdateUser } from "../authentication/useUpdateUser";
import Loader from "../../ui/Loader";

const Box = styled.div`
  width: 100%;
  padding: 4.8rem;
`;

const StyledP = styled.p`
  font-size: 2rem;
`;

const InfoBox = styled.div`
  margin-bottom: 2.4rem;
  display: flex;
  align-items: center;

  padding-left: 2.4rem;

  width: 36rem;

  svg {
    font-size: 1.6rem;
    margin-left: 0.4rem;

    flex-shrink: 0;
  }
`;

const StyledInput = styled(Input)`
  font-size: 1.6rem;
  width: 100%;

  margin-top: 0.4rem;

  &:disabled {
    color: var(--color-brand-900);
  }

  &::placeholder {
    color: var(--color-grey-500);
  }

  &:disabled::placeholder {
    color: var(--color-grey-700);
  }
`;

const StyledSpan = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 0.4rem;

  padding: 0.2rem 0.4rem;

  width: 100%;

  border-bottom: 1px solid var(--color-grey-800);

  transition: var(--animation-fast);

  cursor: pointer;

  &:hover {
    background-color: var(--color-grey-800);
  }
`;

const Email = styled.span`
  display: inline-block;

  color: var(--color-brand-500);

  width: 100%;

  padding: 0.2rem 0.4rem;

  margin-top: 0.8rem;

  border-bottom: 1px solid var(--color-grey-800);
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 2.4rem;
  /* margin-left: 1.6rem; */
`;

const InfoContainer = styled.div`
  padding-left: 3.2rem;
  margin-bottom: 4.8rem;
`;

const StyledButton = styled(Button)`
  width: 32rem;

  &:disabled {
    border: 2px solid var(--color-brand-500);
    background-color: transparent;
    cursor: not-allowed;
  }
`;

export default function Profile() {
  const { user } = useUser();
  const { updateUser, isPending } = useUpdateUser();

  const [changedInfo, setChangedInfo] = useState(false);
  const [name, setName] = useState(user.name);
  const [address, setAddress] = useState(user.address || "");
  const [country, setCountry] = useState(user.country || "");
  const [city, setCity] = useState(user.city || "");
  const [phone, setPhone] = useState(user.phone || "");
  // const { name, email, address, country, city, phone } = user;

  function changeInfo(func, value) {
    setChangedInfo(true);
    func(value);
  }

  return (
    <Box>
      <StyledHeading variation="secondary">Your profile</StyledHeading>

      <InfoContainer>
        <StyledP>Full Name</StyledP>
        <InfoBox>
          <StyledSpan>
            <StyledInput
              type="text"
              placeholder="John Smith"
              spellCheck="false"
              variation="minimal"
              value={name}
              disabled={isPending}
              onChange={(e) => changeInfo(setName, e.target.value)}
            />
            <HiOutlinePencil />
          </StyledSpan>
        </InfoBox>

        <StyledP>E-Mail</StyledP>
        <InfoBox>
          <Email>{user.email}</Email>
        </InfoBox>

        <StyledP>Address</StyledP>
        <InfoBox>
          <StyledSpan>
            <StyledInput
              type="text"
              placeholder="34 Parkstrasse"
              spellCheck="false"
              variation="minimal"
              value={address}
              disabled={isPending}
              onChange={(e) => changeInfo(setAddress, e.target.value)}
            />
            <HiOutlinePencil />
          </StyledSpan>
        </InfoBox>

        <StyledP>Country</StyledP>
        <InfoBox>
          <StyledSpan>
            <StyledInput
              type="text"
              placeholder="Germany"
              spellCheck="false"
              variation="minimal"
              value={country}
              disabled={isPending}
              onChange={(e) => changeInfo(setCountry, e.target.value)}
            />
            <HiOutlinePencil />
          </StyledSpan>
        </InfoBox>

        <StyledP>City</StyledP>
        <InfoBox>
          <StyledSpan>
            <StyledInput
              type="text"
              placeholder="Berlin"
              spellCheck="false"
              variation="minimal"
              value={city}
              disabled={isPending}
              onChange={(e) => changeInfo(setCity, e.target.value)}
            />
            <HiOutlinePencil />
          </StyledSpan>
        </InfoBox>

        <StyledP>Phone Number</StyledP>
        <InfoBox>
          <StyledSpan>
            <StyledInput
              type="text"
              placeholder="(+49) 163 555 1584"
              spellCheck="false"
              variation="minimal"
              value={phone}
              disabled={isPending}
              onChange={(e) => changeInfo(setPhone, e.target.value)}
            />
            <HiOutlinePencil />
          </StyledSpan>
        </InfoBox>
      </InfoContainer>
      <StyledButton
        disabled={isPending || !changedInfo}
        onClick={() => {
          updateUser({ name, country, city, phone, address, type: "data" });
          setChangedInfo(false);
        }}
      >
        {isPending ? <Loader size={44} /> : "Update settings"}
      </StyledButton>
    </Box>
  );
}
