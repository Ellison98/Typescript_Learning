import React, { useEffect, useState } from "react";

const useOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

  useEffect(() => {
    fetchOrders().then((orders) => {
      setOrders(orders);
    });
  }, []);

  const selectOrderItem = (orderId: number) => {
    fetchOrder(orderId).then((orderDetail) => {
      setSelectedItemId(orderId);
    });
  };
  return { orders, selectOrderItem, selectedItemId };
};

export default useOrders;
