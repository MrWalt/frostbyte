import axios from "axios";

export async function updateUser(data) {
  const res = await axios({
    url: "http://localhost:8000/api/v1/users/update-me",
    method: "PATCH",
    data,
    withCredentials: true,
  });

  return res.data;
}

export async function getWishlist() {
  const res = await axios({
    url: "http://localhost:8000/api/v1/users/wishlist",
    method: "GET",
    withCredentials: true,
  });

  return res.data;
}

export async function updateWishlist(data) {
  const res = await axios("http://localhost:8000/api/v1/users/wishlist", {
    method: "POST",
    data,
    withCredentials: true,
  });

  return res.data;
}

export async function getUsers(page, search) {
  const url = `http://localhost:8000/api/v1/users?page=${page}${
    search ? `&search=${search}` : ""
  }`;

  const res = await axios({
    url,
    method: "GET",
    withCredentials: true,
  });

  return res.data;
}

export async function getUser(userId) {
  const url = `http://localhost:8000/api/v1/users/${userId}`;

  const res = await axios({
    method: "GET",
    url,
    withCredentials: true,
  });

  return res.data;
}

export async function editUser(data) {
  const url = `http://localhost:8000/api/v1/users/${data.id}`;

  const res = await axios({ url, method: "POST", data, withCredentials: true });

  return res.data;
}

export async function getUserOrders(userId, page = 1) {
  const url = `http://localhost:8000/api/v1/orders/user/${userId}?page=${page}`;

  const res = await axios({
    method: "GET",
    url,
    withCredentials: true,
  });

  return res.data;
}
