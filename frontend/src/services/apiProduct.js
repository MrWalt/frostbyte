export async function getProducts(page, category, filter, sortBy) {
  // Will change this horrid sight later
  const res = await fetch(
    `http://localhost:8000/api/v1/products?page=${page}${
      category ? `&category=${category}` : ""
    }${filter.manufacturer ? `&manufacturer=${filter.manufacturer}` : ""}${
      filter.stockOnly ? `&stock=${filter.stockOnly}` : ""
    }${filter.price.min ? `&minPrice=${filter.price.min}` : ""}${
      filter.price.max ? `&maxPrice=${filter.price.max}` : ""
    }${sortBy ? `&sort=${sortBy}` : ""}`
  );

  const data = await res.json();

  return data;
}

export async function getProduct(id) {
  const res = await fetch(`http://localhost:8000/api/v1/products/${id}`);

  const { data } = await res.json();

  return data;
}

export async function createProduct(newProduct) {
  const res = await fetch(`http://localhost:8000/api/v1/products`, {
    method: "POST",
    body: JSON.stringify(newProduct),
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const { data } = await res.json();
  console.log(data);
  return data;
}
