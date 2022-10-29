import { useEffect, useState } from "react";
// import BookShelfChanger from "./BookShelfChanger";
// import * as BooksAPI from "../BooksAPI";

const Book = ({ book, updateBooks }) => {
  const [shelf, setShelf] = useState(book.shelf);

  const changeShelf = (e) => {
    setShelf(e.target.value);
  };

  useEffect(() => {
    if (book.shelf !== shelf) {
      updateBooks(book, shelf);
    }
  }, [book, shelf, updateBooks]);

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${book.imageLinks.thumbnail})`,
          }}
        ></div>
        {/* <BookShelfChanger shelf={shelf} changeShelf={changeShelf} /> */}
        <div className="book-shelf-changer">
          <select defaultValue={shelf} onChange={changeShelf}>
            <option value="none" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors[0]}</div>
    </div>
  );
};

export default Book;
