import styled from "styled-components";
import Price from "../../ui/Price";
import { HiXMark } from "react-icons/hi2";
import { format } from "date-fns";
import { useUpdateWishlist } from "./useUpdateWishlist";
import { Link } from "react-router-dom";

const Box = styled.div`
  width: 100%;
  height: 14rem;

  font-size: 1.6rem;
  color: var(--color-grey-0);

  padding: 1.2rem;
  margin-bottom: 0.8rem;

  text-align: start;

  border: 1px solid var(--color-grey-800);

  position: relative;

  display: flex;
  gap: 1.2rem;

  &:first-of-type {
    margin-top: 0.8rem;
  }
`;

const InfoBox = styled.div`
  /* Added this cause the date was sometimes center, might cause overlap issues. */
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Image = styled.img`
  height: 100%;
  width: 12rem;

  flex-shrink: 0;

  text-align: center;
`;

const Title = styled.p`
  font-size: 1.8rem;
  margin-bottom: 0.4rem;

  width: 80%;
`;

const ExtraInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

const DateAdded = styled.p`
  font-size: 1.2rem;

  color: var(--color-grey-400);
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

export default function WishListItem({
  title,
  price,
  dateAdded,
  id,
  image,
  wishlistId,
}) {
  const { updateWishlist, isPending } = useUpdateWishlist();

  return (
    <Box>
      <DeleteButton
        disabled={isPending}
        onClick={() => updateWishlist({ product: wishlistId, type: "remove" })}
      >
        <HiXMark className={`${isPending ? "spin" : ""}`} />
      </DeleteButton>
      <Link to={`/product/${id}`}>
        <Image src={`/img/${image}`} />
      </Link>

      <InfoBox>
        <Title>{title}</Title>

        <ExtraInfo>
          <Price size="medium" price={price} />
          <DateAdded>Added on {format(dateAdded, "dd/MM/yy")}</DateAdded>
        </ExtraInfo>
      </InfoBox>
    </Box>
  );
}
