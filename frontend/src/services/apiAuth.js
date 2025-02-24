export async function login({ email, password }) {
  const res = await fetch("http://localhost:8000/api/v1/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  if (data.status === "fail") throw new Error(data.message);

  return data;
}

export async function logout() {
  await fetch("http://localhost:8000/api/v1/auth/logout", {
    method: "GET",
    credentials: "include",
  });
}

export async function isLoggedin() {
  const res = await fetch("http://localhost:8000/api/v1/auth/is-logged-in", {
    method: "GET",
    credentials: "include",
  });

  const data = await res.json();
  return data;
}
