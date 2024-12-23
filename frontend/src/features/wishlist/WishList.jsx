import styled from "styled-components";
import WishListItem from "./WishListItem";
import { useWishlist } from "./WishlistContext";
import Heading from "../../ui/Heading";
import { useMenu } from "../../contexts/MenuContext";
import { HiXMark } from "react-icons/hi2";

const Container = styled.div`
  padding: 0.8rem;

  display: flex;
  flex-direction: column;

  height: 100%;
`;

const Box = styled.div`
  overflow: scroll;

  height: 100%;

  margin: 0.8rem 0;
  border-top: 1px solid var(--color-grey-800);
  /* border-bottom: 1px solid var(--color-grey-800); */

  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledHeading = styled(Heading)`
  font-weight: 400;

  width: 100%;
  text-align: start;

  position: relative;
`;

const InfoBox = styled.div`
  border: 1px solid var(--color-grey-800);

  padding: 2.4rem;

  display: flex;
  justify-content: start;
  align-items: center;
`;

const StyledButton = styled.button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  color: var(--color-grey-0);

  cursor: pointer;
  font-size: 2.4rem;

  transition: var(--animation-fast);

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: translateY(-50%) scale(1.1);
  }
`;

export default function WishList() {
  const { wishlist } = useWishlist();
  const { closeMenu } = useMenu();

  return (
    <Container>
      <InfoBox>
        <StyledHeading>
          {wishlist?.length ? "Your wishlist" : "Your wishlist is empty"}
          <StyledButton onClick={closeMenu}>
            <HiXMark />
          </StyledButton>
        </StyledHeading>
      </InfoBox>

      {wishlist?.length ? (
        <Box>
          {wishlist.map((item) => (
            <WishListItem
              title={item.title}
              price={item.price}
              id={item.id}
              dateAdded={item.dateAdded}
              key={item.id}
            />
          ))}
        </Box>
      ) : null}
    </Container>
  );
}
