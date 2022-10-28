import Book from "./Book";
const Shelf = ({ shelfTitle, books }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books &&
            books.map((book) => (
              <li key={book.id}>
                <Book book={book} shelf={book.shelf} />
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;
