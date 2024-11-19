import React from "react";
import Title from "../components/Title";

const OrderList = () => {
  const { orders } = useOrders();
  return (
    <>
      <Title size="large">주문 내역</Title>
      <div>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>주문일자</th>
              <th>주소</th>
              <th>수령인</th>
              <th>전화번호</th>
              <th>대표상품명</th>
              <th>수량</th>
              <th>금액</th>
            </tr>
          </thead>
        </table>
        <tbody>
          {orders.map((orders) => {
            <tr>
              <td>{orders.id}</td>
              <td>{orders.address}</td>
              <td>{orders.receiver}</td>
              <td>{orders.contact}</td>
              <td>{orders.bookTitle}</td>
              <td>{orders.totalQuantity}</td>
            </tr>;
          })}
          <td>
            <button>자세히</button>
          </td>
        </tbody>
      </div>
    </>
  );
};

export default OrderList;
