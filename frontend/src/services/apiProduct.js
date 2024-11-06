export async function getProducts() {
  const res = await fetch("http://localhost:8000/api/v1/products");

  const { data } = await res.json();
  return data;
}
