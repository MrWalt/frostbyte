import axios from "axios";

export async function createOrder(data) {
  const res = await axios({
    url: "http://localhost:8000/api/v1/orders",
    method: "POST",
    data,
    withCredentials: true,
  });

  return res.data;
}

export async function getOrders(page) {
  const res = await axios({
    url: `http://localhost:8000/api/v1/users/my-orders?page=${page || 1}`,
    method: "GET",
    withCredentials: true,
  });

  return res.data;
}

export async function getOrder(orderId) {
  const res = await axios({
    url: `http://localhost:8000/api/v1/orders/${orderId}`,
    method: "GET",
    withCredentials: true,
  });

  return res.data;
}

export async function getCheckoutSession(id) {
  const res = await axios({
    url: `http://localhost:8000/api/v1/orders/checkout-session/${id}`,
    method: "GET",
    withCredentials: true,
  });

  return res.data;
}

export async function refundOrder(id) {
  const res = await axios({
    url: `http://localhost:8000/api/v1/orders/${id}`,
    method: "POST",
    withCredentials: true,
  });

  return res.data;
}
