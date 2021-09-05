import SidebarListItem from "./SidebarListItem";
import { getTitleFromText } from "../../../utils/getTitleFromText";
import { getDateFromItem } from "../../../utils/getDateFromItem";
import { useContext } from "react";
import { NotesContext } from "../../../data/Context";

function SidebarList() {
  const { data, isSelected } = useContext(NotesContext);
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
            id={item.id}
          />
        ))}
    </div>
  );
}

export default SidebarList;
