export async function createOrder(order) {
  const res = await fetch("http://localhost:8000/api/v1/orders", {
    method: "POST",
    body: JSON.stringify(order),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  console.log(data);
  if (data.status === "error") throw new Error(data.message);

  return data;
}

export async function getOrders(userId) {
  const res = await fetch(`http://localhost:8000/api/v1/orders?user=${userId}`);

  const data = await res.json();

  if (data.status === "error") throw new Error(data.message);

  return data;
}
