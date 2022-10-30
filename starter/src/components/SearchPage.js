import Book from "./Book";

const SearchPage = ({
  searchBooks,
  setShowSearchpage,
  showSearchPage,
  results,
}) => {
  const handleSearch = (e) => {
    searchBooks(e.target.value);
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <a
          className="close-search"
          onClick={() => setShowSearchpage(!showSearchPage)}
        >
          Close
        </a>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="search-books-results">
        {results && (
          <ol className="books-grid">
            {results.map((result) => (
              <Book book={result} key={result.id} />
            ))}
          </ol>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
