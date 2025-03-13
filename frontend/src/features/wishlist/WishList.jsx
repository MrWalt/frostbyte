import styled from "styled-components";
import WishListItem from "./WishListItem";
import { useWishlist } from "../wishlist/useWishlist";
import Heading from "../../ui/Heading";
import { useMenu } from "../../contexts/MenuContext";
import { HiXMark } from "react-icons/hi2";
import Loader from "../../ui/Loader";
import { Link } from "react-router-dom";

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
  border-bottom: 1px solid var(--color-grey-800);
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

const LoaderContainer = styled.div`
  width: 100%;
  margin-top: 4.8rem;
`;

const StyledLink = styled(Link)`
  color: var(--color-brand-500) !important;
  transition: var(--animation-fast);

  &:hover {
    color: var(--color-brand-300) !important;
  }
`;

export default function WishList() {
  const { closeMenu } = useMenu();
  const { wishlist, isLoading } = useWishlist();
  return (
    <Container>
      <InfoBox>
        <StyledHeading $variation="tertiary">
          {isLoading && "Your wishlist"}
          {wishlist?.length ? "Your wishlist" : ""}
          {!wishlist?.length && !isLoading && "Your wishlist is empty"}
          <StyledButton onClick={closeMenu}>
            <HiXMark />
          </StyledButton>
        </StyledHeading>
      </InfoBox>
      {!isLoading ? (
        wishlist?.length ? (
          <Box>
            {wishlist.map((item) => (
              <WishListItem
                title={item.product.title}
                price={item.product.price}
                id={item.product.id}
                dateAdded={item.dateAdded}
                key={item.product.id}
                image={item.product.image}
              />
            ))}
          </Box>
        ) : null
      ) : (
        <LoaderContainer>
          <Loader size={60} />
        </LoaderContainer>
      )}
    </Container>
  );
}

function Unauthorized() {
  const { closeMenu } = useMenu();
  return (
    <Container>
      <InfoBox>
        <StyledHeading $variation="tertiary">
          You must be logged in, <StyledLink to="./login">Login now</StyledLink>
          <StyledButton onClick={closeMenu}>
            <HiXMark />
          </StyledButton>
        </StyledHeading>
      </InfoBox>
    </Container>
  );
}

WishList.Unauthorized = Unauthorized;
