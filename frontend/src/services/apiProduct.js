export async function getProducts(page, category, filter) {
  const res = await fetch(
    `http://localhost:8000/api/v1/products?page=${page}${
      category ? `&category=${category}` : ""
    }${filter ? `&manufacturer=${filter}` : ""}`
  );

  const data = await res.json();

  return data;
}

export async function getProduct(id) {
  const res = await fetch(`http://localhost:8000/api/v1/products/${id}`);

  const { data } = await res.json();

  return data;
}
