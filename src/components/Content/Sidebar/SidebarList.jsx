import SidebarListItem from "./SidebarListItem";
import { dateArray } from "../../../Data";
import { getTitleFromText } from "../../../utils/getTitleFromText";
import { getDateFromItem } from "../../../utils/getDateFromItem";

function SidebarList() {
  return (
    <div className="sidebar-list list">
      {dateArray
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .map((item) => (
          <SidebarListItem
            key={item.id}
            title={getTitleFromText(item.text, true)}
            text={getTitleFromText(item.text, false)}
            time={getDateFromItem(item.date)}
          />
        ))}
    </div>
  );
}

export default SidebarList;
