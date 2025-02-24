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
