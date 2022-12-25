import React from "react";

export default function SubFolder({ subFolders }) {
  console.log(subFolders);

  if (!subFolders) {
    return null;
  }
  return subFolders.map(folder => {
    return (
      <ul key={folder.toTable}>
        <li>
          <i className="fa fa-folder folder-icon" />
          <span className="folder-name">{folder.toTable}</span>
        </li>

        <SubFolder key={folder.toTable} subFolders={folder.foreign_keys} />
      </ul>
    );
  });
}
