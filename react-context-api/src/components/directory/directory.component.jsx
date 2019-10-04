import React from "react";
import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

const DirectoryComponent = ({ sections }) => (
  <div className="directory-menu" data-testid="directory-component">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

export default DirectoryComponent;
