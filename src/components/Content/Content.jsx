import Sidebar from "./Sidebar/Sidebar";
import WorkSpace from "./Workspace/Workspace";
import "./Content.scss";
import { NotesContext } from "../../data/Context";
import { useContext } from "react";

function Content() {
  const { data, isSide } = useContext(NotesContext);
  const [side] = isSide;
  return (
    <div className="content">
      {data?.length > 0 && <Sidebar side={side} />}
      <WorkSpace side={side} />
    </div>
  );
}

export default Content;
