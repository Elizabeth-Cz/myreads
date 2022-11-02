import { useState } from "react";

const Book = ({ book, updateBooks }) => {
  const [shelf, setShelf] = useState(book.shelf);

  const changeShelf = (book, shelf) => {
    setShelf(shelf);
    if (book.shelf !== shelf) {
      updateBooks(book, shelf);
    }
  };

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${
                book.imageLinks && book.imageLinks.thumbnail
              })`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select
              defaultValue={shelf}
              onChange={(e) => changeShelf(book, e.target.value)}
            >
              <option value="none">Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors &&
            book.authors.map((author) => <div key={author}>{author}</div>)}
        </div>
      </div>
    </li>
  );
};

export default Book;
