import { useEffect, useState } from "react";
import * as BooksAPI from "../BooksAPI";

const SearchPage = ({ setShowSearchpage, showSearchPage, results }) => {
  const [searchOutput, setSearchOutput] = useState();
  const handleSearch = (e) => {
    searchBooks(e.target.value);
  };

  const searchBooks = async (q) => {
    BooksAPI.search(q).then((results) => {
      console.log(results);
    });
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
        <ol className="books-grid">
          {results && results.map((result) => console.log(result))}
        </ol>
      </div>
    </div>
  );
};

export default SearchPage;
