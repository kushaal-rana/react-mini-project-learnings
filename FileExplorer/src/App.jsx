import { useState } from "react";

import FileExplorer from "./component/FileExplorer";
import data from "./data/data.json";
import "./App.css";
function App() {
  return (
    <>
      <h1>Welome to React File Explorer</h1>
      <FileExplorer folderData={data} />
    </>
  );
}

export default App;
