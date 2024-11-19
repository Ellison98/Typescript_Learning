import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Book } from "../models/book.model";

export const useBooks = () => {
  const location = useLocation();

  const [books, setBooks] = useState<Book[]>([]);
  const [pagination, setPagination] = useState<Pagination>;
};
