import Sidebar from "./Sidebar/Sidebar";
import WorkSpace from "./Workspace/Workspace";
import "./Content.scss";

function Content() {
  return (
    <div className="content">
      <Sidebar />
      <WorkSpace />
    </div>
  );
}

export default Content;
