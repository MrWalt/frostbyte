export async function login({ email, password }) {
  const res = await fetch("http://localhost:8000/api/v1/users/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
}
