import React, { useEffect } from "react";

const viewOptions = [
  {
    value: "list",
    icon: <FaList />,
  },
  {
    value: "grid",
    icon: <FaList />,
  },
];

const BooksViewSwitcher = () => {
  const handleSwitch = (value: string) => {
    const newSearchParams = new URLSearchParams(searchParams);

    newSearchParams.set(value, value);
    setSearchParams(newSearchParams);
  };

  useEffect(() => {
    if (!searchParams.get(values)) {
      handleSwitch("grid");
    }
  });
  return (
    <div>
      {viewOptions.map((i) => {
        <button key={i.vlaue}></button>;
      })}
    </div>
  );
};

export default BooksViewSwitcher;
