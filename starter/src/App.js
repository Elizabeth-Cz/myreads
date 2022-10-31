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
  const [error, setError] = useState("");

  const updateBooks = (book, shelf) => {
    console.log(book);
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
    if (!books.find((b) => b.id === book.id)) {
      updatedBooks.push(book);
    }
    setBooks(updatedBooks);
  };

  const searchBooks = async (query) => {
    BooksAPI.search(query)
      .then((results) => {
        if (results.error) {
          setError("no results found");
          setResults([]);
          return;
        }
        if (results.length === 0) {
          setResults([]);
          return;
        }
        setResults(results);
        setError("");
      })
      .catch((err) => setError(JSON.stringify(err)));
  };

  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      setBooks(books);
    });
  }, []);

  return (
    <div className="app">
      {showSearchPage ? (
        <SearchPage
          error={error}
          searchBooks={searchBooks}
          setShowSearchpage={setShowSearchpage}
          showSearchPage={showSearchPage}
          results={results}
          updateBooks={updateBooks}
        />
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
