import { useEffect, useState } from "react";
import Book from "./Book";
const SearchPage = ({
  showSearchPage,
  setShowSearchpage,
  searchBooks,
  searchResults,
  setSearchResults,
  error,
  updateBooks,
  books,
}) => {
  const [compared, setCompared] = useState(null);

  useEffect(() => {
    if (searchResults) {
      const double = searchResults.map((b) => {
        const existingBook = books.find((book) => book.id === b.id);
        if (existingBook) {
          return existingBook;
        }
        return b;
      });
      setCompared(double);
    }
  }, [searchResults, books]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <button
          className="close-search"
          onClick={() => {
            setShowSearchpage(!showSearchPage);
            setSearchResults();
          }}
        >
          Close
        </button>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(e) => searchBooks(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {compared ? (
            compared.map((book) => (
              <Book book={book} key={book.id} updateBooks={updateBooks} />
            ))
          ) : (
            <p>{error}</p>
          )}
        </ol>
      </div>
    </div>
  );
};

export default SearchPage;
