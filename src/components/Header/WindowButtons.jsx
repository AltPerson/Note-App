import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { FiSave } from "react-icons/fi";
import { useContext, useState } from "react";
import { NotesContext } from "../../data/Context";
import DeleteModal from "./DeleteModal";

function WindowButtons() {
  const { isSelected, isEdit } = useContext(NotesContext);
  const [selected, setSelected] = isSelected;
  const [edit, setEdit] = isEdit;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header-buttons">
      <button
        disabled={selected.is ? false : true}
        className={`header-buttons__btn header-buttons__delete ${
          selected.is ? "" : "disabled"
        }`}
        onClick={() => setIsOpen(true)}
      >
        <AiFillDelete />
      </button>
      <button
        disabled={selected.is ? false : true}
        className={`header-buttons__btn header-buttons__edit ${
          selected.is ? "" : "disabled"
        }`}
        onClick={() => {
          setEdit({ is: true, id: selected.id });
          setSelected({ is: false });
        }}
      >
        <AiFillEdit />
      </button>
      <button
        disabled={edit.is ? true : false}
        type="button"
        className={`header-buttons__btn header-buttons__save ${
          edit.is ? "" : "disabled"
        }`}
      >
        <FiSave />
      </button>
      {isOpen && (
        <DeleteModal
          setIsOpen={setIsOpen}
          selected={selected}
          setSelected={setSelected}
        />
      )}
    </div>
  );
}

export default WindowButtons;
