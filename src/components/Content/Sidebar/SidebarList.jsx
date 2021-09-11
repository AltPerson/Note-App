import SidebarListItem from "./SidebarListItem";
import { getTitleFromText } from "../../../utils/getTitleFromText";
import { getDateFromItem } from "../../../utils/getDateFromItem";
import { useContext } from "react";
import { NotesContext } from "../../../data/Context";

function SidebarList() {
  const { data, isSelected, isSide, isEdit, isCreate } =
    useContext(NotesContext);
  const [, setSide] = isSide;
  const [edit] = isEdit;
  const [create] = isCreate;
  return (
    <div className="sidebar-list list">
      {data
        ?.sort((a, b) => new Date(b.date) - new Date(a.date))
        .map((item) => (
          <SidebarListItem
            key={item.id}
            title={getTitleFromText(item.text, true)}
            text={getTitleFromText(item.text, false)}
            time={getDateFromItem(item.date)}
            isSelected={isSelected}
            setSide={setSide}
            id={item.id}
            isEdit={edit.is}
            isCreate={create}
          />
        ))}
    </div>
  );
}

export default SidebarList;
