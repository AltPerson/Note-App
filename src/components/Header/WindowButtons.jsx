import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { FiSave } from "react-icons/fi";

function WindowButtons() {
  return (
    <div className="header-buttons">
      <button
        disabled
        className="header-buttons__btn header-buttons__close disabled"
      >
        <AiFillDelete />
      </button>
      <button
        disabled
        className="header-buttons__btn header-buttons__edit disabled"
      >
        <AiFillEdit />
      </button>
      <button
        disabled
        type="button"
        className="header-buttons__btn header-buttons__save disabled"
      >
        <FiSave />
      </button>
    </div>
  );
}

export default WindowButtons;
