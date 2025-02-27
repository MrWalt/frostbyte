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

  if (data.status === "fail") throw new Error(data.message);

  return data;
}
