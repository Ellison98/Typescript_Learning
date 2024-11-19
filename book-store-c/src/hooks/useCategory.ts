import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const useCategory = () => {
  const location = useLocation();
  const [category, useCategory] = useState([]);
  return <div></div>;
};

export default useCategory;
