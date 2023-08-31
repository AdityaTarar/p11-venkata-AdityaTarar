import React, { useEffect, useState } from "react";
import useBookFilter from "../Hooks/useBookFilter";
import useBookSort from "../Hooks/useBookSort";
import BookForm from "./BookForm";

function Booklist() {
  const books = [
    { title: "Book 1", author: "Author 1", year: 2020 },
    { title: "Book 2", author: "Author 2", year: 2018 },
    { title: "Book 3", author: "Author 3", year: 2022 },
  ];
  const [bookData, setBookData] = useState(books);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortCriteria, setSortCriteria] = useState("");
  const handleNewBook = (newBook: any) => {
    setBookData([...bookData, newBook]);
  };
  const handleDelete = (title: any) => {
    setBookData(bookData.filter((book: any) => book.title !== title));
  };
  const filterreddata = useBookFilter(books, searchQuery);
  const sortedData: any = useBookSort(books, sortCriteria);
  useEffect(() => {
    setBookData(filterreddata);
  }, [searchQuery]);
  useEffect(() => {
    setBookData(sortedData);
  }, [sortCriteria]);

  return (
    <div style={{ display: "flex", padding: 32, flexDirection: "column" }}>
      <div style={{ display: "flex", flexDirection: "row", marginBottom: 8 }}>
        {bookData?.length > 0 ? (
          bookData?.map((book: any) => {
            return (
              <div
                style={{
                  borderWidth: 1,
                  borderRadius: "10px",
                  padding: 16,
                  borderStyle: "solid",
                  marginRight: 16,
                }}
              >
                <h3>Title : {book.title}</h3>
                <h4>Author : {book.author}</h4>
                <h5>Year of Published : {book.year}</h5>
                <button onClick={() => handleDelete(book.title)}>
                  Delete book
                </button>
              </div>
            );
          })
        ) : (
          <h3>Book list currently empty</h3>
        )}
      </div>
      <div>
        <h2>Add new Book</h2>
        <BookForm handleNewBook={handleNewBook} />
      </div>
      <div>
        <h3>Filter Books</h3>
        <input
          placeholder="serach from title"
          value={searchQuery}
          type={"text"}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div>
        <h3>Sorting criteria</h3>
        <select onChange={(e) => setSortCriteria(e.target.value)}>
          <option value={"title"}>Title</option>
          <option value={"author"}>Author</option>
          <option value={"year"}>year</option>
        </select>
      </div>
    </div>
  );
}

export default Booklist;
