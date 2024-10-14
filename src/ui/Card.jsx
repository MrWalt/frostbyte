import styled from "styled-components";
import Button from "./Button";

const Box = styled.div`
  height: 32rem;

  color: var(--color-grey-0);

  display: flex;
  flex-direction: column;

  cursor: pointer;
`;

const ImageBox = styled.div`
  height: 75%;
  width: 100%;

  border: 1px solid var(--color-grey-800);
  border-bottom: none;
`;

const Image = styled.img`
  /* height: 75%; */
`;

const Title = styled.p`
  padding: 0.8rem 1.6rem;
  font-size: 1.6rem;

  border-left: 1px solid var(--color-grey-800);
  border-right: 1px solid var(--color-grey-800);
`;

const StyledButton = styled(Button)`
  position: relative;
  height: 4.8rem;

  flex-shrink: 0;

  overflow: hidden;

  background-color: var(--color-grey-900);

  span {
    position: absolute;
    display: inline-block;

    width: 100%;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    transition: var(--animation-medium);
  }

  span:first-of-type {
    transform: translate(-150%, -50%);
  }

  &:hover span:first-of-type {
    transform: translate(-50%, -50%);
  }

  &:hover span:last-of-type {
    transform: translate(150%, -50%);
  }
`;

export default function Card({ title, price }) {
  return (
    <Box>
      <ImageBox>
        <Image />
      </ImageBox>
      <Title>{title}</Title>
      <StyledButton>
        <span>Add To Cart</span>
        <span>${price}</span>
      </StyledButton>
    </Box>
  );
}
