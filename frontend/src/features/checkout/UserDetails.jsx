import styled from "styled-components";
import Input from "../../ui/Input";
import Heading from "../../ui/Heading";

const Box = styled.div`
  width: 50%;

  border: 1px solid var(--color-grey-800);

  padding: 2.4rem;
  background-color: var(--color-grey-900);
`;

const TextBox = styled.div`
  margin-left: 2.4rem;
`;

const UserInfoBox = styled.div`
  padding-top: 3.2rem;
`;

const DualInput = styled.div`
  display: flex;
  gap: 2rem;
`;

const StyledLabel = styled.label`
  display: inline-block;
  margin-left: 1rem;
  margin-bottom: 0.6rem;
  font-size: 1.6rem;
  color: var(--color-grey-300);
`;

const StyledDiv = styled.div`
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 0.4rem;
  font-weight: 300;
`;

const RequiredFields = styled.span`
  font-size: 1.4rem;
  color: var(--color-grey-400);
  font-weight: 300;
`;

export default function UserDetails({ register, formState, email, isPending }) {
  const { errors } = formState;

  return (
    <Box>
      <TextBox>
        <StyledHeading $variation="tertiary">Shipping details</StyledHeading>
        <RequiredFields>Fields marked with * are required</RequiredFields>
      </TextBox>
      <UserInfoBox>
        <DualInput>
          <StyledDiv>
            <StyledLabel htmlFor="fullName">Full Name*</StyledLabel>
            <Input
              $variation="form"
              disabled={isPending}
              placeholder="John Smith"
              id="fullName"
              className={`${errors?.name ? "input-error" : ""}`}
              {...register("name", {
                required: true,
              })}
            />
          </StyledDiv>
          <StyledDiv>
            <StyledLabel htmlFor="email">Email*</StyledLabel>
            <Input
              id="email"
              $variation="form"
              placeholder="If you can read this you messed up"
              disabled
              value={email}
            />
          </StyledDiv>
        </DualInput>
        <DualInput>
          <StyledDiv>
            <StyledLabel htmlFor="country">Country*</StyledLabel>
            <Input
              $variation="form"
              disabled={isPending}
              placeholder="Germany"
              className={`${errors?.country ? "input-error" : ""}`}
              id="country"
              {...register("country", {
                required: true,
              })}
            />
          </StyledDiv>
          <StyledDiv>
            <StyledLabel htmlFor="city">City*</StyledLabel>
            <Input
              id="city"
              $variation="form"
              disabled={isPending}
              className={`${errors?.city ? "input-error" : ""}`}
              placeholder="Berlin"
              {...register("city", {
                required: true,
              })}
            />
          </StyledDiv>
        </DualInput>
        <StyledDiv>
          <StyledLabel htmlFor="address">Address*</StyledLabel>
          <Input
            $variation="form"
            disabled={isPending}
            placeholder="Parkasse Street 34"
            id="address"
            className={`${errors?.address ? "input-error" : ""}`}
            {...register("address", {
              required: true,
            })}
          />
        </StyledDiv>
        <DualInput>
          <StyledDiv>
            <StyledLabel htmlFor="phone">Phone Number</StyledLabel>
            <Input
              $variation="form"
              disabled={isPending}
              placeholder="(+49) 163 555 1584"
              id="phone"
              {...register("phone")}
            />
          </StyledDiv>
          <StyledDiv>
            <StyledLabel htmlFor="aptNumber">Apartment Number</StyledLabel>
            <Input
              id="aptNumber"
              $variation="form"
              disabled={isPending}
              placeholder="42"
              {...register("aptNumber")}
            />
          </StyledDiv>
        </DualInput>
      </UserInfoBox>
    </Box>
  );
}
