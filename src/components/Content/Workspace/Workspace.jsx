import Editarea from "./Editarea";
import Renderedarea from "./Renderedarea";
import { useState } from "react";
import { getPlainText } from "../../../utils/getPlainText";

function Workspace({ textR }) {
  const [value, setValue] = useState("");
  const [save, setSave] = useState(false);
  const test = `1) List\n
2) List\n
3) List\n
# Some value\n
~~Other Things~~`;
  return <Renderedarea text={test} time={new Date(Date.now())} />;

  return (
    <div className="content-workspace workspace">
      <Editarea value={value} setValue={setValue} setSave={setSave} />
    </div>
  );
}

export default Workspace;
