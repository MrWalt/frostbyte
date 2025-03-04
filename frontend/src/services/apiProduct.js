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
  if (!id) return null;

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
  return data;
}

export async function editProduct(updatedProduct) {
  const res = await fetch(
    `http://localhost:8000/api/v1/products/${updatedProduct.id}`,
    {
      method: "PATCH",
      body: JSON.stringify(updatedProduct),
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const { data } = await res.json();

  if (data.status === "error") throw new Error("There was an error");

  return data;
}
