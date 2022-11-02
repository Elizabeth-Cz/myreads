const SearchButton = ({ setShowSearchpage, showSearchPage }) => {
  return (
    <div className="open-search">
      <button
        onClick={() => {
          setShowSearchpage(!showSearchPage);
        }}
      >
        Add a book
      </button>
    </div>
  );
};

export default SearchButton;
