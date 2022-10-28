const BookShelfChanger = ({ changeShelf, shelf }) => {
  return (
    <div className="book-shelf-changer">
      <select defaultValue={shelf} onClick={changeShelf}>
        <option value="none" disabled>
          Move to...
        </option>
        <option value="">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default BookShelfChanger;
