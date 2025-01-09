import { useState } from "react";
function FileExplorer({ folderData }) {
  const [showChildren, setShowChildren] = useState(false);
  console.log(folderData);
  const handleClick = () => {
    setShowChildren(!showChildren);
  };
  return (
    <div>
      <div className="container">
        <h2>
          {folderData.type === "folder" ? (showChildren ? "📂" : "📁") : "📄"}
          <span onClick={handleClick} className="folder-name">
            {folderData.name}
          </span>
        </h2>
        {showChildren &&
          folderData?.children?.map((child, index) => {
            return <FileExplorer key={index} folderData={child} />;
          })}
      </div>
    </div>
  );
}

export default FileExplorer;
