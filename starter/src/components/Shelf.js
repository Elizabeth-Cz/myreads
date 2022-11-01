import Book from "./Book";
const Shelf = ({ shelfTitle, books, updateBooks }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.length > 0 &&
            books.map((book) => (
              <Book
                book={book}
                key={book.id}
                shelf={book.shelf}
                updateBooks={updateBooks}
              />
            ))}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;
