import { ring2 } from "ldrs";

export default function SpinnerFull() {
  ring2.register();

  return (
    <div>
      <l-ring-2
        size="40"
        stroke="5"
        stroke-length="0.25"
        bg-opacity="0.1"
        speed="0.8"
        color="white"
      ></l-ring-2>
    </div>
  );
}
