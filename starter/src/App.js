import "./App.css";
import { useState, useEffect } from "react";
import Shelf from "./components/Shelf";
import * as BooksAPI from "./BooksAPI";
import PageTitle from "./components/PageTitle";
import SearchPage from "./components/SearchPage";
import SearchButton from "./components/SearchButton";

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
        <SearchPage setShowSearchpage={setShowSearchpage} />
      ) : (
        <div className="list-books">
          <PageTitle title="My Reads" />
          <div className="list-books-content">
            <Shelf
              key="currentlyReading"
              shelfTitle="Currently Reading"
              books={books.filter((book) => book.shelf === "currentlyReading")}
            />
            <Shelf
              key="wantToRead"
              shelfTitle="Want to Read"
              books={books.filter((book) => book.shelf === "wantToRead")}
            />
            <Shelf
              key="read"
              shelfTitle="Read"
              books={books.filter((book) => book.shelf === "read")}
            />
          </div>
          <SearchButton
            setShowSearchpage={setShowSearchpage}
            showSearchPage={showSearchPage}
          />
        </div>
      )}
    </div>
  );
}

export default App;
