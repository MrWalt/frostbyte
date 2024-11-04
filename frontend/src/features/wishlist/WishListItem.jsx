import styled from "styled-components";
import Price from "../../ui/Price";
import { HiXMark } from "react-icons/hi2";
import { useWishlist } from "./WishlistContext";

const Box = styled.div`
  width: 100%;
  height: 28rem;

  font-size: 1.6rem;
  color: var(--color-grey-0);

  padding: 1.2rem;

  text-align: start;

  border: 1px solid var(--color-grey-800);

  position: relative;

  &:not(:last-of-type) {
    margin-bottom: 1.2rem;
  }
`;

const Image = styled.div`
  height: 65%;
`;

const Title = styled.p`
  font-size: 1.8rem;
  margin-bottom: 0.4rem;
`;

const DateAdded = styled.p`
  font-size: 1.2rem;

  color: var(--color-grey-400);

  position: absolute;
  bottom: 1.2rem;
  left: 1.2rem;
`;

const DeleteButton = styled.button`
  width: 2.8rem;
  height: 2.8rem;

  position: absolute;
  top: 1.2rem;
  right: 1.2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--color-grey-900);
  border: 1px solid var(--color-grey-800);

  cursor: pointer;

  transition: var(--animation-fast);

  &:hover {
    background-color: var(--color-grey-800);
  }

  svg {
    font-size: 1.8rem;
    color: var(--color-grey-0);
  }
`;

export default function WishListItem({ title, price, dateAdded, id }) {
  const { removeItem } = useWishlist();

  let filteredTitle = title;
  if (title.length > 38) filteredTitle = title.slice(0, 38).concat("...");

  return (
    <Box>
      <DeleteButton onClick={() => removeItem(id)}>
        <HiXMark />
      </DeleteButton>
      <Image>IMAGE</Image>

      <Title>{filteredTitle}</Title>
      <Price size="small" price={price} />

      <DateAdded>Added on {dateAdded}</DateAdded>
    </Box>
  );
}
