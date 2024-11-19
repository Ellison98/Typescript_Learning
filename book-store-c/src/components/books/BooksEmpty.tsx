import React from "react";
import Title from "../Title";

const BooksEmpty = () => {
  return (
    <div>
      <Title size="large" color="secondary">
        검색 결과가 없다.
      </Title>
      <p>
        <link rel="/book" href="">
          전체 검색 결과로 이동
        </link>
      </p>
    </div>
  );
};

export default BooksEmpty;
