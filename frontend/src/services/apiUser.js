export async function updateUser(user) {
  const res = await fetch("http://localhost:8000/api/v1/users/update-me", {
    method: "PATCH",
    body: JSON.stringify(user),
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  return data;
}

export async function getWishlist() {
  const res = await fetch("http://localhost:8000/api/v1/users/wishlist", {
    method: "GET",
    credentials: "include",
  });

  const data = await res.json();
  return data;
}

export async function updateWishlist({ product, type }) {
  const res = await fetch("http://localhost:8000/api/v1/users/wishlist", {
    method: "POST",
    body: JSON.stringify({ product, type }),
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  if (data.status === "error" || data.status === "fail")
    throw new Error(data.message);

  return data;
}

export async function getUsers(page, search) {
  const res = await fetch(
    `http://localhost:8000/api/v1/users?page=${page}${
      search ? `&search=${search}` : ""
    }`,
    {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await res.json();
  return data;
}

export async function getUser(userId) {
  const res = await fetch(`http://localhost:8000/api/v1/users/${userId}`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  return data;
}

export async function editUser(user) {
  const res = await fetch(`http://localhost:8000/api/v1/users/${user.id}`, {
    method: "POST",
    body: JSON.stringify(user),
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  if (data.status === "error" || data.status === "fail")
    throw new Error(data.message);
  return data;
}

export async function getUserOrders(userId, page = 1) {
  const res = await fetch(
    `http://localhost:8000/api/v1/orders/user/${userId}?page=${page}`,
    {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await res.json();
  if (data.status === "error" || data.status === "fail")
    throw new Error(data.message);
  return data;
}
