const useBookFilter = (books: any[], searchTerm: string) => {
  const filteredBooks = books.filter(
    (book: { title: string; author: string }) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return filteredBooks;
};

export default useBookFilter;
