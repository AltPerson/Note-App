import { IoIosCreate } from "react-icons/io";
import { NotesContext } from "../../../data/Context";
import { useContext } from "react";

function Emptyarea() {
  const { isCreate } = useContext(NotesContext);
  const [, setCreate] = isCreate;
  return (
    <div className="workspace-emptyarea">
      <IoIosCreate
        className="workspace-emptyarea__icon"
        onClick={() => setCreate(true)}
      />
    </div>
  );
}

export default Emptyarea;
