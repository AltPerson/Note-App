import SidebarList from "./SidebarList";

function Sidebar({ side }) {
  return (
    <div className={`content-sidebar sidebar ${side ? "hide" : ""}`}>
      <SidebarList />
    </div>
  );
}

export default Sidebar;
