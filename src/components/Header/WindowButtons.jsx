import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { FiSave } from "react-icons/fi";
import { FaList } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
import { useContext, useState } from "react";
import { NotesContext } from "../../data/Context";
import DeleteModal from "./DeleteModal";
import { addNote } from "../../data/db/index";

function WindowButtons() {
  const { data, isSelected, isEdit, isCreate, area, isSide } =
    useContext(NotesContext);
  const [selected, setSelected] = isSelected;
  const [edit, setEdit] = isEdit;
  const [create, setCreate] = isCreate;
  const [areaText, setAreaText] = area;
  const [side, setSide] = isSide;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header-buttons">
      {data?.length > 0 && (
        <button
          disabled={edit.is || create ? true : false}
          type="button"
          className={`header-buttons__btn header-buttons__list ${
            edit.is || create ? "disabled" : ""
          }`}
          onClick={() => {
            setSide(!side);
            setSelected({ is: false, id: null });
          }}
        >
          <FaList />
        </button>
      )}
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
      <button
        disabled={selected.is ? false : edit.is ? true : create ? true : false}
        type="button"
        className={`header-buttons__btn header-buttons__create ${
          selected.is ? "" : edit.is ? "disabled" : create ? "disabled" : ""
        }`}
        onClick={() => {
          setSelected({ is: false, id: null });
          setCreate(true);
        }}
      >
        <IoIosCreate />
      </button>
      <button
        disabled={selected.is || (edit.is && create) ? false : true}
        className={`header-buttons__btn header-buttons__edit ${
          selected.is || (edit.is && create) ? "" : "disabled"
        }`}
        onClick={() => {
          setEdit({ is: true, id: selected.id });
          setSelected({ is: false, id: null });
        }}
      >
        <AiFillEdit />
      </button>
      <button
        disabled={(selected.is && !edit.is) || create ? false : true}
        className={`header-buttons__btn header-buttons__delete ${
          (selected.is && !edit.is) || create ? "" : "disabled"
        }`}
        onClick={() => {
          if (create) {
            setCreate(false);
            setSelected({ is: false, id: null });
            setAreaText("");
            return;
          }
          setIsOpen(true);
        }}
      >
        <AiFillDelete />
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
