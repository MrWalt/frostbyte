import styled from "styled-components";
import useUser from "../authentication/useUser";
import { HiOutlinePencil } from "react-icons/hi2";

const Box = styled.div`
  width: 100%;
  padding: 4.8rem;
`;

const StyledP = styled.p`
  font-size: 2rem;
`;

const StyledButton = styled.button`
  display: inline-block;

  font-size: 1.6rem;

  position: relative;

  margin-top: 0.4rem;
  margin-left: 2.4rem;

  padding: 0.4rem 3.2rem 0.4rem 0.4rem;

  color: var(--color-brand-500);

  transition: var(--animation-fast);

  cursor: pointer;

  &:hover {
    background-color: var(--color-grey-800);
  }

  svg {
    font-size: 1.6rem;
    margin-left: 0.4rem;

    position: absolute;
    right: 6px;
    top: 50%;

    transform: translateY(-50%);
  }
`;

const InfoBox = styled.div`
  margin-bottom: 2.4rem;
`;

export default function Profile() {
  const { userName, email, address, country, city, phone } = useUser();
  const shippingAddress = address.concat(`, ${country}, ${city}`);
  return (
    <Box>
      <InfoBox>
        <StyledP>Full Name</StyledP>

        <StyledButton>
          {userName} <HiOutlinePencil />
        </StyledButton>
      </InfoBox>

      <InfoBox>
        <StyledP>E-Mail</StyledP>
        <StyledButton>
          {email} <HiOutlinePencil />
        </StyledButton>
      </InfoBox>

      <InfoBox>
        <StyledP>Phone Number</StyledP>
        <StyledButton>
          {phone} <HiOutlinePencil />
        </StyledButton>
      </InfoBox>

      <InfoBox>
        <StyledP>Address</StyledP>
        <StyledButton>
          {shippingAddress} <HiOutlinePencil />
        </StyledButton>
      </InfoBox>
    </Box>
  );
}
