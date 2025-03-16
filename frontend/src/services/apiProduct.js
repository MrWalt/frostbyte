export async function getProducts(page, category, filter, sortBy) {
  let filterQuery = Object.keys(filter)
    .map((item) => {
      if (filter[item] !== null) return `${item}=${filter[item]}`;
      return null;
    })
    .filter((item) => item);

  filterQuery = `&` + filterQuery.join("&");

  // Will change this horrid sight later
  const res = await fetch(
    `http://localhost:8000/api/v1/products?page=${page}${
      category ? `&category=${category}` : ""
    }${sortBy ? `&sort=${sortBy}` : ""}${
      filterQuery !== "&" ? filterQuery : ""
    }`
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

  if (data.status === "error" || data.status === "fail")
    throw new Error(data.message);

  return data;
}

export async function deleteProduct(id) {
  await fetch(`http://localhost:8000/api/v1/products/${id}`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return 1;
}
