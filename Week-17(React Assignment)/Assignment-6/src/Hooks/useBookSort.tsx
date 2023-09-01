import { useMemo } from "react";

const useBookSort = (books: any, sortCriteria: any) => {
  const sortedBooks = useMemo(() => {
    if (sortCriteria === "") {
      return books;
    } else if (sortCriteria === "title") {
      return [...books].sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortCriteria === "author") {
      return [...books].sort((a, b) => a.author.localeCompare(b.author));
    } else if (sortCriteria === "year") {
      return [...books].sort((a, b) => a.year - b.year);
    }
  }, []);
  return sortedBooks;
};
export default useBookSort;
