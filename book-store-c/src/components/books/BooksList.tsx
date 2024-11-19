import React from "react";
import { Book } from "../../models/book.model";
import styled from "styled-components";
import BooksItem from "./BooksItem";

const dumyBook: Book = {
  id: 1,
  title: "dumyBook",
  img: 5,
  category_id: 1,
  form: "dumyBook sum",
  isbn: "dumyBook isbn",
  summary: "dumyBook sum",
  detail: "dumyBook detail",
  author: "dumyBook author",
  pages: 1,
  contents: "dumyBook",
  price: 10000,
  likes: 1,
  pubDate: "2024-01-01",
};

const BooksList = () => {
  return (
    <BooksListStyle>
      <BooksItem book={dumyBook} />
    </BooksListStyle>
  );
};

const BooksListStyle = styled.div``;

export default BooksList;
