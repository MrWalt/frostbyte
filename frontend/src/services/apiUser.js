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

export async function updatePassword(passwordData) {
  const res = await fetch("http://localhost:8000/api/v1/auth/update-password", {
    method: "POST",
    body: JSON.stringify(passwordData),
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  if (data.status === "fail") throw new Error(data.message);
  if (data.status === "error") throw new Error("Passwords must match");

  return data;
}
