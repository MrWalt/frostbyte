import { useParams } from "react-router-dom";

export default function SpecificProducts() {
  const { product } = useParams();
  return <div>This is the product page specifically for {product}</div>;
}
