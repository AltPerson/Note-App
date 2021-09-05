import { useState } from "react";

function Editarea({ item }) {
  const [value, setValue] = useState(item.text);
  return (
    <div className="workspace-editarea">
      <textarea
        className="workspace-editarea__text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default Editarea;
