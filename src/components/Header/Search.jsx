import { FiSearch } from "react-icons/fi";
import { NotesContext } from "../../data/Context";
import { findWord } from "../../utils/findWord";
import { useState, useContext, useEffect } from "react";

function Search() {
  const { data, isSelected } = useContext(NotesContext);
  const [value, setValue] = useState("");
  const [selected, setSelected] = isSelected;
  useEffect(() => {
    if (value === "") {
      setSelected({ is: false, id: null });
      return;
    }
    findWord(value, data, setSelected);
  }, [value]);
  return (
    <div className="header-search">
      <FiSearch className="header-search__label" />
      <input
        className="header-search__input"
        value={value}
        type="text"
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter a query..."
      />
    </div>
  );
}

export default Search;
