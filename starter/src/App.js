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
  const [results, setResults] = useState();

  const updateBooks = (book, shelf) => {
    BooksAPI.update(book, shelf);
    const updatedBooks = books.map((currentBook) => {
      if (book.id === currentBook.id) {
        return {
          ...currentBook,
          shelf: shelf,
        };
      }
      return currentBook;
    });
    setBooks(updatedBooks);
  };

  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      setBooks(books);
    });
    BooksAPI.search().then((results) => {
      setResults(results);
      console.log(results);
    });
  }, []);

  return (
    <div className="app">
      {showSearchPage ? (
        <SearchPage setShowSearchpage={setShowSearchpage} results={results} />
      ) : (
        <div className="list-books">
          <PageTitle title="My Reads" />
          <div className="list-books-content">
            <Shelf
              updateBooks={updateBooks}
              key="currentlyReading"
              shelfTitle="Currently Reading"
              books={books.filter((book) => book.shelf === "currentlyReading")}
            />
            <Shelf
              updateBooks={updateBooks}
              key="wantToRead"
              shelfTitle="Want to Read"
              books={books.filter((book) => book.shelf === "wantToRead")}
            />
            <Shelf
              updateBooks={updateBooks}
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
