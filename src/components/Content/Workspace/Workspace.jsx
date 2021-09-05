import Editarea from "./Editarea";
import Renderedarea from "./Renderedarea";
import { useState } from "react";
import { getPlainText } from "../../../utils/getPlainText";
import { useContext } from "react";
import { NotesContext } from "../../../data/Context";
import Emptyarea from "./Emptyarea";

function Workspace() {
  const { data, isSelected, isEdit } = useContext(NotesContext);
  const [selected, setSelected] = isSelected;

  const [edit, setEdit] = isEdit;

  const item = data?.filter((item) => item.id === selected.id);
  item && console.log(item[0]);
  return (
    <div className="content-workspace workspace">
      {edit.is && <Editarea item={item[0]} />}
      {selected.is ? (
        <Renderedarea text={item[0].text} time={new Date(item[0].date)} />
      ) : (
        <Emptyarea />
      )}
    </div>
  );
}

export default Workspace;
