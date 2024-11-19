import React from "react";

const BooksFilter = () => {
  const { category } = useCateory;
  return (
    <div>
      {category.map((item) => {
        <button>{item.id}</button>;
      })}
      <div>
        <button>신간</button>
      </div>
    </div>
  );
};

export default BooksFilter;
