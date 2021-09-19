import { useState, useEffect, useContext } from "react";
import { updateNote } from "../../../data/db";
import { NotesContext } from "../../../data/Context";

function Editarea({ item, forEdit }) {
  const { area } = useContext(NotesContext);
  const [areaText, setAreaText] = area;
  const [value, setValue] = useState(forEdit ? item.text : "");

  useEffect(() => {
    forEdit && updateNote(value, item.id, Date.now());
  }, [forEdit, item?.id, value]);
  return (
    <div className="workspace-editarea">
      <textarea
        className="workspace-editarea__text"
        value={forEdit ? value : areaText}
        onChange={(e) => {
          forEdit ? setValue(e.target.value) : setAreaText(e.target.value);
        }}
      />
    </div>
  );
}

export default Editarea;
