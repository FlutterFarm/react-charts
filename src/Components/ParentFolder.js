import React from "react";

import SubFolder from "./SubFolder";

export default function ParentFolder({
  id,
  folder,
  handleClick,
  isFolderActive
}) {
  return (
    <div className="folder">
      <ul>
        <li onClick={() => handleClick(id)}>
          <i className="fa fa-folder folder-icon" />
          <span className="folder-name">{folder.table_name}</span>
        </li>
        {isFolderActive !== -1 ? (
          <SubFolder subFolders={folder.foreign_keys} />
        ) : null}
      </ul>
    </div>
  );
}

/* <div
        className="folder-info"
        onClick={() => handleFolderClick(parentFolder)}
      >
        {isFolderActive !== -1 ? (
          <i className="fa fa-folder-open" />
        ) : (
          <i className="fa fa-folder parent-folder-icon" />
        )}
        <span className="parent-folder-name">{parentFolder}</span>
      </div>
      {isFolderActive !== -1 ? <SubFolder folder={subFolder} /> : null} */
