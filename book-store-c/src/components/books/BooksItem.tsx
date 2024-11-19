import React from "react";
import { Book } from "../../models/book.model";

interface Props {
  book: Book;
}

const BooksItem = ({ book }: Props) => {
  return (
    <div>
      <div className="img">
        <img src="" alt="" />
      </div>
      <div className="content">
        <h2>{book.title}</h2>
        <p>{book.summary}</p>
        <p>{book.author}</p>
        <p>{book.price}</p>
      </div>
    </div>
  );
};

export default BooksItem;
