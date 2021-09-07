import React from "react";
import "./App.scss";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import { NotesContext } from "./data/Context";
import { db } from "./data/db/index";
import { useLiveQuery } from "dexie-react-hooks";
import { useState } from "react";

function App() {
  const notesList = useLiveQuery(() => db.notes?.toArray(), []);
  const [selected, setSelected] = useState({ is: false, id: null });
  const [edit, setEdit] = useState({ is: false, id: null });
  const [create, setCreate] = useState(false);
  const [areaText, setAreaText] = useState("");
  return (
    <div
      className="app"
      onClick={(e) => {
        if (e.target.nodeName !== "path" && e.target.nodeName !== "svg") {
          (e.target?.className.includes("app") ||
            e.target?.className.includes("sidebar")) &&
            setSelected({ is: false, id: null });
        }
      }}
    >
      <div className="app-wrapper">
        <NotesContext.Provider
          value={{
            data: notesList,
            isSelected: [selected, setSelected],
            isEdit: [edit, setEdit],
            isCreate: [create, setCreate],
            area: [areaText, setAreaText],
          }}
        >
          <Header />
          <Content />
        </NotesContext.Provider>
      </div>
    </div>
  );
}

export default App;
