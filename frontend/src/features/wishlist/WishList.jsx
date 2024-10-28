import styled from "styled-components";
import WishListItem from "./WishListItem";
import { useSelector } from "react-redux";
import { getWishlist } from "./wishlistSlice";

const Box = styled.div`
  padding: 0.8rem;
`;

const StyledSpan = styled.span`
  font-size: 1.6rem;
  text-transform: capitalize;
  text-align: center;

  display: inline-block;

  width: 100%;
  margin-top: 2.4rem;
`;

export default function WishList() {
  const wishlist = useSelector(getWishlist);

  return (
    <Box>
      {wishlist?.length ? (
        wishlist.map((item) => (
          <WishListItem
            title={item.title}
            price={item.price}
            id={item.id}
            dateAdded={item.dateAdded}
            key={item.id}
          />
        ))
      ) : (
        <StyledSpan>Your Wishlist Is Empty</StyledSpan>
      )}
    </Box>
  );
}
