export default function useUser() {
  const user = {
    userName: "John Marston",
    email: "johnmarston@gmail.com",
    role: "user",
    address: "West Town Road",
    country: "Germany",
    city: "Berlin",
    phone: "+398 79213441",
    isAuthenticated: true,
    orders: [
      {
        orderId: 7263187263812,
        items: [
          "GTX 1080 Ti Founders Edition 11GB",
          "Glorious Model O Wireless",
        ],
        totalPrice: "1001.21",
        orderStatus: "Shipped",
        date: "28/10/2024",
      },
      {
        orderId: 3621361287361,
        items: ["DIMM DDR5 64GB 6400MHz Kit"],
        totalPrice: "225.71",
        orderStatus: "Delivered",
        date: "11/8/2024",
      },
      {
        orderId: 31231254642634,
        items: ["Ryzen 9 5900X 4.6GHz", "Kingston USB Flash Drive 512GB"],
        totalPrice: "432.55",
        orderStatus: "Delivered",
        date: "01/80/2024",
      },
      {
        orderId: 78361283616282,
        items: ["iPhone 16 Pro Max 512GB"],
        totalPrice: "1262.03",
        orderStatus: "Delivered",
        date: "08/12/2023",
      },
    ],
  };

  return user;
}
