import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { FiSave } from "react-icons/fi";

function WindowButtons() {
  return (
    <div className="header-buttons">
      <button className="header-buttons__btn header-buttons__close">
        <AiFillDelete />
      </button>
      <button className="header-buttons__btn header-buttons__edit">
        <AiFillEdit />
      </button>
      <button className="header-buttons__btn header-buttons__save">
        <FiSave />
      </button>
    </div>
  );
}

export default WindowButtons;
