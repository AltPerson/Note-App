import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { FiSave } from "react-icons/fi";
import { useContext, useState } from "react";
import { NotesContext } from "../../data/Context";
import DeleteModal from "./DeleteModal";
import { addNote } from "../../data/db/index";

function WindowButtons() {
  const { isSelected, isEdit, isCreate, area } = useContext(NotesContext);
  const [selected, setSelected] = isSelected;
  const [edit, setEdit] = isEdit;
  const [create, setCreate] = isCreate;
  const [areaText, setAreaText] = area;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header-buttons">
      <button
        disabled={(selected.is && !edit.is) || create ? false : true}
        className={`header-buttons__btn header-buttons__delete ${
          (selected.is && !edit.is) || create ? "" : "disabled"
        }`}
        onClick={() => {
          if (create) {
            setCreate(false);
            return;
          }
          setIsOpen(true);
        }}
      >
        <AiFillDelete />
      </button>
      <button
        disabled={selected.is && !edit.is ? false : true}
        className={`header-buttons__btn header-buttons__edit ${
          selected.is && !edit.is ? "" : "disabled"
        }`}
        onClick={() => {
          setEdit({ is: true, id: selected.id });
        }}
      >
        <AiFillEdit />
      </button>
      <button
        disabled={edit.is || create ? false : true}
        type="button"
        className={`header-buttons__btn header-buttons__save ${
          edit.is || create ? "" : "disabled"
        }`}
        onClick={() => {
          if (create) {
            addNote(areaText);
            setAreaText("");
            setCreate(false);
            return;
          }
          setEdit({ is: false, id: null });
        }}
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
