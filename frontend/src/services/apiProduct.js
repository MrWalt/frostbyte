export async function getProducts() {
  const res = await fetch("http://localhost:8000/api/v1/products");

  const { data } = await res.json();

  return data;
}

export async function getProduct(id) {
  const res = await fetch(`http://localhost:8000/api/v1/products/${id}`);

  const { data } = await res.json();

  return data;
}
