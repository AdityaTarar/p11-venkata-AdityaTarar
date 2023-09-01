import React from "react";

interface BookProps {
  title: string;
  author: string;
  year: number;
}

const Book: React.FC<BookProps> = ({ title, author, year }) => {
  return (
    <div className="book">
      <h3>{title}</h3>
      <p>Author: {author}</p>
      <p>Year: {year}</p>
    </div>
  );
};

export default React.memo(Book);
