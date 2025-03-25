import { HiOutlineCheck } from "react-icons/hi2";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 2fr 1fr;
  grid-template-rows: 2.4rem 1.8rem;
  gap: 1rem;
  row-gap: 0.4rem;
`;

const ProgressContainer = styled.div`
  font-size: 1.4rem;
  border: 1px solid var(--color-grey-800);
`;

const ProgressFill = styled.div`
  padding: 0.4rem 0.8rem;
  height: 100%;
  width: ${({ $progressPercent }) => $progressPercent}%;

  &.completed {
    background-color: var(--color-brand-600);
  }

  &.active {
    background: linear-gradient(
      90deg,
      var(--color-brand-600),
      var(--color-brand-800),
      var(--color-brand-600)
    );
    background-size: 200% 100%;

    animation: pulseGradient 2s infinite cubic-bezier(0.4, 0, 0.2, 1);
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
  processing: 1,
  shipped: 2,
  outfordelivery: 3,
  delivered: 4,
};

// Will change these hardcoded values later when I add dynamic deliveryDate

const statusTime = {
  pending: 3200,
  processing: 7200,
  shipped: 432000,
  outfordelivery: 518400,
};

export default function Progress({ status, dateOrdered }) {
  const currentStage = statusStages[status.toLowerCase()];
  const currentTime = new Date();
  const orderTime = new Date(dateOrdered);
  const timeElapsedSeconds = (currentTime - orderTime) / 1000;

  function calculateProgressPercentage() {
    if (currentStage === 4) return 100;
    const stageKey = Object.keys(statusStages)[currentStage];
    return Math.min((timeElapsedSeconds / statusTime[stageKey]) * 100, 100);
  }

  const progressPercentage =
    currentStage < 4 ? calculateProgressPercentage() : 100;

  return (
    <Container>
      {[
        "Pending",
        "Processing",
        "Shipped",
        "Out for Delivery",
        "Delivered",
      ].map((item) => (
        <ProgressText key={item}>
          {item}{" "}
          {currentStage > statusStages[item.toLowerCase()] ||
          currentStage === 4 ? (
            <HiOutlineCheck />
          ) : null}
        </ProgressText>
      ))}
      {[
        "Pending",
        "Processing",
        "Shipped",
        "Out for Delivery",
        "Delivered",
      ].map((item) => (
        <ProgressContainer key={item}>
          <ProgressFill
            $progressPercent={
              currentStage === statusStages[item.toLowerCase().replace(" ", "")]
                ? progressPercentage
                : currentStage >
                  statusStages[item.toLowerCase().replace(" ", "")]
                ? 100
                : 0
            }
            className={`${
              currentStage >
                statusStages[item.toLowerCase().replace(" ", "")] ||
              currentStage === 4
                ? "completed"
                : ""
            }${
              currentStage === statusStages[item.toLowerCase().replace(" ", "")]
                ? "active"
                : ""
            }`}
          ></ProgressFill>
        </ProgressContainer>
      ))}
    </Container>
  );
}
