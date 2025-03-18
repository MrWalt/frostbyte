export async function createOrder(order) {
  const res = await fetch("http://localhost:8000/api/v1/orders", {
    method: "POST",
    body: JSON.stringify(order),
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

export async function getOrders(page) {
  const res = await fetch(
    `http://localhost:8000/api/v1/users/my-orders?page=${page || 1}`,
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

export async function getOrder(orderId) {
  const res = await fetch(`http://localhost:8000/api/v1/orders/${orderId}`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  return data;
}
