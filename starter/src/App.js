import "./App.css";
import { useEffect, useState } from "react";
import SearchPage from "./components/SearchPage";
import PageTitle from "./components/PageTitle";
import Shelf from "./components/Shelf";
import * as BookAPI from "./BooksAPI";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    BookAPI.getAll().then((books) => setBooks(books));
  };

  const updateBooks = (book, shelf) => {
    console.log("book: ", book, "| shelf: ", shelf);
    BookAPI.update(book, shelf);
    const updatedBooks = books.map((b) => {
      book.shelf = b.shelf;
      b.shelf !== book.shelf
        ? console.log("book: ", book, " is not in ", shelf)
        : console.log("book ", book, " is in ", shelf);
      return updatedBooks;
    });
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="app">
      {showSearchPage ? (
        <SearchPage
          showSearchPage={showSearchPage}
          setShowSearchpage={setShowSearchpage}
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
                shelfTitle="Already Read"
                updateBooks={updateBooks}
                books={books.filter((book) => book.shelf === "read")}
                key="alreadyRead"
              />
            </div>
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
