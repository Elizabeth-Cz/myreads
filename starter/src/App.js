import "./App.css";
import { useEffect, useState } from "react";
import SearchPage from "./components/SearchPage";
import PageTitle from "./components/PageTitle";
import Shelf from "./components/Shelf";
import * as BooksAPI from "./BooksAPI";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books, setBooks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState("");

  const getBooks = async () => {
    BooksAPI.getAll().then((books) => setBooks(books));
  };

  const searchBooks = async (query) => {
    BooksAPI.search(query).then((response) => {
      if (!response) {
        setError("No results");
        setSearchResults([]);
        return;
      }
      if (response.error) {
        setError("No results found");
        setSearchResults([]);
        return;
      }
      setSearchResults(response);
    });
  };

  const updateBooks = (book, shelf) => {
    BooksAPI.update(book, shelf);
    const updatedBooks = books.map((currentBook) => {
      if (currentBook.id === book.id) {
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

  useEffect(() => {
    getBooks();
  }, [searchResults]);

  return (
    <div className="app">
      {showSearchPage ? (
        <SearchPage
          showSearchPage={showSearchPage}
          setShowSearchpage={setShowSearchpage}
          searchBooks={searchBooks}
          searchResults={searchResults}
          setSearchResults={setSearchResults}
          error={error}
          updateBooks={updateBooks}
          books={books}
        />
      ) : (
        <div className="list-books">
          <PageTitle title="My Reads App" />
          <div className="list-books-content">
            <div>
              <Shelf
                shelfTitle="Currently Reading"
                books={books.filter(
                  (book) => book.shelf === "currentlyReading"
                )}
                key="currentlyReading"
                updateBooks={updateBooks}
              />
              <Shelf
                shelfTitle="Want to Read"
                books={books.filter((book) => book.shelf === "wantToRead")}
                updateBooks={updateBooks}
                key="wantToRead"
              />
              <Shelf
                shelfTitle="Read"
                updateBooks={updateBooks}
                books={books.filter((book) => book.shelf === "read")}
                key="read"
              />
            </div>
          </div>
          <div className="open-search">
            <button onClick={() => setShowSearchpage(!showSearchPage)}>
              Add a book
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
