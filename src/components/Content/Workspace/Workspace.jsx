import Editarea from "./Editarea";
import Renderedarea from "./Renderedarea";
import { getItem } from "../../../utils/getItemFromArray";
import { useContext } from "react";
import { NotesContext } from "../../../data/Context";
import Emptyarea from "./Emptyarea";

function Workspace({ side }) {
  const { data, isSelected, isEdit, isCreate } = useContext(NotesContext);
  const [selected] = isSelected;
  const [edit] = isEdit;
  const [create] = isCreate;
  return (
    <div className={`content-workspace workspace ${!side ? "hide" : ""}`}>
      {create ? (
        <Editarea forEdit={false} />
      ) : edit.is ? (
        <Editarea item={getItem(data, edit)} forEdit={true} />
      ) : selected.is ? (
        <Renderedarea
          text={getItem(data, selected).text}
          time={new Date(getItem(data, selected).date)}
        />
      ) : (
        <Emptyarea />
      )}
    </div>
  );
}

export default Workspace;
