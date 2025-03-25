import axios from "axios";

export async function login(data) {
  const res = await axios({
    method: "POST",
    url: "http://localhost:8000/api/v1/auth/login",
    data,
    withCredentials: true,
  });

  return res.data;
}

export async function signup(data) {
  const res = await axios({
    url: "http://localhost:8000/api/v1/auth/signup",
    method: "POST",
    data,
    withCredentials: true,
  });

  return res.data;
}

export async function logout() {
  await axios({
    url: "http://localhost:8000/api/v1/auth/logout",
    method: "GET",
    withCredentials: true,
  });
}

export async function isLoggedin() {
  const res = await axios({
    url: "http://localhost:8000/api/v1/auth/is-logged-in",
    method: "GET",
    withCredentials: true,
  });

  return res.data;
}

export async function updatePassword(data) {
  const res = await axios({
    url: "http://localhost:8000/api/v1/auth/update-password",
    method: "POST",
    withCredentials: true,
    data,
  });

  return res.data;
}
