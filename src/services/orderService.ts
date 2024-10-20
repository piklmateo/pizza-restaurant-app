import { Order } from "../store/orderSlice/orderSlice";

export const createOrder = async (order: Order) => {
  try {
    const res = await fetch("http://localhost:9000/orders", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(order),
    });

    if (!res.ok) throw new Error("Error while creating order");

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("error: ", error);
  }
};
