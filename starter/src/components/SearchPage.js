import Book from "./Book";

const SearchPage = ({
  searchBooks,
  setShowSearchpage,
  showSearchPage,
  results = [],
  updateBooks,
  error,
}) => {
  const handleSearch = (e) => {
    searchBooks(e.target.value);
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <button
          className="close-search"
          onClick={() => {
            setShowSearchpage(!showSearchPage);
          }}
        >
          Close
        </button>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="search-books-results">
        {error && <p>{error}</p>}
        <ol className="books-grid">
          {results &&
            results.map((book) => (
              <Book book={book} key={book.id} updateBooks={updateBooks} />
            ))}
        </ol>
      </div>
    </div>
  );
};

export default SearchPage;
