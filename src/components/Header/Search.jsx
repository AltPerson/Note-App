import { FiSearch } from "react-icons/fi";

function Search() {
  return (
    <div className="header-search">
      <FiSearch className="header-search__label" />
      <input
        className="header-search__input"
        type="text"
        placeholder="Enter a query..."
      />
    </div>
  );
}

export default Search;
