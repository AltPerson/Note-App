import { useState, useEffect, useContext, useRef } from 'react';
import { updateNote } from '../../../data/db';
import { NotesContext } from '../../../data/Context';

function Editarea({ item, forEdit }) {
  const { area } = useContext(NotesContext);
  const [areaText, setAreaText] = area;
  const [value, setValue] = useState(forEdit ? item.text : '');
  const textAreaRef = useRef(null);

  useEffect(() => {
    textAreaRef && textAreaRef.current.focus();
  }, []);

  useEffect(() => {
    forEdit && updateNote(value, item.id, Date.now());
  }, [forEdit, item?.id, value]);

  return (
    <div className="workspace-editarea">
      <textarea
        ref={textAreaRef}
        className="workspace-editarea__text"
        value={forEdit ? value : areaText}
        onFocus={(e) =>
          e.currentTarget.setSelectionRange(
            e.currentTarget.value.length,
            e.currentTarget.value.length,
          )
        }
        onChange={(e) => {
          forEdit ? setValue(e.target.value) : setAreaText(e.target.value);
        }}
      />
    </div>
  );
}

export default Editarea;
