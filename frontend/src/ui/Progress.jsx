import { HiOutlineCheck } from "react-icons/hi2";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 3fr 1fr 1fr;
  grid-template-rows: 2.4rem 1.8rem;
  gap: 1rem;
  row-gap: 0.4rem;

  div {
    padding: 0.4rem 0.8rem;
    font-size: 1.4rem;
    border: 1px solid var(--color-grey-800);

    &.completed {
      background-image: linear-gradient(
        to right,
        var(--color-brand-600) 60%,
        var(--color-brand-800)
      );
    }
  }
`;

const ProgressText = styled.span`
  font-size: 1.6rem;
  color: var(--color-grey-0);
  font-weight: 300;
  text-transform: uppercase;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;

  svg {
    font-size: 2rem;
  }
`;

const statusStages = {
  pending: 0,
  processed: 1,
  shipped: 2,
  pickup: 3,
  delivered: 4,
};

export default function Progress({ status }) {
  const currentStage = statusStages[status.toLowerCase()];
  return (
    <Container>
      {["Pending", "Processed", "Shipped", "Pickup", "Delivered"].map(
        (item) => (
          <ProgressText key={item}>
            {item}{" "}
            {currentStage > statusStages[item.toLowerCase()] ||
            currentStage === 4 ? (
              <HiOutlineCheck />
            ) : null}
          </ProgressText>
        )
      )}
      {["Pending", "Processed", "Shipped", "Pickup", "Delivered"].map(
        (item) => (
          <div
            key={item}
            className={`${
              currentStage > statusStages[item.toLowerCase()] ||
              currentStage === 4
                ? "completed"
                : ""
            }`}
          ></div>
        )
      )}
    </Container>
  );
}
