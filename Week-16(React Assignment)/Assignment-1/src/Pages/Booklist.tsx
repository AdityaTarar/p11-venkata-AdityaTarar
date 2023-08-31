import React from "react";
function Booklist() {
  const books = [
    { title: "Book 1", author: "Author 1", year: 2020 },
    { title: "Book 2", author: "Author 2", year: 2018 },
    { title: "Book 3", author: "Author 3", year: 2022 },
  ];
  return (
    <div>
      <h1>React Assignment 1</h1>
      <ul>
        {books.map((item: any) => {
          return (
            <li>
              <div>
                <h3>Title : {item.title}</h3>
                <h4>Author : {item.author}</h4>
                <h5>Year of Published : {item.year}</h5>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Booklist;
