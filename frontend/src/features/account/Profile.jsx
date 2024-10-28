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

const StyledInput = styled.input`
  font-size: 1.6rem;
  width: 100%;

  margin-top: 0.4rem;

  color: var(--color-brand-500);

  cursor: pointer;

  &::placeholder {
    color: var(--color-brand-500);
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

export default function Profile() {
  const { userName, email, address, country, city, phone } = useUser();
  const shippingAddress = address.concat(`, ${country}, ${city}`);
  return (
    <Box>
      <StyledP>Full Name</StyledP>
      <InfoBox>
        <StyledSpan>
          <StyledInput type="text" placeholder={userName} spellCheck="false" />
          <HiOutlinePencil />
        </StyledSpan>
      </InfoBox>

      <StyledP>E-Mail</StyledP>
      <InfoBox>
        <Email>{email}</Email>
      </InfoBox>

      <StyledP>Address</StyledP>
      <InfoBox>
        <StyledSpan>
          <StyledInput
            type="text"
            placeholder={shippingAddress}
            spellCheck="false"
          />
          <HiOutlinePencil />
        </StyledSpan>
      </InfoBox>

      <StyledP>Phone</StyledP>
      <InfoBox>
        <StyledSpan>
          <StyledInput type="text" placeholder={phone} spellCheck="false" />
          <HiOutlinePencil />
        </StyledSpan>
      </InfoBox>
    </Box>
  );
}