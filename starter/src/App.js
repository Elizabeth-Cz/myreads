import "./App.css";
import { useState, useEffect } from "react";
import Shelf from "./components/Shelf";
import * as BooksAPI from "./BooksAPI";
import MyReads from "./components/MyReads";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      setBooks(books);
      console.log(books);
    });
  }, []);

  return (
    <div className="app">
      {showSearchPage ? (
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
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
      ) : (
        <div className="list-books">
          <MyReads />
          <div className="list-books-content">
            <Shelf
              shelfTitle="Currently Reading"
              books={books.filter((book) => book.shelf === "currentlyReading")}
            />
            <Shelf
              shelfTitle="Want to Read"
              books={books.filter((book) => book.shelf === "wantToRead")}
            />
            <Shelf
              shelfTitle="Read"
              books={books.filter((book) => book.shelf === "read")}
            />
          </div>
          <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
