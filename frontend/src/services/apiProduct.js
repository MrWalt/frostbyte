import axios from "axios";

export async function getProducts(page, category, filter, sortBy) {
  let filterQuery = Object.keys(filter)
    .map((item) => {
      if (filter[item] !== null) return `${item}=${filter[item]}`;
      return null;
    })
    .filter((item) => item);

  filterQuery = `&` + filterQuery.join("&");

  const url = `http://localhost:8000/api/v1/products?page=${page}${
    category ? `&category=${category}` : ""
  }${sortBy ? `&sort=${sortBy}` : ""}${filterQuery !== "&" ? filterQuery : ""}`;

  // Will change this horrid sight later
  const res = await axios({
    method: "GET",
    url,
  });

  return res.data;
}

export async function getProduct(id) {
  if (!id) return null;

  const res = await axios({
    method: "GET",
    url: `http://localhost:8000/api/v1/products/${id}`,
  });

  return res.data;
}

export async function createProduct(data) {
  const res = await axios({
    url: "http://localhost:8000/api/v1/products",
    method: "POST",
    data,
    withCredentials: true,
  });

  return res.data;
}

export async function editProduct(data) {
  const res = await axios({
    url: `http://localhost:8000/api/v1/products/${data.get("id")}`,
    method: "PATCH",
    data,
    withCredentials: true,
  });

  return res.data;
}

export async function deleteProduct(id) {
  await axios({
    url: `http://localhost:8000/api/v1/products/${id}`,
    method: "DELETE",
    withCredentials: true,
  });

  return 1;
}
