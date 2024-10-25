import styled from "styled-components";
import WishListItem from "./WishListItem";
import { useSelector } from "react-redux";
import { getWishlist } from "./wishlistSlice";

const Box = styled.div`
  padding: 0.8rem;
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
        <p>Your Wishlist Is Empty</p>
      )}
    </Box>
  );
}
