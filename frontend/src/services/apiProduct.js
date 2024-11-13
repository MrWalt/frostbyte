export async function getProducts(page, category) {
  const res = await fetch(
    `http://localhost:8000/api/v1/products?page=${page}${
      category ? `&category=${category}` : ""
    }`
  );

  const data = await res.json();

  return data;
}

export async function getProduct(id) {
  const res = await fetch(`http://localhost:8000/api/v1/products/${id}`);

  const { data } = await res.json();

  return data;
}
